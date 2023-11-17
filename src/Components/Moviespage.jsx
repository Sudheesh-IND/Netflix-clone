import React, { useEffect, useRef, useState } from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn
} from 'mdb-react-ui-kit';

import './Netflix.css'

import axios from 'axios';
import Horror from './Horror';
import Romance from './Romance';
import Yourpicks from './Yourpicks';
import Popular from './Popular';


function Moviespage() {

  const [banner, setBanner] = useState([])

  let i=Math.floor(Math.random(1)*20)
    console.log(i)
  

  const fetchMovie = async () => {
    const { data } = await axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-us&page=1&sort_by=popularity.desc&with_genres=romance&api_key=376e45b97d32f40b86aa5bff2c9563d2')
    console.log(data)
    setBanner(data.results[i])
    console.log(banner)
 
     
  
  }

  useEffect(() => {
    fetchMovie()
  }, [])

  return (
    <>
      <div className='movie-main'>
        <img src={`https://image.tmdb.org/t/p/w500${banner.backdrop_path}`} alt="" />
        <div className='movie-main-2'>
          <div>
            <MDBNavbar style={{ height: '100px' }} className='shadow-0 fixed-top' >
              <MDBContainer fluid>
                <div className="container d-flex flex-col">
                  <MDBNavbarBrand>
                    <img style={{ width: '100px', height: '30px' }} src="https://img01.products.bt.co.uk/content/dam/bt/portal/images/logos/tv/Netflix_Logo_Final.png" alt="" />
                  </MDBNavbarBrand>

                  {/* <a className='mt-2' href="">Home</a> */}
                </div>
                <div className="ms-auto">

                </div>

              </MDBContainer>
            </MDBNavbar>
          </div>
          <div className='movie-name p-3'>
             <h1>{banner.title}</h1>
             <p className='mt-2'>{banner.overview}</p>
             <button>Play</button>
             <button>More info</button>
          </div>
        </div>



      </div>
      <div style={{ padding: '30px' }} className='movie-list'>

        <div >
          <h2 className='mb-3 headings'>Latest</h2>
          <Horror />

        </div>

        <div>
          <h2 className='mb-3 headings mt-3'>Hollywood</h2>
          <Romance />
        </div>

        <div>
          <h2 className='mb-3 headings mt-3'>Your Picks</h2>
          <Yourpicks />
        </div>

        <div>
          <h2 className='mb-3 headings mt-3'>Popular</h2>
          <Popular />
        </div>




      </div>
    </>

  )
}

export default Moviespage
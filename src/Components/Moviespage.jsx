import React, { useEffect, useRef, useState } from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn
} from 'mdb-react-ui-kit';
import axios from 'axios';
import './Netflix.css'

function Moviespage() {

  const [movies,setMovies]=useState([])
  const [fetch,setFetch]=useState(false)
  const initialized = useRef(false);

  const options = {
    method: 'GET',
    url: 'https://ott-details.p.rapidapi.com/advancedsearch',
    params: {
      start_year: '1970',
      end_year: '2020',
      min_imdb: '6',
      max_imdb: '7.8',
      genre: 'action',
      language: 'english',
      type: 'movie',
      sort: 'latest',
      page: '2'
    },
    headers: {
      'X-RapidAPI-Key': '03c841a275mshe4beb9122d6f257p175f91jsn422a8f55d1a5',
      'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
    }
  };

  const fetchMovies=async()=>{

    
        const response=await axios.request(options)
        console.log(response)
        setMovies(response.data)

      }
  
   
  
  console.log(movies)

  useEffect(()=>{
 
    if (!initialized.current) {
      initialized.current = true
  
      fetchMovies()
    }
    
    
},[])
  return (
    <>
    <div className='movie-main'>
    <div className='movie-main-2'>
    <div>
      <MDBNavbar style={{height:'100px'}} className='shadow-0 fixed-top' >
       <MDBContainer fluid>
        <div className="container d-flex flex-col">
        <MDBNavbarBrand>
            <img style={{width:'100px',height:'30px'}} src="https://img01.products.bt.co.uk/content/dam/bt/portal/images/logos/tv/Netflix_Logo_Final.png" alt="" />
        </MDBNavbarBrand>

        <a className='mt-2' href="">Home</a>
        </div>
        <div className="ms-auto">
        
        </div>
      
        </MDBContainer>
       </MDBNavbar>
    </div>
    </div>
    


    </div>
    <div className='movielist-1'>

    </div>
    </>
    
  )
}

export default Moviespage
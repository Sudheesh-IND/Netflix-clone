
import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Netflix.css'
import axios from 'axios';


function Romance({movie}) {
    const [movies,setMovies]=useState([])
  

    const getRomance=async()=>{
      const response=await axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-us&page=4&sort_by=popularity.desc&with_genres=romance&api_key=376e45b97d32f40b86aa5bff2c9563d2')
    //  console.log(data)
    // console.log(response)
      setMovies(response.data.results)
      console.log(movies)
    }
  
    useEffect(()=>{
        getRomance()
    },[])
    // console.log('fbaefbzdfbdzfbdfz',movie)
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
  return (
    <div>
    
        <div style={{ position: "relative" }}>
        <Carousel responsive={responsive}>
        {
            movies.map((item)=>(
                <div  >
                    <div className='movie-card '>
                    <img className='movie-img'  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" />

                    </div>
                </div>
            ))
          }
        </Carousel>
      </div>
    </div>
  )
}

export default Romance
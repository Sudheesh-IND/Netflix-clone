import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn
  } from 'mdb-react-ui-kit';
import './Netflix.css'
import { Link } from 'react-router-dom';


function Startpage() {
  return (
    <div className='main'>
      <div className='main-2'>
      <div>
      <MDBNavbar style={{height:'100px'}} className='shadow-0 fixed-top' >
      <MDBContainer fluid>
        <div className="container">
        <MDBNavbarBrand>
            <img style={{width:'200px'}} src="https://img01.products.bt.co.uk/content/dam/bt/portal/images/logos/tv/Netflix_Logo_Final.png" alt="" />
        </MDBNavbarBrand>
        </div>
        <div className="ms-auto">
        
        </div>
      
      </MDBContainer>
    </MDBNavbar>
      </div>
      <div className="container">
        <div className="row">
            <div className="col-md-12 row-2"  >
                 <div>
                 <h1>
                      Enjoy big movies, hit series and more from ₹ 149.</h1>
                 <h4 className='mt-3'>Join today. Cancel anytime.</h4>
                 <div>
                    <Link to={'/movies'}>

                    <button className='start-btn'>Get Started  <i class="fa-solid fa-angle-right"></i></button>

                    </Link>
                 </div>
                 </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Startpage
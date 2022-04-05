 import React, { useEffect, useState } from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import Reviews from '../Reviews/Reviews';
 import "./DivContainer.css"
 
 const DivContainer = () => {
     const [reviws,setReviews]= useState([]);
     useEffect(()=>{
         fetch("Review.json")
         .then(Response =>Response.json())
         .then(data =>setReviews (data));
     },[])
    
     return (
         <div className='Main_container d-flex row align-items-center justify-content-center container  mt-5 mb-5 mx-0'>
             <div className="TextContainer col-md-6 my-auto mb-5 mt-5">
                 <h1 className='fw-bold'>Chose Your <span className='TomatoColor fw-bold'>Laptop</span></h1>
                 <h3>Buy The best Product For you...</h3>
                 <p className='mt-3 mb-3'>Find out about the best mobile cloud service solutions here. Security Policies. Mobile Device Experts. Ultimate Guide. Mobile Protection. Highlights: Product Demo Available, Resources Available, Case Studies Available.</p>
                 <button className='TomatoButton'><a href="#"  class="BtnText mb-4">Live Demo</a></button>
             </div>
             <div className="ImgContainer col-md-6">
                 <img className='img-fluid rounded' src="https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg" alt="" />
             </div>

             <div className='reviews'>
                 
                 {
                     reviws.slice(0, 3).map((review) => (
                    <CustomerReview key={review.id} review={review}></CustomerReview>
                         ))
                 }
                
             </div>
             
         </div>
     );
 };
   

 export default DivContainer;
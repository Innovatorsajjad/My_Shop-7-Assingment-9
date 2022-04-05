 import React from 'react';
 import "./DivContainer.css"
 
 const DivContainer = () => {
     return (
         <div className='Main_container d-flex row align-items-center justify-content-center container mt-5'>
             <div className="TextContainer col-md-6">
                 <h1 className='fw-bold'>Chose Your <span className='TomatoColor fw-bold'>Laptop</span></h1>
                 <h3>Buy The best Product For you...</h3>
             </div>
             <div className="ImgContainer col-md-6">
                 <img className='img-fluid rounded' src="https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg" alt="" />
             </div>
             
         </div>
     );
 };
 
 export default DivContainer;
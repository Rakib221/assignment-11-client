import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "./ShowReview.css";
// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

const ShowReview = () => {
  let [reviewData,setReviewData]=useState([])
 
  useEffect(() =>{
    fetch('https://arcane-springs-22787.herokuapp.com/showReview')
    .then(res=>res.json())
    .then(data=>{
      setReviewData(data)
    },[])


  },[])
    return (
      <>
          <h1 className="servicesTitle text-center mt-5 mb-5 ">Client Reviews</h1>

        <div className="row showReview">

         <Swiper slidesPerView={1} spaceBetween={10} pagination={{
  "clickable": true
}} breakpoints={{
  "640": {
    "slidesPerView": 2,
    "spaceBetween": 20
  },
  "768": {
    "slidesPerView": 2,
    "spaceBetween": 40
  },
  "1071": {
    "slidesPerView": 3,
    "spaceBetween": 40
  }
  
  
}} className="mySwiper">

  {reviewData.map(review=><>
    <SwiperSlide >
        <div className="reviewCard" >
         <div className="info-sec-cli">
           <div  className="avartar-cli mt-3" >
           <img  src={review.avartar}  alt=""/>
         </div>
         <div className="name-cli">
     <p className="Dname-cli">{review.name}</p>
     <small className="Date-cli">{review.Redate}</small>
         </div>
         <p className="message-cli">{review.description}</p>
         </div>
   
        </div>
         
 
    </SwiperSlide>
  </>)}
 

  </Swiper>
    
        </div>
        </>
    );
};

export default ShowReview;
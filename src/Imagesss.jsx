import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from 'swiper/modules';
import { NavLink ,Link} from 'react-router-dom';
import 'swiper/css';
import Contact from './Contact';



const Imagesss = () => {
  const[projects,setprojects]=useState([])


  useEffect(()=>{
    axios.get("data.json")
    .then(res => {
      setprojects(res.data.projects)
      console.log(res.data.projects);
      
      })
  },[])




  return (
    <div className="homesec3" id="latest">
    
        <div className="sectext wow fadeIn" data-wow-duration="2s" data-wow-delay="0.1s">
          <h3>Latest builds.</h3>
          <Link to="/">View Projects</Link>
        </div>
     <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          modules={[FreeMode, Pagination]}

          className="mySwiper wow fadeInUp " data-wow-duration="2s" data-wow-delay="0.5s"
        >
          {projects.slice(1, 6).map((project) => (
            <SwiperSlide key={project.id}><a href={project.link} target="_blank"><img src={project.photo} alt="" /></a></SwiperSlide>
          ))}
        </Swiper>





    </div>
  )
}

export default Imagesss
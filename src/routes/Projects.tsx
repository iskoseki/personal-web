import React, { useRef, useState } from "react";
import img4 from "../assets/images/projects-Images/chileTur.png";
import img3 from "../assets/images/projects-Images/full-copec.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/core";

const Projects = () => {
  interface Project {
    name: string;
    img?: string;
    url: string;
  }
  const Projectos: Project[] = [
    {
      name: "Chiletur",
      img: img4,
      url: "https://www.chiletur.cl/",
    },
    {
      name: "Full Copec",
      img: img3,
      url: "https://www.chiletur.cl/",
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap z-50 w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-white text-4xl font-medium title-font mb-2">
              Projects
            </h1>
            <div className="h-1 w-10 bg-zinc-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Here you will find some of personal and professional projects online
            to check.
          </p>
        </div>
        <div className="hidden md:block">
          <div className="flex justify-center items-center h-auto flex-wrap -m-4 ">
            {Projectos.map((item) => (
              <div key={item.name} className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={item.img}
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    {item.name}
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    {item.name}
                  </h2>
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                  <button className="px-6 py-3 mt-6  rounded  bg-indigo-500 text-white">
                    <a target="_blank" href={item.url}>
                      Live
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="sliderContainer md:hidden">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 60,
              stretch: 0,
              depth: 100,
              modifier: 3,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {Projectos.map((item) => (
              <SwiperSlide key={item.name}>
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src={item.img}
                      alt="content"
                    />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      {item.name}
                    </h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      {item.name}
                    </h2>
                    <p className="leading-relaxed text-base">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                    <button className="px-6 py-3 mt-6  rounded  bg-indigo-500 text-white">
                      Live
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;

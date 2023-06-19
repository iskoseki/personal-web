import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Project } from "../utils/ProjectsList";

interface Props {
  projects: Project[];
}

const ProjectsMobile = ({ projects }: Props) => {
  return (
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
      pagination={false}
      className="mySwiper"
    >
      {projects.map((item) => (
        <SwiperSlide key={item?.id}>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={item?.img}
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                {item?.name}
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                {item?.name}
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <button className="px-6 py-3 mt-6  rounded  bg-indigo-500 text-white">
                Live
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectsMobile;

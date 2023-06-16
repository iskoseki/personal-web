// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import ProjectsMobile from "../components/ProjectsMobile";
import { Projectos } from "../utils/ProjectsList";

const PrjectTitle = () => {
  return (
    <>
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-white text-4xl font-medium title-font mb-2">
          Some projects
        </h1>
        <div className="h-1 w-10 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
        Here you will find some of personal and professional projects online to
        check.
      </p>
    </>
  );
};

const Projects = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap z-50 w-full mb-20">
          <PrjectTitle />
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
          <ProjectsMobile projects={Projectos} />
        </div>
      </div>
    </section>
  );
};

export default Projects;

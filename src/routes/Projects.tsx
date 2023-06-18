// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import ProjectsMobile from "../components/ProjectsMobile";
import { Project, Projectos } from "../utils/ProjectsList";

const PrjectTitle = () => {
  return (
    <>
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-6xl text-white text-6xl font-bold title-font mb-2">
          Some projects
        </h1>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-2xl text-gray-500">
        Here you will find some of personal and professional projects online to
        check. 👇
      </p>
    </>
  );
};
const CardProject = ({ name, img }: Project) => {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
        <img
          className="h-40 rounded w-full object-cover object-center mb-6"
          src={img}
          alt="content"
        />
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
          {name}
        </h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
          {name}
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
  );
};

const Projects = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap z-50 w-full my-12 mb-20">
          <PrjectTitle />
        </div>
        <div className="hidden md:block">
          <div className="flex justify-center items-center h-auto flex-wrap -m-4 ">
            {Projectos.map((item) => (
              <CardProject
                key={item.id}
                id={item.id}
                img={item.img}
                url={item.url}
                name={item.name}
              />
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

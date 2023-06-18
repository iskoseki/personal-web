import { Project } from "../utils/ProjectsList";

interface Props {
  projects: Project[];
}

const CardProject = ({ projects }: Props) => {
  return (
    <div key={projects.name} className="xl:w-1/4 md:w-1/2 p-4">
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
          <a target="_blank" href={url}>
            Live
          </a>
        </button>
      </div>
    </div>
  );
};

export default CardProject;

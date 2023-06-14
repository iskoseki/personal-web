import { FC } from "react";
import { FaGithub, FaCoffee, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

const Presentation: FC = () => {
  return (
    <header className="flex flex-wrap h-screen justify-center items-center">
      <div className="flex sm:w-auto w-80  flex-col md:flex-row md:gap-10 ">
        <div className="flex justify-center mb-10">
          <img
            className="rounded-full md:hidden border-2 img-responsive "
            src="/src/assets/porfile.jpg"
            width={190}
            alt="porfile"
          />
        </div>
        <div className="  w-96 md:w-auto">
          <h1 className="text-left font-black  text-4xl xl:text-6xl ">
            Hello everyone, I'm Leandro Bordon 👋🏻 <FaCoffee />
          </h1>

          <p className="text-left lg:text-2xl  mt-3">
            An apossionate React Developer based in Rosario, Argentina.📍
          </p>
          <div className="flex gap-5 mt-6">
            <a
              href="https://github.com/kosekijsx"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <IconContext.Provider
                value={{
                  color: "",
                  size: "30px",
                  className: "global-class-name",
                }}
              >
                <FaGithub />
              </IconContext.Provider>
            </a>

            <a
              href="https://www.linkedin.com/in/leandro-bordon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconContext.Provider
                value={{
                  color: "",
                  size: "30px",
                  className: "global-class-name",
                }}
              >
                <FaLinkedin />
              </IconContext.Provider>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Presentation;

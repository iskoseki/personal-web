import { FC } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

const Presentation: FC = () => {
  return (
    <header className="flex flex-wrap h-screen justify-center items-center">
      <div className="flex sm:w-auto w-80  flex-col md:flex-row md:gap-10 ">
        <div className="flex flex-col mx-8 lg:w-24 ">
          <p className="">We design, develop and deliver</p>
          <h1 className=" font-black  text-3xl xl:text-6xl ">
            Bespoke Software Development
          </h1>

          <p className="text lg:text-2xl  mt-3">
            We design, develop and deliver intelligent high-tech bespoke
            software solutions for{" "}
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

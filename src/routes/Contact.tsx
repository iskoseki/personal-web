import { FC, useEffect, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Carrousel from "../components/Carrousel";

export const Header = () => {
  return (
    <header className="mx-auto  bg-blue-500 flex flex-wrap h-screen text-black  justify-center items-center">
      <div className="flex container sm:w-auto w-80  flex-col md:flex-row md:gap-10 ">
        <div className="flex flex-col mx-4 md:w-auto">
          <h1 className="  md:tracking-widest antialiased text-left font-black text-3xl xl:text-6xl ">
            Bespoke Web Development from Conception to Delivery{" "}
          </h1>

          <p className=" leading-7 text-2xl text-left lg:text-2xl  mt-3">
            We design, develop and deliver intelligent high-tech bespoke
            software solutions for <span className="font-bold">Artists</span>{" "}
            and <span className="font-bold">Brands.</span>
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
                  size: "35px",
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
                  size: "35px",
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

export const FormSection = () => {
  return (
    <section className="animate-fade-up animate-once animate-ease-out px-2 flex justify-center items-center h-screen bg-blue-500 ">
      <div className="py-8 px-4 mx-auto rounded-sm bg-black max-w-screen-sm lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Sign up for contact
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
            Stay up to date with the roadmap progress, announcements and
            exclusive discounts feel free to sign up with your email.
          </p>
          <form action="#">
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Email address
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
              We care about the protection of your data.{" "}
              <a
                href="#"
                className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
              >
                Read our Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
const ParallaxContainer = () => {
  return (
    <Parallax pages={3} style={{ top: "0", left: "0" }}>
      <ParallaxLayer offset={0} speed={0.2}>
        <Header />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.4}>
        <Carrousel />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1.5}>
        <FormSection />
      </ParallaxLayer>
    </Parallax>
  );
};

const Contact: FC = () => {
  return (
    <div className="bg-white">
      <ParallaxContainer />
    </div>
  );
};
export default Contact;

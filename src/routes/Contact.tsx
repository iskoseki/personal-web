import { FC } from "react";

const Contact: FC = () => {
  return (
    <section className="text-gray-600 body-font relative  overflow-hidden">
      <div className="absolute inset-0 blur-sm  bg-gray-100">
        <iframe
          className="ifram xl:w-screen sm:h-screen h-full w-full"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107134.57857593232!2d-60.77921227296001!3d-32.952182141983656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b6539335d7d75b%3A0xec4086e90258a557!2sRosario%2C%20Santa%20Fe%20Province!5e0!3m2!1sen!2sar!4v1686763774990!5m2!1sen!2sar"
        ></iframe>
      </div>

      <div className="container px-5  justify-center items-center  mx-auto flex flex-wrap  ">
        <div className="z-10 w-96 xl:w-2/4 px-10 py-5 bg-white">
          <h1 className=" text-6xl font-black text-black">
            Let's work together!
          </h1>
          <p className="text-xl mt-5 ">
            I been working in Front-end projects since 2021 and I'm sure that
            you'll find my experince very usefull for your brand.
          </p>
        </div>
        <div
          className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex  flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 
        shadow-md"
        >
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Contact Form{" "}
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Tell me more about your goals y requires in a message and I'll start
            immediately to to help you as soon as posible 🤜🏽🤛🏽
          </p>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Send
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Every mail will be responde between the next two (2) days. <br></br>
            -we will not use your email to anything else. We'll just respond you
            first.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Contact;

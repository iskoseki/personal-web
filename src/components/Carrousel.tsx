import React, { useState, CSSProperties, useEffect } from "react";
import {
  useTransition,
  animated,
  AnimatedProps,
  useSpringRef,
} from "@react-spring/web";

import styles from "../styles.module.css";
export const FirstSections = () => {
  return (
    <div className=" container pt-28 px-5 flex h-screen flex-wrap  justify-center items-center  mx-auto   ">
      <div className="text-center z-10 max-w-screen-sm xl:w-2/4 px-5 mx-4 py-5">
        <h1 className=" text-6xl xl:text-8xl font-black text-blue-500 ">
          Let's work <br></br>together!
        </h1>
      </div>
    </div>
  );
};
export const SecondSections = () => {
  return (
    <div className="text-center container pt-28 px-5 flex h-screen flex-wrap  justify-center items-center  mx-auto   ">
      <div className=" z-10 max-w-screen-sm xl:w-2/4 px-5 mx-4 py-5">
        <p className="text-2xl xl:text-5xl text-blue-400 ">
          <span className="  font-black">We</span> combine unique, tried and
          tested methodologies with a dedicated team to{" "}
          <span className="font-extralight underline">design</span>,{" "}
          <span className=" font-extralight underline">develope</span> and
          deliver{" "}
          <span className="font-extralight underline">bespoke software</span> to
          accelerate your carreer beyond what you thought possible.
        </p>
      </div>
    </div>
  );
};
export const ThirdSections = () => {
  return (
    <div className=" container pt-28 px-5 flex h-screen flex-wrap  justify-center items-center  mx-auto   ">
      <div className=" z-10 max-w-screen-sm xl:w-2/4 px-5 mx-4 py-5">
        <p className="text-center text-2xl text-blue-400 ">
          We will be with you every step of the way – from initial planning to
          delivery, and beyond
        </p>
      </div>
    </div>
  );
};

const pages: ((
  props: AnimatedProps<{ style: CSSProperties }>
) => React.ReactElement)[] = [
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <FirstSections />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <SecondSections />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ThirdSections />
    </animated.div>
  ),
];
const Carrousel = () => {
  const [index, set] = useState(0);
  const onClick = () => set((state) => (state + 1) % 3);
  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });
  useEffect(() => {
    transRef.start();
  }, [index, transRef]);
  return (
    <div className={`flex fill ${styles.container}`} onClick={onClick}>
      {transitions((style, i) => {
        const Page = pages[i];
        return <Page style={style} />;
      })}
    </div>
  );
};

export default Carrousel;

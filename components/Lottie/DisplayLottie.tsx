import React from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

type Props = {
  animationPath: string;
  speed?: number;
};

const DisplayLottie = ({ animationPath, speed = 1 }: Props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
  };

  return (
    <div onClick={() => null} >
      {/* @ts-ignore */}
      <Lottie options={defaultOptions} speed={speed} style={{height: "auto"}}/>
    </div>
  );
};

export default DisplayLottie;
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

function LoadingLottie() {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      render: "svg",
      loop: "true",
      autoplay: "true",
      animationData: require("../lemon/skipping-lemon.json"),
    });
  }, []);
  return (
    <div>
      <div
        style={{ maxWidth: "300px", margin: "0 auto" }}
        className="container"
        ref={container}
      ></div>
    </div>
  );
}

export default LoadingLottie;

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "../animatedProgressProvider/AnimatedProgressProvider";
import "react-circular-progressbar/dist/styles.css";
import { useEffect, useState } from "react";

const AnimatedProgressBar = () => {
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setDuration(1);
    }, 1000);
  }, []);

  return (
    <>
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={100}
        duration={duration}
        easingFunction={easeQuadInOut}
      >
        {(value) => (
          <div style={{ width: 18, height: 18 }}>
            <CircularProgressbar
              value={value}
              strokeWidth={8}
              styles={buildStyles({
                pathColor: "#000",
              })}
            />
          </div>
        )}
      </AnimatedProgressProvider>
    </>
  );
};

export default AnimatedProgressBar;

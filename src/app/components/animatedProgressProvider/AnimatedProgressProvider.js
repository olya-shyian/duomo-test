import { useEffect, useState } from "react";
import { Animate } from "react-move";

const AnimatedProgressProvider = ({
  valueStart = 0,
  valueEnd,
  duration = 1,
  easingFunction,
  delay = 0,
  children,
}) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimated((prevIsAnimated) => !prevIsAnimated);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [delay]);

  return (
    <Animate
      start={() => ({
        value: valueStart,
      })}
      update={() => ({
        value: [isAnimated ? valueEnd : valueStart],
        timing: {
          duration: duration * 1000,
          ease: easingFunction,
        },
      })}
    >
      {({ value }) => children(value)}
    </Animate>
  );
};

export default AnimatedProgressProvider;

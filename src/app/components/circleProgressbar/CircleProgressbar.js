import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./customCircleProgressbar.scss";

const CircleProgressbar = ({
  percentage,
  styles,
  strokeWidth = 7,
  text = "",
  buildStyle = {},
}) => (
  <div style={styles}>
    <CircularProgressbar
      value={percentage}
      strokeWidth={strokeWidth}
      text={text}
      styles={buildStyles(buildStyle)}
    />
  </div>
);

export default CircleProgressbar;

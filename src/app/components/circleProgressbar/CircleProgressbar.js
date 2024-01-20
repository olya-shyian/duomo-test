import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./customCircleProgressbar.scss";

const CircleProgressbar = ({ percentage, styles, text }) => (
  <div style={styles}>
    <CircularProgressbar value={percentage} strokeWidth={7} text={text} />
  </div>
);

export default CircleProgressbar;

import classNames from "classnames";
import { plus_jakarta_sans } from "../../styles/fonts";
import styles from "./button.module.scss";

const Button = ({
  title,
  type = "button",
  disabled = false,
}) => (
  <button
    type={type}
    className={classNames(styles.button, plus_jakarta_sans.className)}
    disabled={disabled}
  >
    {title}
  </button>
);

export default Button;

import classNames from "classnames";
import { plus_jakarta_sans } from "../../styles/fonts";
import styles from "./button.module.scss";

const Button = ({
  title,
  type = "button",
  disabled = false,
  noStylesDisabled = false,
}) => (
  <button
    type={type}
    className={classNames(styles.button, plus_jakarta_sans.className, {
      [styles.isDisabled]: disabled,
    })}
    disabled={noStylesDisabled || disabled}
  >
    {title}
  </button>
);

export default Button;

import { useState } from "react";
import classNames from "classnames";
import styles from "./input.module.scss";

const Input = ({
  type,
  name,
  value,
  onChange,
  error,
  id = "",
  required = false,
}) => {
  const [blurred, setBlurred] = useState(false);
  const showError = blurred && error.isError;

  const handleBlur = () => {
    setBlurred(true);
  };

  return (
    <div className={styles.container}>
      <input
        className={classNames(styles.input, {
          [styles.isError]: error.isError,
        })}
        type={type}
        name={name}
        value={value}
        onChange={(e) => {
          onChange(e);
          setBlurred(false);
        }}
        onBlur={handleBlur}
        id={id}
        required={required}
      />

      {showError && <div className={styles.errorMessage}>{error.message}</div>}

      <label className={styles.label} htmlFor="name">
        Email
      </label>
    </div>
  );
};

export default Input;

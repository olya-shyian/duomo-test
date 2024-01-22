import { useState } from "react";
import {emailRegex} from "../const/commonConst";

const initialValue = { isError: false, message: "" };

const useValidateEmail = () => {
  const [error, setError] = useState(initialValue);

  const validateEmail = (email) => {
    return emailRegex.test(String(email).toLowerCase());
  };

  const handleError = (e) => {
    if (e.target.value === "") {
      setError({ isError: true, message: "Field is required" });
    } else {
      const isValid = validateEmail(e.target.value);
      setError({ isError: !isValid, message: "Please enter a valid email" });
    }
  };

  return {
    error,
    handleError,
  };
};

export default useValidateEmail;

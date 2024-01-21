import { useState } from "react";

const initialValue = { isError: false, message: "" };

const useValidateEmail = () => {
  const [error, setError] = useState(initialValue);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
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

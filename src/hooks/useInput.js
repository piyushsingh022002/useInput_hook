import { useState, useCallback } from "react";

const validators = {
  name: val =>
    /^[A-Za-z\s]+$/.test(val) || "Name should only contain letters and spaces.",

  username: val =>
    /^[a-zA-Z0-9_]{4,20}$/.test(val) || "Username must be 4–20 characters with letters, numbers, or underscores.",

  email: val =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|in|co|edu|gov|io|ai)$/.test(val) || "Enter a valid email address (e.g., name@example.com).",

  phone: val =>
    /^[6-9]\d{9}$/.test(val) || "Phone number must be 10 digits and start with 6–9.",

  password: val =>
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{6,}$/.test(val) ||
    "Password must be at least 6 characters, include a number and a symbol.",

  securityQuestion: val =>
    val.trim().length > 10 || "Answer must be at least 10 characters long.",

  default: val =>
    val.trim() !== "" || "This field is required.",
};


const useInput = (initialValue = "", type = "default") => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(null);
  const [touched, setTouched] = useState(false);

  const validate = useCallback(val => {
    const validator = validators[type] || validators.default;
    const result = validator(val);
    return result === true ? null : result;
  }, [type]);

  const onChange = useCallback(e => {
    const val = e.target.value;
    setTouched(true);
    setValue(val);
    const validationError = validate(val);
    setError(validationError);
  }, [validate]);

  const reset = useCallback(() => {
    setValue(initialValue);
    setError(null);
    setTouched(false);
  }, [initialValue]);

  const isValid = !error && touched;

  return { value, onChange, reset, error, isValid };
};

export default useInput;

import React from "react";
import "./style.css";
const Input = (props) => {
  const {
    type,
    name,
    id,
    placeholder,
    value,
    onChange,
    className,
    error,
  } = props;
  const { children, htmlFor } = props;
  return (
    <>
    
 
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
      />
      {error && <div className="error-msg">{error}</div>}
    </>
  );
};
export default Input;

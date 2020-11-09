import React from "react";

const Label = (props) => {
  const { children, className, htmlFor } = props;
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
};

export default Label;
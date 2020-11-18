import React from "react";
const CustomFormElem = ({ tagName, type, placeholder }) => {
  const detectCustomFormElem = () => {
    if (tagName === "textarea") {
      return <textarea type={type} placeholder={placeholder} />;
    } else {
      return <input type={type} placeholder={placeholder} />;
    }
  };

  return <div>{detectCustomFormElem()}</div>;
};

export default CustomFormElem;

import React from "react";
const CustomFormElem = ({ tagName, type, placeholder,handleFormElem, name }) => {
  const detectCustomFormElem = () => {
    console.log(handleFormElem)
    if (tagName === "textarea") {
      return <textarea type={type} placeholder={placeholder} name = {name} onChange = {(e)=>handleFormElem(e)} />;
    } else {
      return <input type={type} placeholder={placeholder} name = {name} onChange = {(e)=>handleFormElem(e)} />;
    }
  };

  return <div>{detectCustomFormElem()}</div>;
};

export default CustomFormElem;

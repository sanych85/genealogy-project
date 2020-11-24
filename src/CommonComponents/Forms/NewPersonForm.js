import { validate } from "./validation";
import React from "react";
import { Field, reduxForm } from "redux-form";
import  "./newPersonForm.scss";
import CustomButton from "../CustomButton";

const renderField = ({ type,placeholder,label,input,meta}) => {
  console.log(meta)
  const {touched, error,active,pristine} = meta;
 
  return (
  
    
    <div className = "inputWrapper">
      
      <input  {...input} label ={label}  type= {type} placeholder = {placeholder} />
      <label className = { (active)||(!active&&!pristine)?"fullLabel":"emptyLabel" } >{label}</label>
      {touched &&
        (error && !active && <span>{error}</span>) }
        
    </div>
  
  )
};

const SyncValidationForm = ({ handleSubmit,pristine,submitting,reset,valid}) => {

  return (
    <form onSubmit={handleSubmit}>
      <Field name ="name"  component={renderField} placeholder ="name"  type= "text"  label = "name"  />
      <Field name= "year" component={renderField}  placeholder ="year"  type= "text"  label ="year"/>
      {/* <CustomButton type = "submit"> Add  </CustomButton>  */}
      <button className = "submitButton" type="button" disabled={!valid} onClick={reset}>Add</button>
    </form>
  );
};

export default reduxForm({
  form: "syncValidation", // a unique identifier for this form
  validate // <--- validation function given to redux-form
})(SyncValidationForm);


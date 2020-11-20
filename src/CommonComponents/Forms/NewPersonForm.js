import React,{useState} from 'react'
import CustomFormElem from "../CustomFormElem"
const NewPersonForm = () => {
    const [personForm, handleForm] =useState({name:'', description:'', year:''});
    
    const handleFormElem = (e)=> {
        const elemName =e.target.name;
        const value = e.target.value;
        console.log(e.target.name)
        
        handleForm({...personForm, [elemName]:value})
    }
    console.log(personForm)
    return (

        <form action="">
            <CustomFormElem type = "string" name="name" placeholder="name" value = {personForm.name} handleFormElem = {handleFormElem}></CustomFormElem>
            <CustomFormElem type = "number" name="date" placeholder = "date" value = {personForm.date} handleFormElem = {handleFormElem}></CustomFormElem>
            <CustomFormElem tagName = "textarea" name="description" placeholder = "enter description" value = {personForm.description} handleFormElem = {handleFormElem}></CustomFormElem>
        </form>
    );
}

export default NewPersonForm;
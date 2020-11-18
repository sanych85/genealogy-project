import React from 'react'
import CustomFormElem from "../CustomFormElem"
const NewPersonForm = () => {
    return (
        <form action="">
            <CustomFormElem type = "string" placeholder="name"></CustomFormElem>
            <CustomFormElem type = "number" placeholder = "date"></CustomFormElem>
            <CustomFormElem tagName = "textarea" placeholder = "enter description"></CustomFormElem>
        </form>
    );
}

export default NewPersonForm;
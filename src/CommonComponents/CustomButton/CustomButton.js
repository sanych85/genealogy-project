import React from 'react';
const CustomButton = ({children,type,buttonFunction}) => {
    
    return (
        <div className= "customButton">
            <button className = "commonButton__button" type ={type ||'button'} onClick = {()=>buttonFunction()}>{children}</button>
        </div>
    );
}

export default CustomButton;



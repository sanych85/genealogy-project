import React from 'react';
const CustomButton = ({children}) => {
    
    return (
        <div className= "customButton">
            <button className = "commonButton__button">{children}</button>
        </div>
    );
}

export default CustomButton;
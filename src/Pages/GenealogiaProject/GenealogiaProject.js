import React, {useState} from 'react';
import CustomButton from '../../CommonComponents/CustomButton';
import NewPersonForm from '../../CommonComponents/Forms';
import "./genealogia_project.scss"
const App = () => {
    const [isShowedPersonForm, showPersonForm] = useState(false)  
    const showForm = ()=> {
        showPersonForm(prev=>!prev)
    }
    return (
        <div className = "newPersonForm__wrapper">
             <CustomButton  buttonFunction = {showForm}>  {isShowedPersonForm?"Hide form":"Show form"}</CustomButton>

            {isShowedPersonForm &&<NewPersonForm/>}

        </div>
    );
}

export default App;
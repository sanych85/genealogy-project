import React from 'react';
import CustomButton from '../../CommonComponents/CustomButton';
import NewPersonForm from '../../CommonComponents/Forms';

const App = () => {
    return (
        <div>
            <CustomButton> Add new </CustomButton>  
           <NewPersonForm/>

        </div>
    );
}

export default App;
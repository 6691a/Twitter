import React, { useState, useRef, useEffect } from 'react';
import Info_check from './info_check';
import Info_confirm from './info_confirm';
import Info_input from './info_input';
import styles from './signup.module.css';

const Signup = (props) =>{ 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [state,setState] = useState('confirm');

    const render = (setate) =>{
        switch(setate) {
            case 'input':
                return name && email && birthday ? 
                <Info_input email={email} name={name} birthday={birthday} setEmail={setEmail} setName={setName} setBirthday={setBirthday} setState={setState}/> :
                <Info_input setEmail={setEmail} setName={setName} setBirthday={setBirthday} setState={setState}/>
                
            case 'check':
                return <Info_check email={email} name={name} birthday={birthday} setState={setState}/>

            case 'confirm':
                return <Info_confirm setState={setState}/>

            default :
                return <Info_input setEmail={setEmail} setName={setName} setBirthday={setBirthday}/>

        }     
    }
    return(
        <>
            {render(state)}
        </>
    )

};

export default Signup;
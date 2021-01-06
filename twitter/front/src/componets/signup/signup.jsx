import React, { useState } from 'react';
import Info_check from './info_check';
import Info_confirm from './info_confirm';
import Info_input from './info_input';
import Info_password from './info_password';
import Info_profile from './info_profile';
import styles from './signup.module.css';
import API_BASE_URL from 'src/utils/path'

const Signup = (props) =>{ 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword]  = useState('');
    const [birthday, setBirthday] = useState('');
    const [state,setState] = useState('input');

    const create_User = (state) => {
        const myHeaders = new Headers();
    
        myHeaders.append("Content-Type", "application/json");
            
        const raw = JSON.stringify({"email":`${email}`,"birthday":`${birthday}`,"password":`${password}`});
    
        const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };
        
        fetch("http://127.0.0.1:8000/user/signup/", requestOptions)
        .then(response => { 
            response.status == 201 && setState(state)
            })
        // .then(()=>{props.setLoading(false)})
        .catch(error => console.log('error', error));
        }

    const render = (setate) =>{
        switch(setate) {
            case 'input':
                return name && email && birthday ? 
                <Info_input email={email} name={name} birthday={birthday} setEmail={setEmail} setName={setName} setBirthday={setBirthday} setState={setState}/> :
                <Info_input setEmail={setEmail} setName={setName} setBirthday={setBirthday} setState={setState}/>

            case 'password':
                return <Info_password setPassword={setPassword} setState={setState}/>

            case 'check':
                return <Info_check email={email} name={name} birthday={birthday} setState={setState} create_User={create_User}  setLoading={props.setLoading}/>

            case 'confirm':
                return <Info_confirm email={email} setState={setState}/>
                
            case 'profile':
                return <Info_profile email={email} setState={setState}/>

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
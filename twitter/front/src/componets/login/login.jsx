import React, { useRef, useState } from 'react';
import styles from './login.module.css';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();



    const [disable, setDisable] = useState(true);

    const handleInput = () => {
        const email = emailRef.current.value.length;
        const password = passwordRef.current.value.length;
        email > 0 && password > 0 ? setDisable(false) : setDisable(true)
    }

    const loginAPI = (e) => {
        e.preventDefault();
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({"email":`${emailRef.current.value}`,"password":`${passwordRef.current.value}`});

        const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:8000/user/api/token/", requestOptions)
        .then(response => response.json())
        .then(result => {
            localStorage.setItem('access_token', 'Bearer ' + result.access);
            history.push('/home');
        })        
        .catch(error => console.log('error', error));
    }

    return(
    <div className={styles.login}>
        <img className={styles.logo} src="/images/twitter.svg" alt="twitter_logo"/>
        <h1 className={styles.text}>트위터 로그인</h1>
        <div className={styles.input_field}>
            <form action=""onSubmit={loginAPI}>
                <label className={styles.input_label_email}>
                    <span className={styles.input_text}>이메일</span>
                    <input className ={styles.email_input} ref={emailRef} type="email" onChange={handleInput}/> 
                </label>
                <label className={styles.input_label_password}>
                    <span className={styles.input_text}>비밀번호</span>
                    <input ref={passwordRef} type="password" onChange={handleInput}/>
                </label>
                <button className={styles.submit_Btn} type="submit" 
                disabled = {disable}
                >로그인</button>
            </form>
            <div className={styles.info}>
                <span className={styles.info_text}>비밀번호를 잊으셨나요?</span>
                <span className={styles.info_text_space}>·</span>
                <span className={styles.info_text} onClick={() => {history.push('/signup');}}>트위터 가입</span>
            </div>
        </div> 
    </div>
    )
};  

export default Login;
import React, { useRef } from 'react';
import styles from './login.module.css';

const Login = (props) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    // const email_label = useRef();
    
    // const onFocus = (current) => {
    //     ReactDOM.findDOMNode(email_label.current).style.border ="0.1rem solid #1da1f2";
    // }

    // const onBlur = (current) => {
    //     console.log(current);
    //     ReactDOM.findDOMNode(email_label.current).style.border ="border: 0.1rem solid #c4cfd6";
    // }


    return(
    <div className={styles.login}>
        <img className={styles.logo} src="/images/twitter.svg" alt="twitter_logo"/>
        <h1 className={styles.text}>트위터 로그인</h1>
        <div className={styles.input_field}>
            <label  className={styles.input_label_email}>
                <span className={styles.input_text}>이메일</span>
                    <input ref={emailRef} type="text"/> 
                </label>
            <label className={styles.input_label_password}>
                <span className={styles.input_text}>비밀번호</span>
                <input  ref={passwordRef} type="password" />
            </label>
            <button type="submit">로그인</button>
            <div>
                <span>비밀번호를 잊으셨나요?</span>
                <span>.</span>
                <span>트위터 가입</span>
            </div>
        </div>
    </div>
    )
};  

export default Login;
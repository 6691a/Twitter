import React, { useRef } from 'react';
import styles from './login.module.css';

const Login = (props) => {
    const emailRef = useRef();
    const passwordRef = useRef();

    return(
    <div className={styles.login}>
        <img className={styles.logo} src="/images/twitter.svg" alt="twitter_logo"/>
        <h1 className={styles.text}>트위터 로그인</h1>
        <div className={styles.input_field}>
            <form action="">
                <label className={styles.input_label_email}>
                    <span className={styles.input_text}>이메일</span>
                    <input className ={styles.email_input}ref={emailRef} type="text"/> 
                </label>
                <label className={styles.input_label_password}>
                    <span className={styles.input_text}>비밀번호</span>
                    <input  ref={passwordRef} type="password"/>
                </label>

                <button className={styles.submit_Btn} type="submit"
                disabled ={
                false
                // emailRef.current &&
                // passwordRef.currnet
                // ? false
                // : true
                }
                >로그인</button>
            </form>
                

            
            <div className={styles.info}>
                <span className={styles.info_text}>비밀번호를 잊으셨나요?</span>
                <span className={styles.info_text_space}>·</span>
                <span className={styles.info_text}>트위터 가입</span>
            </div>
        </div>
    </div>
    )
};  

export default Login;
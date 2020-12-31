import React, { useRef } from 'react';
import styles from './info_input.module.css';

const Info_password = (props) => {
    const passwordRef = useRef();

    const handleNext = (e) => {
        e.preventDefault()
        props.setPassword(passwordRef.current.value);
        if(passwordRef.current.value > 8)
        props.setState('check');
    }
    const bakcClick = () =>{
        props.setState('input');
    }

    return(
        <div className={styles.background}>
            <div className={styles.sinup}>
                <form action="" onSubmit={handleNext} >
                    <div className={styles.title}>
                        <div className={styles.Btn_bg}>  
                            <img className={styles.back_Btn} onClick={bakcClick} src="/images/left-arrow.svg" alt=""/> 
                        </div>
                        <img className={styles.logo} src="/images/twitter.svg" alt=""/>
                        <button className={styles.next_Btn}   type='submit'>다음</button>
                    </div>
                    <div className={styles.body}>
                        <h1>비밀번호가 필요합니다</h1>
                        <span className={styles.comment}>8자 이상이어야 합니다.</span>
                        <label className={styles.input_label_email}>
                            <span className={styles.input_text}>비밀번호</span>
                            <input ref={passwordRef} className ={styles.name_input} type="password"/> 
                        </label>
                        <span className={styles.error}>8자 이상이어야 합니다.</span>
                    </div>
                    
                </form>                    
            </div>
        </div>
        )
    };

export default Info_password;
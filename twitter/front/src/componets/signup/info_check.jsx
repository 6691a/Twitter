import React from 'react';
import styles from './info_input.module.css';


const Info_check = (props) => {
    
    const bakcClick = () =>{
        props.setState('input');
    }

    const handleNext = (e) => {
        e.preventDefault()
        props.setState('confirm');
    }
    
    return(
            <div className={styles.background}>
                <div className={styles.sinup}>
                    <form action="" onSubmit={handleNext}>
                        <div className={styles.title}>
                            <div className={styles.Btn_bg}>  
                                <img className={styles.back_Btn} onClick={bakcClick} src="/images/left-arrow.svg" alt=""/> 
                            </div>
                            <img className={styles.logo} src="/images/twitter.svg" alt=""/>
                            <div className={styles.container_right} >

                            </div>
                        </div>
                        <div className={styles.body}>
                            <h1>계정을 생성하세요</h1>
                            <label className={styles.input_label_email}>
                                <span className={styles.input_text}>이름</span>
                                <input className ={styles.name_input} value={props.name} readOnly onClick={bakcClick} type="text"/> 
                            </label>
                            <label className={styles.input_label_password}>
                                <span className={styles.input_text}>이메일</span>
                                <input className ={styles.email_input} value={props.email} readOnly onClick={bakcClick}  type="email"/> 
                            </label>
                            <label className={styles.input_label_password}>
                                <span className={styles.input_text}>생년월일</span>
                                <input className ={styles.email_input} value={props.birthday} readOnly onClick={bakcClick} type="email"/> 
                            </label>
                            <span className={styles.sigup_comment}>가입 시 이용약관 및 쿠키 사용을 포함한 개인정보 처리방침에 동의하게 됩니다. 개인정보 설정에 따라 이메일 주소 또는 휴대폰 번호로 사람들이 나를 찾을 수 있습니다.</span>
                            <button className={styles.signup_Btn}  type='submit'>가입</button>
                        </div>
                        
                    </form>                    
                </div>
            </div>
    )
};

export default Info_check;
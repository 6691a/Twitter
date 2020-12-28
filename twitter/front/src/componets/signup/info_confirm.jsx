import React, { useState, useRef } from 'react';
import styles from './info_input.module.css';

const Info_confirm = (props) => {
    const confirmRef = useRef();

    const [disable, setDisable] = useState(true);

    const handleNext = (e) => {
        e.preventDefault()
        props.setState('profile');
    }
    
    const bakcClick = () =>{
        props.setState('check');
    }

    const handleInput = () => {
        const key = confirmRef.current.value.length;
        key > 0  ? setDisable(false) : setDisable(true)
    }

    return(
        <div className={styles.background}>
            <div className={styles.sinup}>
                <form action="" onChange={ handleInput} onSubmit={handleNext}>
                    <div className={styles.title}>
                        <div className={styles.container_left} ></div>
                        <img className={styles.logo} src="/images/twitter.svg" alt=""/>
                        <button className={styles.next_Btn} disabled={disable}  type='submit'>다음</button>

                    </div>
                    <div className={styles.body}>
                        <h1>코드를 보내 드렸습니다.</h1>
                        <span className={styles.sigup_comment}>{`${props.email} 인증을 위해 아래에 입력하세요.`}</span>

                        <label className={styles.input_label_key}>
                            <span className={styles.input_key_text}>확인 코드</span>
                            <input ref={confirmRef} className ={styles.key_input} type="text"/> 
                        </label>
                        {/* <span className={styles.input_key_text}>이메일을 받지 못하셨나요?</span> */}
                    </div>
                </form>                    
            </div>
        </div>
    )
};

export default Info_confirm;
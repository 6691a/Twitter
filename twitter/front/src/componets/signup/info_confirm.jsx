import React, { useState, useRef } from 'react';
import styles from './info_input.module.css';
import {API_BASE_URL} from '../../utills/path';

const Info_confirm = (props) => {
    const confirmRef = useRef();

    const [disable, setDisable] = useState(true);
    const [error, setError] = useState(false);
    const handleNext = (e) => {
        e.preventDefault()
        userActive()
    }
    

    const handleInput = () => {
        const key = confirmRef.current.value.length;
        key > 0  ? setDisable(false) : setDisable(true)
    }

    const sandMail = () => {
        alert(
            `이메일 재발송`
        );
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`${API_BASE_URL}/user/send/${props.email}/`, requestOptions)

            .catch(error => console.log('error', error));
    }

    const userActive = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({"email":`${props.email}`,
                                    "key":`${confirmRef.current.value}`});

        const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/user/active/", requestOptions)
        .then(response => {
            if(response.status === 200) {
                props.setState('profile');
            }
            else {
                setError(true);
            }
        })
        .catch(error => console.log('error', error));
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
                        {error && 
                                <div className={styles.error_msg}>입력하신 코드가 정확하지 않습니다. 다시 시도해주세요.</div>
                        }
                        <span className={styles.input_key_text} onClick = {sandMail}>이메일을 받지 못하셨나요?</span>
                    </div>
                </form>                    
            </div>
        </div>
    )
};

export default Info_confirm;
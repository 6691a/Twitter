import React, { useState, useRef, useEffect } from 'react';
import styles from './info_input.module.css';
import {API_BASE_URL} from '../../utills/path';

const Info_input = (props) => {
    const emailRef = useRef();
    const nameRef = useRef();
    const [month, setMonth] = useState(props.birthday ? props.birthday.split('-')[1] : "");
    const [date, setDate] = useState(props.birthday ? props.birthday.split('-')[2] : "");
    const [year, setYear] = useState(props.birthday ? props.birthday.split('-')[0] : "");
    const [disable, setDisable] = useState(true);
    const [email_Valid, setEmail_Valid] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const email = emailRef.current.value.length;
        const name = nameRef.current.value.length;
        email > 0 && 
        name > 0 &&
        month &&
        date &&
        year ? setDisable(false) : setDisable(true)        
    },[month, date, year])
    
    useEffect(() => {
        email_Valid && props.setState('password');
    }, [email_Valid])

    const refSelect = (event, target) => {
        switch(target) {
            case 'Month':
                setMonth(event.target.value);
                break;

            case 'Date':
                setDate(event.target.value);
                break;

            case 'Year':
                setYear(event.target.value);
                
                break;
            default :
                setDate(1);
                setMonth(1);
                setYear(new Date().getFullYear());
        }     
    }

    const handleNext = (e) => {
        e.preventDefault();
        props.setName(nameRef.current.value);
        props.setEmail(emailRef.current.value);
        const birthday = year + '-' + month+ '-' + date
        props.setBirthday(birthday);
        findUser();
    }


    const findUser = () =>{
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        if(emailRef.current.value) {
            fetch(`${API_BASE_URL}/user/find/${emailRef.current.value}/`, requestOptions)
            .then(response => {
                if(response.status === 201) {
                    setEmail_Valid(false);
                    setError(true);
                }
                else {
                    setEmail_Valid(true)
                }
            })
            .catch(error => console.log('error', error));
                // .then(response => response.json())
                // .then(result => result.hasOwnProperty('email') ? setEmail_Valid(true): setEmail_Valid(false))
                // .catch(error => console.log('error', error));
        };

    }

    const getMonth = () => {
        const array =  [];
        const start = 1;
        const end = 12;
        for(let i = start; i <= end; ++i) {
            array.push(<option value={i} key={`${i}월`}>{`${i}월`}</option>);
        }
        return array;
    }

    const getDate = () => {
        const array =  [];
        const start = 1;
        const end = 31;
        for(let i = start; i <= end; ++i) {
            array.push(<option value={i} key={`${i}일`}>{i}</option>);
        }
        return array;
    }
    const getYear = () => {
        const yearArray =  [];
        const startYear = 1900;
        const endYear = new Date().getFullYear();

        for(let i = endYear; i>= startYear; --i) {
            yearArray.push(<option value={i} key={`${i}년`}>{i}</option>);
        }
        return yearArray;
    }

    const defaultValue = () => {
        const array = [];
        
        props.name && array.push(props.name);
        props.email && array.push(props.email);
            
        return array;
    }


    return(
        <>
            <div className={styles.background}>
                <div className={styles.sinup}>
                    <form action=""  onSubmit={(e)=>{handleNext(e);}} >
                        <div className={styles.title}>
                            <div className={styles.container_left} ></div>
                            <img className={styles.logo} src="/images/twitter.svg" alt=""/>
                            <button className={styles.next_Btn} disabled={disable}  type='submit'>다음</button>
                        </div>
                        <div className={styles.body}>
                            <h1>계정을 생성하세요</h1>
                            <label className={styles.input_label_email}>
                                <span className={styles.input_text}>이름</span>
                                <input className ={styles.name_input} ref={nameRef} defaultValue ={defaultValue()[0]} type="text"/> 
                            </label>

                            <label className={styles.input_label_password}>
                                <span className={styles.input_text}>이메일</span>
                                <input className ={styles.email_input} ref={emailRef}  defaultValue ={defaultValue()[1]} type="email"  /> 
                            </label>

                            {error && 
                                <span className={styles.error_msg}>이미 등록된 이메일입니다.</span>
                            }

                            <h2>생년월일</h2>
                                <span className={styles.comment}>이 정보는 공개적으로 표시되지 않습니다. 비즈니스, 반려동물 등 계정 주제에 상관 없이 나의 연령을 확인하세요.</span>                                <div className={styles.select_box}> 
                                <span className={styles.option_text}>월</span>
                                <select defaultValue ={month}  className={styles.month} onChange={(e) => {refSelect(e,'Month')}}>
                                    <option value =""  disabled > </option>
                                    {getMonth()}
                                </select>
                                <span className={styles.option_text}>일</span>
                                <select defaultValue ={date} className={styles.date} onChange={(e) => {refSelect(e,'Date')}}>
                                    <option value ="" disabled> </option>
                                    {getDate()}
                                </select>
                                <span className={styles.option_text}>년</span>
                                <select defaultValue ={year} className={styles.year} onChange={(e) => {refSelect(e,'Year')}}>
                                    <option value =""  disabled> </option>
                                    {getYear()}
                                </select>
                            </div>
                        </div>
                    </form>                    
                </div>
            </div>
        </>
    )
};

export default Info_input;
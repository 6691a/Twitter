import React, { useState, useRef, useEffect } from 'react';
import styles from './signup.module.css';

const Signup = (props) =>{ 
    const emailRef = useRef();
    const nameRef = useRef();
    const [month, setMonth] = useState();
    const [date, setDate] = useState();
    const [year, setYear] = useState();
    const [disable, setDisable] = useState(true);

    useEffect(() => {
        const email = emailRef.current.value.length;
        const name = nameRef.current.value.length;
        email > 0 && 
        name > 0 &&
        month &&
        date &&
        year ? setDisable(false) : setDisable(true)        
    },[month,date,year])

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

    const handleInput = () => {
        const email = emailRef.current.value.length;
        const name = nameRef.current.value.length;
        email > 0 && 
        name > 0 &&
        month &&
        date &&
        year ? setDisable(false) : setDisable(true)
    }

    const getMonth = () => {
        const array =  [];
        const start = 1;
        const end = 12;
        for(let i = start; i <= end; ++i) {
            array.push(<option value={i}>{`${i}월`}</option>);
        }
        return array;
    }

    const getDate = () => {
        const array =  [];
        const start = 1;
        const end = 31;
        for(let i = start; i <= end; ++i) {
            array.push(<option value={i}>{i}</option>);
        }
        return array;
    }
    const getYear = () => {
        const yearArray =  [];
        const startYear = 1900;
        const endYear = new Date().getFullYear();

        for(let i = endYear; i>= startYear; --i) {
            yearArray.push(<option value={i}>{i}</option>);
        }
        return yearArray;
    }

    return(
        <>
            <div className={styles.background}>
                <div className={styles.sinup}>
                    <form action=""onChange={ handleInput} >
                        <div className={styles.title}>
                            <img className={styles.logo} src="/images/twitter.svg" alt=""/>
                            <button className ={styles.next_Btn}  disabled = {disable}>다음</button>
                        </div>
                        <div className={styles.body}>
                            <h1>계정을 생성하세요</h1>
                            <label className={styles.input_label_email}>
                                <span className={styles.input_text}>이름</span>
                                <input className ={styles.name_input} ref={nameRef} type="text"/> 
                            </label>
                            <label className={styles.input_label_password}>
                                <span className={styles.input_text}>이메일</span>
                                <input className ={styles.email_input} ref={emailRef} type="email"/> 
                            </label>
                            <h2>생년월일</h2>
                            <span className={styles.comment}>이 정보는 공개적으로 표시되지 않습니다. 비즈니스, 반려동물 등 계정 주제에 상관 없이 나의 연령을 확인하세요.</span>
                                <div className={styles.select_box}>
                                    <span className={styles.option_text}>월</span>
                                    <select  className={styles.month} onChange={(e) => {refSelect(e,'Month')}}>
                                        <option value="" selected disabled > </option>
                                        {getMonth()}
                                    </select>
                                    <span className={styles.option_text}>일</span>
                                    <select  className={styles.date} onChange={(e) => {refSelect(e,'Date')}}>
                                        <option value="" selected disabled> </option>
                                        {getDate()}
                                    </select>
                                    <span className={styles.option_text}>년</span>
                                    <select  className={styles.year} onChange={(e) => {refSelect(e,'Year')}}>
                                        <option value="" selected disabled> </option>
                                        {getYear()}
                                    </select>
                                </div>
                        </div>
                    </form>                    
                </div>

                <div className={styles.confirm}>

                </div>

                <div className={styles.validate}></div>
            </div>
        </>
    )
};

export default Signup;
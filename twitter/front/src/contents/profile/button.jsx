import React from 'react';
import styles from './button.module.css';

const Button = ({text, onClick}) => {
    return(
        <div>
             <button className={styles.follow_Btn} onClick={()=>{onClick()}}>{text}</button>
        </div>

    )
};

const Button_B = () => {
    return(
        <div>
            ㅎㅎ...
        </div>
    )
}
export  {Button, Button_B};
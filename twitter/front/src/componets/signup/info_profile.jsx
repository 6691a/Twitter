import React from 'react';
import styles from './info_input.module.css';

const Info_profile = (props) => {

    const bakcClick = () =>{
        props.setState('confirm');
    }

    return(
        <div className={styles.background}>
            <div className={styles.sinup}>
                <form action="" >
                    <div className={styles.title}>
                        <div className={styles.container_left} ></div>
                        <img className={styles.logo} src="/images/twitter.svg" alt=""/>
                        <button className={styles.next_Btn}   type='submit'>다음</button>

                    </div>
                    <div className={styles.body}>
                        <h1>프로필 사진 선택하기</h1>
                        <span className={styles.comment}>마음에 드는 셀카 사진이 있나요? 지금 업로드하세요.</span>

                        <label className={styles.input_label_key}>
                            <input type="file" accept="image/png, image/jpeg"/> 
                        </label>
                        {/* <span className={styles.input_key_text}>이메일을 받지 못하셨나요?</span> */}
                    </div>
                </form>                    
            </div>
        </div>
    )
};

export default Info_profile;
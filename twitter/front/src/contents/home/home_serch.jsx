import React from 'react';
import Recommendation from '../base/Recommendation';
import styles from './home_serch.module.css';

const Home_serch = (props) => {
    return(
        <div className={styles.main}>
            <div className={styles.serch}>
                <form action="">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                        </g>
                    </svg>
                    <input type="text"/>
                </form>
            </div>

            <Recommendation/>
            {/* <div className={styles.referee}>
                <div className={styles.referee_style_top}>
                    <span className={styles.referee_text}>팔로우 추천</span>
                </div>
                <div className={styles.referee_style_body}>
                    <div className={styles.user_info}>
                    <img src="/images/default_profile_400x400.png" alt=""/>
                        
                        <div className={styles.style_between}>
                            <div className={styles.leftMargin}>
                                <div className={styles.user_name}>1</div>
                                <div className={styles.user_id}>@1</div> 
                            </div>
                            <button className={styles.follow_Btn}>팔로우</button>
                        </div>
                    </div>
                </div>  

                <div className={styles.referee_style_body}>
                    <div className={styles.user_info}>
                    <img src="/images/default_profile_400x400.png" alt=""/>
                        
                        <div className={styles.style_between}>
                            <div className={styles.leftMargin}>
                                <div className={styles.user_name}>2</div>
                                <div className={styles.user_id}>@2</div> 
                            </div>
                            <button className={styles.follow_Btn}>팔로우</button>
                        </div>
                    </div>
                </div>  

                <div className={styles.referee_style_bottom}>
                    <span className={styles.referee_text}>더 보기</span>
                </div>

            </div> */}
        </div>
    )
};
export default Home_serch;
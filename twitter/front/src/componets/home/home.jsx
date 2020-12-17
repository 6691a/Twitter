import React from 'react';
import styles from './home.module.css';

const Home = (props) => {

    return(
        <div className={styles.content}>
            <div className={styles.left}>
                <img className={styles.background_image} src="/images/twitter.svg" alt="twitter_logo"/>
                <div className={styles.comment}>
                    <ul>
                        <li>
                            <img src="/images/icons8-search-96.png" alt="img"/>
                            <span className={styles.text}>관심사를 팔로우하세요.</span>
                        </li>
                        <li>
                            <img src="/images/icons8-user-account-96.png" alt="img"/>
                            <span className={styles.text}>사람들이 무엇에 대해 이야기하고 있는지 알아보세요.</span>
                        </li>
                        <li>
                            <img src="/images/icons8-speech-96.png" alt="img"/>
                            <span className={styles.text}>대화에 참여하세요.</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.login}>
                    <div>
                        <img src="/images/twitter.svg" alt=""/>
                        <h1>지금 전 세계에서 무슨 일이 일어나고 있는지 알아보세요</h1>
                    </div>
                    
                    <div>
                        <h2>오늘 트위터에 가입하세요.</h2>
                        <button className={styles.signup_Btn} type="submit">가입하기</button>
                        <button className={styles.login_Btn} type="submit">로그인</button>
                    </div>
                </div>
            </div>
        </div>
    
    )
};

export default Home;
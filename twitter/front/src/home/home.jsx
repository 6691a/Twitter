import React from 'react';
import styles from './home.module.css';

const Home = (props) => {
   
    return(
        <>
            <div className={styles.contents_left}>
                <img className={styles.logo_image} src="/images/twitter.svg" alt="twitter_logo"/>
                <div>
                    <img className={styles.logo_image} src="/images/home.svg" alt="twitter_logo"/>
                    <span>홈</span>
                </div>
                <div>
                    <img src="/images/search-black.svg" alt="img"/>
                    <span>탐색하기</span>
                </div>
                <div>
                    <img className={styles.logo_image} src="/images/profile.svg" alt="twitter_logo"/>
                    <span>프로필</span>
                </div>
                <div>
                    <img className={styles.logo_image} src="/images/envelope.svg" alt="twitter_logo"/>
                    <span>쪽지</span>
                </div>
                <div>
                    <img className={styles.logo_image} src="/images/envelope.svg" alt="twitter_logo"/>
                    <span>트윗</span>
                </div>
            </div>
            
            <div className={styles.contents_right}>
           
            </div>
        </>
    )
};

export default Home;
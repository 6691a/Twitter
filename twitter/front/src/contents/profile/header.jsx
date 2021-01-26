import React from 'react';
import styles from './header.module.css';

const Header = ({username, tweet_count}) => {
    return(
        <div className={styles.main}>
            <div className={styles.bg}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
                    </g>
                </svg>
            </div>
            <div className={styles.contents}>
                <div className={styles.username}>{1555555}</div>
                <span className={styles.tweet_count}>{`${tweet_count} 트윗`}</span>
            </div>
            
        </div>
    )

}

export default Header;
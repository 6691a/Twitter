import React from 'react';
import styles from './loading.module.css';
const Loading = (props) => {
    return(
        <div className={styles.container}>
            <img className={styles.twitter_img}src="/images/twitter.svg" alt=""/>
        </div>
    )
};

export default Loading;
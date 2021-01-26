import React, { useState, useRef } from 'react';

import styles from './tweet_list.module.css';

const Tweet_list = ({hover, setHover}) => {


    return(
        <>
        <div className={styles.tweet_list}>
            <div className={hover == 'tweet'? styles.bg_hover : styles.bg} onClick={()=>{setHover('tweet')}}>
                <div>트윗</div>
            </div>

            <div className={hover == 'replies'? styles.bg_hover : styles.bg} onClick={()=>{setHover('replies')}}>
                <div>트윗 및 답글</div>
            </div>

            <div className={hover == 'media'? styles.bg_hover : styles.bg} onClick={()=>{setHover('media')}}>
                <div>미디어</div>
            </div>

            <div className={hover == 'like'? styles.bg_hover : styles.bg} onClick={()=>{setHover('like')}}>
                <div>마음에 들어요</div>
            </div>
        </div>

        </>
    )
};

export default Tweet_list;
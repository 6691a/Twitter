import React from 'react';
import { Button } from '../base/button';

import styles from './user_info.module.css';
import Tweet_list from './tweet_list';

const User_info = ({username, userid, about_me,imgPath, follow, follower, profile_img}) => {
    return(
        <div className={styles.user_info}>
            <div className={styles.bg}>
                {
                    imgPath ? 
                    <img src={imgPath}/>
                    :
                    <></> 
                }
            </div>
            <div className ={styles.revise}>
                <div className ={styles.profile}>
                    <div className ={styles.profile_pos}>
                        <img src={profile_img}/>
                    </div>
                    <div></div>
                    <div>
                        <Button text="프로필 수정" onClick={()=>{alert(1)}}/>
                    </div>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.username}>{username}</div>
                <div className={styles.userid}>{userid}</div>
                <div className={styles.about_me}>{about_me}</div>
                <span className={styles.follow}>
                    <span className={styles.count}>{follow}</span>
                    <span> 팔로우 중</span>
                </span>
                <span className={styles.follower}>
                    <span  className={styles.count}>{follower}</span>
                    <span> 팔로워</span>
                </span>
            </div>
            <div>
                <Tweet_list/>
            </div>
        </div>
    )
};

export default User_info;
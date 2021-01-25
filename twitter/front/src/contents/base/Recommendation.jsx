import React from 'react';
import { Button } from './button';

import styles from './recommendation.module.css';

const Recommendation = (props) => {
    return(
        <div className={styles.recommendation}>
                <div className={styles.recommendation_style_top}>
                    <span className={styles.recommendation_text}>팔로우 추천</span>
                </div>
                <div className={styles.recommendation_style_body}>
                    <div className={styles.user_info}>
                    <img src="/images/default_profile_400x400.png" alt=""/>
                        
                        <div className={styles.style_between}>
                            <div className={styles.leftMargin}>
                                <div className={styles.user_name}>1</div>
                                <div className={styles.user_id}>@1</div> 
                            </div>
                            
                            <Button text ="팔로우"/>

                        </div>
                    </div>
                </div>  

                <div className={styles.recommendation_style_body}>
                    <div className={styles.user_info}>
                    <img src="/images/default_profile_400x400.png" alt=""/>
                        
                        <div className={styles.style_between}>
                            <div className={styles.leftMargin}>
                                <div className={styles.user_name}>2</div>
                                <div className={styles.user_id}>@2</div> 
                            </div>
                            <Button text ="팔로우"/>
                            
                        </div>
                    </div>
                </div>  

                <div className={styles.recommendation_style_bottom}>
                    <span className={styles.recommendation_text}>더 보기</span>
                </div>

            </div>
    )
};

export default Recommendation;
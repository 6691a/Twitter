import React, { useState, useRef } from 'react';
import navbar_left from '../base/navbar_left';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";

import styles_right from './home_contents.module.css';
import styles from '../base/navbar.module.css';

import TextareaAutosize from 'react-textarea-autosize';
import Home_tweet from './home_tweet';
import Home_serch from './home_serch';
import Recommendation from '../base/Recommendation';

const Home_contents = (props) => {
    const tweetRef = useRef();

    const [data, setData] = useState(
    {
        tweets: [
            {
                'username' : "닉네임",
                'userID' : "@id",
                'text' : "작성내용",
                'imagePath' : [
                    "/images/test/macbook-200521-195335.png",
                    "/images/test/macbook-200521-195335.png",
                    "/images/test/macbook-200521-195335.png",
                    "/images/test/macbook-200521-195335.png",
                ],     
                'comment' : {
        
                },
                'retweet':'10',
                'like': "10",           
            },

        ]        

    });

    const mobile = useMediaQuery({
        query : "(max-width:1300px)"
    });

    return(
        <div className={styles.contents_right}>
                <div className={styles_right.contents_main}>
                    <div className={styles_right.content_title}>
                        <span className={styles_right.title_text}>홈</span>
                        <div className={styles_right.title_svg_bg}>
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path>
                                </g>
                            </svg> 
                        </div>
                    </div>

                    <div className={styles_right.content_tweet}>
                        <div className={styles_right.content_position}>
                            <div  className={styles_right.content_user_position}>
                                <img className={styles_right.content_user_img} src="/images/default_profile_400x400.png" alt=""/>
                            </div>
                            <div className={styles_right.content_text}>
                                <TextareaAutosize 
                                ref={tweetRef}
                                minRows={1}
                                maxRows={20}
                                placeholder="무슨 일이 일어나고 있나요?"
                                />
                            </div>
                        </div>

                        <div className={styles_right.content_tweet_submit}>
                                <ul>
                                    <li className={styles_right.content_tweet_submit_svg_bg}>
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z"></path>
                                        </g>
                                        </svg>
                                    </li>
                                </ul>
                                <button className={styles_right.content_tweet_submit_Btn}>트윗</button>
                        </div> 
                    </div>
                    
                    {   
                        data.tweets.map(item => (
                            <Home_tweet data={item}/>
                        ))
                    }
            </div>
            {
                !mobile? <Home_serch width="35%"> <Recommendation/> </Home_serch>

                :
                <></>
            }

        </div>

    )
};

export default Home_contents;
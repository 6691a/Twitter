import React, { useState, } from 'react';
import base_style from '../base/navbar.module.css';
import { useMediaQuery } from "react-responsive";
import styles from './profile.module.css';
import Recommendation from '../base/Recommendation';
import Home_serch from '../home/home_serch';
import Home_tweet from '../home/home_tweet';

import Header from './header';
import User_info from './user_info';
import Tweet_list from './tweet_list';

const  Profile = (props) => {

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

    const [hover, setHover] = useState('tweet')

    const mobile = useMediaQuery({
        query : "(max-width:1300px)"
    });

    
    return(

        <div className={base_style.contents_right}>
            <div className={styles.main}>
                <Header username = "username" tweet_count="1"/>

                <User_info follow="1" follower="1" username="155555" userid="@123" profile_img="/images/test/macbook-200521-195335.png" about_me="123"/>
                <Tweet_list hover={hover} setHover={setHover}/>
                {   
                    hover === 'tweet' && 
                    data.tweets.map(item => (
                        <Home_tweet data={item}/>
                    ))
        
                }
            </div>

            {   
                !mobile? <Home_serch width="35%" placeholder="트위터 검색"> <Recommendation/> </Home_serch>
                :
                <></>
            }
        </div>
    )
};

export default Profile;


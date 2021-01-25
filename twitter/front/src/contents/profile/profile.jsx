import React from 'react';
import base_style from '../base/navbar.module.css';
import { useMediaQuery } from "react-responsive";
import styles from './profile.module.css';
import Recommendation from '../base/Recommendation';
import Home_serch from '../home/home_serch';
import Header from './header';
import User_info from './user_info';

const  Profile = (props) => {

    const mobile = useMediaQuery({
        query : "(max-width:1300px)"
    });

    
    return(

        <div className={base_style.contents_right}>
            <div className={styles.main}>
                <Header username = "username" tweet_count="1"/>

                <User_info follow="1" follower="1" username="155555" userid="@123" profile_img="/images/test/macbook-200521-195335.png" about_me="123"/>
            </div>

            {   
                !mobile? <Home_serch width="35%"> <Recommendation/> </Home_serch>
                :
                <></>
            }
        </div>
    )
};

export default Profile;
import { render } from '@testing-library/react';
import React from 'react';
import styles_right from './home_contents.module.css';

const Home_tweet = (props) =>{
    const {username, userID, text , imagePath, like} = props.data;


    const imageRender = () => {
        switch (imagePath.length) {
            case 0:
                return <img className={styles_right.tweet_data_img} src={imagePath[0]} alt=""/>
            case 3: 
                return(
                    <>
                    <img className={styles_right.tweet_data_img} src={imagePath[0]} alt=""/>
                    <img className={styles_right.tweet_data_imgs} src={imagePath[1]} alt=""/>
                    <img className={styles_right.tweet_data_imgs} src={imagePath[2]} alt=""/>
                    </>
                )
            default:
                return(
                    imagePath.map(item=>(
                        <img className={styles_right.tweet_data_imgs} src={item} alt=""/>
                    ))
                )

        }

    }
    return(
            <div className={styles_right.tweets}>
                        <div className={styles_right.blank}></div>

                        <div className={styles_right.tweet}>
                            <div className={styles_right.content_user_position}>
                                    <img className={styles_right.content_user_img} src="/images/default_profile_400x400.png" alt=""/>
                            </div>
                            <div  className={styles_right.tweet_data}>
                                <div className={styles_right.tweet_data_style}>
                                    <div className={styles_right.tweet_uses_style}>
                                    
                                    <span className={styles_right.tweet_data_username}>{username}</span>
                                    <span className={styles_right.tweet_data_id}>{userID}</span>
                                    </div>
                                    <div className={styles_right.tweet_svg_bg}>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M19.39 14.882c-1.58 0-2.862-1.283-2.862-2.86s1.283-2.862 2.86-2.862 2.862 1.283 2.862 2.86-1.284 2.862-2.86 2.862zm0-4.223c-.75 0-1.362.61-1.362 1.36s.61 1.36 1.36 1.36 1.362-.61 1.362-1.36-.61-1.36-1.36-1.36zM12 14.882c-1.578 0-2.86-1.283-2.86-2.86S10.42 9.158 12 9.158s2.86 1.282 2.86 2.86S13.578 14.88 12 14.88zm0-4.223c-.75 0-1.36.61-1.36 1.36s.61 1.362 1.36 1.362 1.36-.61 1.36-1.36-.61-1.363-1.36-1.363zm-7.39 4.223c-1.577 0-2.86-1.283-2.86-2.86S3.034 9.16 4.61 9.16s2.862 1.283 2.862 2.86-1.283 2.862-2.86 2.862zm0-4.223c-.75 0-1.36.61-1.36 1.36s.61 1.36 1.36 1.36 1.362-.61 1.362-1.36-.61-1.36-1.36-1.36z"></path>
                                        </g>
                                    </svg>
                                    </div>

                                </div>
                                <div className={styles_right.tweet_data_contents}> 
                                    <div className={styles_right.tweet_data_text}>{text}</div>
                                    <div className={styles_right.tweet_img_bg}>
                                        {
                                            imageRender()   
                                        }
                                        {/* <img className={styles_right.tweet_data_imgs} src={imagePath[0]} alt=""/>
                                        <img className={styles_right.tweet_data_imgs} src="/images/test/macbook-200521-195335.png" alt=""/>
                                        <img className={styles_right.tweet_data_imgs} src="/images/test/macbook-200521-195335.png" alt=""/> */}
                                    </div>
                                </div>

                                <div className={styles_right.tweet_option}>
                                    <div className={styles_right.tweet_option_item}>
                                        <span className={styles_right.svg_bg}>
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                                            </g>
                                        </svg>
                                        </span>
                                        <span>1</span>
                                    </div>

                                    <div className={styles_right.tweet_option_item}>
                                        <span className={styles_right.svg_bg}>
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
                                            </g>
                                        </svg>
                                        </span>
                                        <span>1</span>
                                    </div>

                                    <div className={styles_right.tweet_option_item}>
                                        <span className={styles_right.svg_bg}>
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path h th d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                                            </g>
                                        </svg>
                                        </span>
                                        <span>{like}</span> 
                                    </div>
                                </div>
                            </div>
                        </div>
        </div> 
        
    )
};

export default Home_tweet;
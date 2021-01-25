import React from 'react';
import { Button, Button_B } from './button';

// import Button, {Button} from './button';
import styles from './user_info.module.css';

const User_info = ({imgPath, profile_img}) => {
    return(
        <div>
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
                        <Button_B/>
                        {/* <Button text="프로필 수정" onClick={()=>{console.log(1)}}/> */}
                        {/* <Button text="프로필 수정" onClick={()=>{console.log(1)}}/> */}

                    </div>
                </div>
            </div>
        </div>
    )
};

export default User_info;
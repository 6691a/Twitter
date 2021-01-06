import React, {useState} from 'react';
import styles from './info_input.module.css';
import { useHistory } from 'react-router-dom';

const Info_profile = (props) => {


    const signupHis = useHistory();
    const [fileURL,setFileURL] =  useState()
    const [imgData, setImgData] = useState("https://twitter-image-server.s3.ap-northeast-2.amazonaws.com/media/default/default_profile_400x400.png")
    
    const setProfile = (e) => {
        e.preventDefault()
        console.log(fileURL);
        upload_img();
    }

    const handleFile = (e) => {
        if(e.target.files[0]) {
            
            setFileURL(e.target.files[0])
            const reader = new FileReader();
            reader.addEventListener("load", ()=>{
                setImgData(reader.result);
            })
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    const upload_img = () => {
        if(fileURL){
            var formdata = new FormData();
            formdata.append("img", fileURL);
            formdata.append("email", '421079a@gmail.com');
            // `${props.email}`
            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };
            
            fetch("http://127.0.0.1:8000/user/profile/", requestOptions)
            .then(response =>  response.status == 200 && signupHis.push('/login'))
            .catch(error => console.log('error', error));
        }
        else {
            signupHis.push('/login')
        }
    }
    return(
        <div className={styles.background}>
            {`url: ${fileURL}`}
            <div className={styles.sinup}>
                <form action="" onSubmit={setProfile}>
                    <div className={styles.title}>
                        <div className={styles.container_left} ></div>
                        <img className={styles.logo} src="/images/twitter.svg" alt=""/>
                        <button className={styles.next_Btn}   type='submit'>다음</button>

                    </div>
                    <div className={styles.body}>
                        <h1>프로필 사진 선택하기</h1>
                        <span className={styles.comment}>마음에 드는 셀카 사진이 있나요? 지금 업로드하세요.</span>

                        <label className={styles.input_label_file}>
                            <input className={styles.img_uploader}type="file" accept='image/jpg,image/png,image/jpeg,image/gif' onChange={handleFile}/>
                            <img className={styles.upload_img} src={imgData} alt=""/> 
                        </label>
                        {/* <span className={styles.input_key_text}>이메일을 받지 못하셨나요?</span> */}
                    </div>
                </form>                    
            </div>
        </div>
    )
};

export default Info_profile;
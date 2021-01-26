import React from 'react';
import base_style from '../base/navbar.module.css';
import styles from './search.module.css';

import Home_serch from '../home/home_serch';
import Recommendation from '../base/Recommendation';

const Search = (props) =>{
    return(
        <div className={base_style.contents_right}>
            <div className={styles.main}>
                <Home_serch width="100%" placeholder="트위터 검색">
                    <img style={{width:'100%'}}  src="/images/SpNo08gD.jfif" alt="twitter_logo"/>
                    <Recommendation/>
                </Home_serch>
            </div>

        </div>
    )
};

export default Search;
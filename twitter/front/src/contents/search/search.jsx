import React from 'react';
import base_style from '../base/navbar.module.css';
import Home_serch from '../home/home_serch';

const Search = (props) =>{
    return(
        <div className={base_style.contents_right}>
            <Home_serch/>
        </div>
    )
};

export default Search;
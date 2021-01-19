import React from 'react';
import Navbar_left from './base/navbar_left';
import None from './base/none';
import Home from './home/home';
import Home_serch from './home/home_serch';
import Message from './message/message';
import Profile from './profile/profile';
import Search from './search/search';

const Contents = (props) =>{

    const router = () => {
        switch (props.path) {
            case 'home':
                return (
                    <>
                    <Navbar_left active='home'/>
                    <Home/>
                    </>
            )

            case 'search':
                return(
                    <>
                    <Navbar_left active='search'/>
                    <Search/>
                    </>

                )

            case 'messages':
                return(
                <>
                    <Navbar_left active='message'/>
                    <Message/>
                </>
            )
            case 'profile':
                return(
                <>
                    <Navbar_left active='profile'/>
                    <Profile/>
                </>
            )
            default:
                return(
                    <>
                        {/* <Navbar_left active='message'/> */}
                        <None/>
                    </>
                )
                
        }
    }
    return(
        <>
            {
                router()
            }
        </>
    )
};

export default Contents;
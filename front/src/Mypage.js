import React from "react";
import styled from 'styled-components';
import './Root_css.css';
import Login_img_svg from './Img/Login_img_svg.svg';
import Icon_fish_svg from './Img/Icon.png';
import Header from "./Header";
const Mypage = () => {
    const Content_area_basic = styled.div`
        width: 80%;
        margin-left: 10%;
        background-color: red;

    `
    const Profile_area = styled(Content_area_basic)`
        height: 20%;
    `
    return(
        <div className="Login_and_signup_main">
            <Header></Header>
            <Profile_area></Profile_area>
        </div>
    )
}

export default Mypage;
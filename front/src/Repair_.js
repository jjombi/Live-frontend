import React from "react";
import styled from 'styled-components';
import './Root_css.css';
import Login_img_svg from './Img/Login_img_svg.svg';
import Icon_fish_svg from './Img/Icon.png';
import Header from "./Header";
import LI from './Img/LeftImg.png';
import RI from './Img/Right.png';
const Repair_ = () => {
    const Title = styled.p`
        position: absolute;
        font-size: 14px;
        text-align: center;
        color: #10675B;
        text-align: center;
        font-family: Pretendard;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 4.5px;
        width: 40%;
        left: 30%;
        top: 1%;
    `
    const Line = styled.div`
        position: absolute;
        height:90%;
        border: 1px solid black;
        left: 50%;
        top : 7%;
    `
    const Btn_basic = styled.button`
        position: absolute;
        border-radius: 10px;
        background: #10675B;
        width: 20%;
        height: 5%;
        bottom: 5%;
        color: white;
    `
    const Btn1 = styled(Btn_basic)`
        left: 15%;
    `
    const Btn2 = styled(Btn_basic)`
        left: 65%;
    `
    const Img_basic = styled.div`
        position: absolute;
        width: 45%;
        height: 80%;
        top: 10%;
        object-fit: contain;

    `
    const Img_left = styled(Img_basic)`
        left: 2.5%;
        background: url(${LI}) no-repeat;
        
    `
    const Img_right = styled(Img_basic)`
        left: 52.5%;
        background: url(${RI}) no-repeat;
        
    `
    return(
        <>
            <Header></Header>
            <div className="Login_and_signup_main repair">
                <Title>소중한 사람들과의 추억을 끊기지 않게영원히 이어나갈 수 있도록</Title>
                <Line></Line>
                <Btn1>물품 수리 맡기기</Btn1>
                <Btn2>기계 수리 맡기기</Btn2>
                <Img_left></Img_left>
                <Img_right></Img_right>
            </div>
        </>
    )
}
export default Repair_;
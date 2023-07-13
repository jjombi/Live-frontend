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
        display:flex;
        flex-direction: column;
    `
    const Profile_area = styled(Content_area_basic)`
        height: 20%;
        margin-top: 5%;
        
    `
    const Camelcase = styled(Content_area_basic)`
        height: 30%;
        margin-top: 10%;
    `
    const Title = styled.h3`
        width: 20%;
        margin-left: 2%;

    `
    const Profile_content = styled.div`
        width: 100%;
        height: 80%;
        border-radius: 30px;
        border: 1px solid #182C3A;
        display: flex;
        align-items: center;
    `
    const Profile_content2 = styled(Profile_content)`
        flex-direction: column;
    `
    const Profile_img = styled.img` 
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color:red;
        margin-left: 3%; 
    `
    const Profile_name = styled.h3`
        width: 20%;
        margin-left: 2%;
    `
    const Select = styled.button`
        margin-top: 0%;
        margin-left: 55%;
        width: 88px;
        height: 34px;
        border-radius: 30px;
        border: 1px solid #182C3A;
    `
    const Column = styled.div`
        width:100%;
        height:50%;
        display: flex;

    `
    const Id = styled.p`
        width: 40%;
        color: #8B8B8B;
        margin-left: 2%;
        font-size: bord;
        height: 50%;
        margin-top: auto;
    `
    const Pass = styled(Id)`
        margin-left: 40%;
    `

    return(
        <>
            <Header></Header>
            <div className="Login_and_signup_main">
                <div className="mypage_main">
                    <Profile_area>
                        <Title>프로필</Title>
                        <Profile_content>
                            <Profile_img></Profile_img>
                            <Profile_name>이재건</Profile_name>
                            <Select></Select>
                        </Profile_content>
                    </Profile_area>
                    <Camelcase>
                        <Title>프로필</Title>
                        <Profile_content2>
                            <Column>
                                <Id>아이디<br></br><span>example@dgsw.hs.kr</span></Id>
                                <Pass>비밀번호<br></br><span>.............</span></Pass>
                            </Column>
                            <Column>
                                <Id>이름<br></br><span>이이이</span></Id>
                                <Select></Select>
                            </Column>
                        </Profile_content2>
                    </Camelcase>
                </div>
                
            </div>
        </>
    )
}

export default Mypage;
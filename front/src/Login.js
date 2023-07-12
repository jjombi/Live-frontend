import React from "react";
import styled from 'styled-components';
import Header from "./Header";
import './Root_css.css';
import Login_img_svg from './Img/Login_img_svg.svg';
import Icon_fish_svg from './Img/Icon.png';
import Main_background_svg from './Img/Subtract.svg';
import { useNavigate } from "react-router-dom";
const Login = () => {
    
    const Login_main = styled.div`
        position: absolute;
        width: 80%;
        height: 70%;
        top: 20%;
        left:10%;
        display: flex;
        flex-direction: row;
    `
    const Main_background = styled.div`
        background: url(${Main_background_svg});
        background-position: center center;
        width: 30%;
        height: 100%;

    `
    const Main_input_area = styled.div`
        width: 70%;
        height: 100%;
        border-radius: 0px 10px 10px 0px;
        background: rgba(24, 104, 115, 0.50);
    `
    const Input_area_position = styled.div`
        width: 40%;
        height: 50%;
        position: absolute;
        top: 25%;
        left: 45%;
    `
    const Input_basic = styled.input`
        width: 100%;
        height: 50px;
        border-radius: 60px;
        background: #FFF;
        text-align: center;
        margin-top : 5%;
    `
    const Input_id = styled(Input_basic)`
    `
    const Input_password = styled(Input_basic)`
    `
    const Input_btn = styled(Input_basic)`
        margin-top : 10%;
        background: #10675B;
        color: #FFF;
        &:hover{
            border: 2px solid white;
            color: white;
        }
        cursor: pointer;
    `

    return(
        <div className="Login_and_signup_main First_background">
            <div className="relative">
                <Header></Header>
                <Login_main>
                    <Main_background></Main_background>
                    <Main_input_area>
                        <Input_area_position>
                            <Input_id type="text" placeholder="아이디"></Input_id>
                            <Input_password type="password" placeholder="비밀번호"></Input_password>
                            <Input_btn type="button" value="로그인"></Input_btn>
                        </Input_area_position>
                    </Main_input_area>
                </Login_main>
            </div>
            
        </div>
    );
}
export default Login;
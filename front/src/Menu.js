import React from "react";
import styled from 'styled-components';
import './Root_css.css';
import Login_img_svg from './Img/Login_img_svg.svg';
import Icon_fish_svg from './Img/Icon.png';
import Main_background_svg from './Img/Subtract.svg';
import { useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";

const Menu = () => {
    
    const Step_area = styled.div`
        position: absolute;
        width: 90%;
        height:25%;
        left: 5%;
        bottom: 9%;
        display: flex;
        flex-direction: row;
    `
    const Step_basic = styled.div`
        width: 22.75%;
        height: 100%;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.10);
        backdrop-filter: blur(2px);
        color: #FFFFFF;
    `

    const Second_step_basic = styled(Step_basic)`
        margin-left: 3%;
    `
    const H1_step_title =styled.h1`
        width:90%;
        margin-left: 5%;
        margin-top: 2%;
    `
    const H3_step_text = styled.h3`
        width:90%;
        margin-left: 5%;
        margin-top: 6%;
    `
    return(
        <div className="Login_and_signup_main Menu_background">
            <div className="Second_background">
                <Header></Header>
                <Step_area>
                    <Step_basic>
                        <H1_step_title>Step1</H1_step_title>
                        <H3_step_text>사용자의 기억 데이터 백업</H3_step_text>
                    </Step_basic>
                    <Second_step_basic>
                        <H1_step_title>Step2</H1_step_title>
                        <H3_step_text>기계에 데이터 동기화</H3_step_text>
                    </Second_step_basic>
                    <Second_step_basic>
                        <H1_step_title>Step3</H1_step_title>
                        <H3_step_text>시스템 안정화 및 작동여부 테스트</H3_step_text>
                    </Second_step_basic>
                    <Second_step_basic>
                        <H1_step_title>Step4</H1_step_title>
                        <H3_step_text>기계인간 완성 ^v^</H3_step_text>
                    </Second_step_basic>
                </Step_area>
            </div>
        </div>
    )
}
export default Menu;
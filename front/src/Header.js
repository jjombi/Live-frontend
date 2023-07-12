import React from "react";
import styled from 'styled-components';
import './Root_css.css';
import Login_img_svg from './Img/Login_img_svg.svg';
import Icon_fish_svg from './Img/Icon.png';
import Main_background_svg from './Img/Subtract.svg';
import { useNavigate, useLocation } from "react-router-dom";
import Modal from 'react-modal'; 
import { useState, useEffect } from "react";
import Mypage from "./Mypage";
const Header = () => {
    const location = useLocation();
    const [login_signup_btn, setlogin_signup_btn] = useState(false);
    const [menu, setmenu] = useState(false);
    const [header_area, setheader_area] = useState(false);
    let style_header = ``
    
    const path = location.pathname; //현재 url값
    useEffect(()=>{
        if(path == '/menu'){
            setmenu(true);
            setlogin_signup_btn(false);
        }else if(path == '/login'){
            setlogin_signup_btn(true);
            setmenu(false);
        }else if(path == '/repair' || path == '/apply' || path == '/mypage' || path == '/notice_board'){
            setmenu(true);
            setlogin_signup_btn(false);
            setheader_area(true);
        }
    })
  

    const navigate = useNavigate();
    const click_login_btn = () => {
        navigate('/login');
    }
    const click_signup_btn = () => {
        navigate('/signup');
    }

    const Logo_area = styled.p`
        width : 10%;
        position: absolute;
        z-index:3;
        font-size: 40px;
        top: 7%;
        left: 45%;
        cursor: pointer;
    `
    const Line = styled.div`
        border: 1px solid #02C38B;
        position: absolute;
        top: 15%;
        left: 37%;
        width: 26%;
        height: 0px;

    `
    const Menu = styled.header`
        position: absolute;
        top: 15%;
        left: 42%;
        width: 16%;
        height: 4%;
        display: flex;
        flex-direction: row;
        align-items: center;
    `
    const A_basic = styled.a`
        color: #FFF;
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-left: 3%;
        cursor: pointer;
    `
    const Header_area = styled.div`
        width: 100vw;
        height: 20vh;
        background: #182C3A;
    `
    const click_mypage = () => {
        navigate('/mypage')
    }
    const click_repaire = () => {
        navigate('/repair')
    }
    const click_apply = () => {
        navigate('/apply')
    }
    const click_notice_board = () => {
        navigate('/notice_board')
    }
    const click_menu = () => {
        navigate('/menu');
    }
    return(
        <div>
            {
                login_signup_btn === true 
                ? 
                <>
                    <button className="p_btn_basic Login_btn" onClick={click_login_btn}>로그인</button>
                    <button className="p_btn_basic signup_btn" onClick={click_signup_btn}>회원가입</button>
                </>
                : null

            }
            {
                header_area === true
                ?
                    <Header_area></Header_area>
                : null
            }
            <Logo_area onClick={click_menu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 205 68" fill="none">
                    <path d="M15.0664 10C16.4993 10 17.7275 10.4887 18.751 11.4662C19.7745 12.3923 20.3119 13.5756 20.3631 15.0161V33.6141C20.3119 35.7235 20.4398 37.6785 20.7469 39.4791C21.1051 41.2283 21.9239 42.7974 23.2033 44.1865C24.4827 45.5756 26.0947 46.3215 28.0394 46.4244H52.6037C54.0367 46.4759 55.2137 47.0161 56.1349 48.045C57.1072 49.074 57.5934 50.3087 57.5934 51.7492C57.5422 53.1383 57.0304 54.3215 56.0581 55.299C55.1369 56.2251 53.9855 56.7138 52.6037 56.7653H25.4295C21.8472 56.5595 18.879 55.3505 16.5249 53.1383C14.222 50.8746 12.5588 48.1222 11.5353 44.881C10.5629 41.6399 10.0512 38.1929 10 34.5402V15.0161C10.0512 13.627 10.5629 12.4695 11.5353 11.5434C12.5076 10.5659 13.6846 10.0514 15.0664 10Z" fill="white"/>
                    <path d="M72.7925 27.9807C70.7455 27.9807 69.0311 27.2605 67.6494 25.8199C66.3188 24.3794 65.6535 22.6045 65.6535 20.4952C65.6535 18.3344 66.3188 16.5338 67.6494 15.0932C69.0311 13.6527 70.7455 12.9325 72.7925 12.9325C74.8907 12.9325 76.6051 13.6527 77.9357 15.0932C79.3174 16.5338 80.0083 18.3344 80.0083 20.4952C80.0083 22.6559 79.3174 24.4566 77.9357 25.8971C76.5539 27.2862 74.8396 27.9807 72.7925 27.9807ZM72.7925 58C70.7455 58 69.0311 57.2797 67.6494 55.8392C66.3188 54.3987 65.6535 52.5981 65.6535 50.4373C65.6535 48.2765 66.3188 46.4759 67.6494 45.0354C69.0311 43.5949 70.7455 42.8746 72.7925 42.8746C74.8396 42.8746 76.5539 43.5949 77.9357 45.0354C79.3174 46.4759 80.0083 48.2765 80.0083 50.4373C80.0083 52.5981 79.3174 54.3987 77.9357 55.8392C76.5539 57.2797 74.8396 58 72.7925 58Z" fill="white"/>
                    <path d="M102.5 52.6752C99.89 49.1254 97.2801 44.4695 94.6701 38.7074L89.6805 27.9035C89.4246 27.3376 89.2711 26.7203 89.2199 26.0514C89.1176 24.6109 89.5526 23.3762 90.5249 22.3473C91.4972 21.3183 92.7766 20.8039 94.3631 20.8039C96.103 20.8039 97.3824 21.164 98.2012 21.8842C99.0712 22.5531 99.7621 23.4277 100.274 24.508L103.882 33.4598C104.803 35.5691 105.698 37.5756 106.568 39.4791C107.49 41.3312 108.513 43.0289 109.639 44.5723C110.816 46.1158 112.121 46.9389 113.554 47.0418C114.936 46.9389 116.241 46.1158 117.469 44.5723C118.544 43.0289 119.516 41.3312 120.386 39.4791C121.307 37.5756 122.228 35.5691 123.149 33.4598L126.757 24.508C127.269 23.4277 127.934 22.5531 128.753 21.8842C129.623 21.164 130.928 20.8039 132.668 20.8039C134.254 20.8039 135.534 21.3183 136.506 22.3473C137.479 23.3762 137.914 24.6109 137.811 26.0514C137.76 26.7203 137.606 27.3376 137.351 27.9035L132.361 38.7074C129.751 44.4695 127.141 49.1254 124.531 52.6752C122.024 56.1736 118.364 57.9486 113.554 58C108.692 57.9486 105.008 56.1736 102.5 52.6752Z" fill="white"/>
                    <path d="M162.068 56.7653C157.565 56.6109 154.162 55.5563 151.859 53.6013C149.556 51.5949 147.893 49.3569 146.869 46.8875C145.846 44.3666 145.334 41.8199 145.334 39.2476C145.334 36.5723 145.82 34 146.793 31.5305C147.816 29.0096 149.479 26.7717 151.782 24.8167C154.136 22.8103 157.104 21.7814 160.687 21.7299H189.857C191.29 21.7299 192.492 22.2186 193.465 23.1961C194.488 24.1222 195 25.254 195 26.5916C195 27.9807 194.488 29.164 193.465 30.1415C192.492 31.0675 191.29 31.5305 189.857 31.5305H161.147C160.021 31.5305 159.023 31.9164 158.154 32.6881C157.335 33.4598 156.721 34.463 156.311 35.6978C155.953 36.9325 155.774 38.1415 155.774 39.3248C155.774 40.6109 155.953 41.8714 156.311 43.1061C156.721 44.3408 157.335 45.3441 158.154 46.1158C159.023 46.836 160.021 47.2219 161.147 47.2733H189.857C191.29 47.2733 192.492 47.7363 193.465 48.6624C194.488 49.5884 195 50.6945 195 51.9807C195 53.3183 194.488 54.4502 193.465 55.3762C192.492 56.3022 191.29 56.7653 189.857 56.7653H162.068ZM194.079 39.0932C194.079 40.0707 193.644 40.9196 192.774 41.6399C192.006 42.3087 191.034 42.6431 189.857 42.6431H164.755C163.578 42.6431 162.58 42.3087 161.761 41.6399C160.943 40.9196 160.533 40.0707 160.533 39.0932C160.533 38.1672 160.943 37.3441 161.761 36.6238C162.58 35.955 163.578 35.6206 164.755 35.6206H189.857C191.034 35.6206 192.032 35.9807 192.851 36.701C193.669 37.3698 194.079 38.1672 194.079 39.0932Z" fill="white"/>
                    <g filter="url(#filter0_f_19_15)">
                        <path d="M15.0664 10C16.4993 10 17.7275 10.4887 18.751 11.4662C19.7745 12.3923 20.3119 13.5756 20.3631 15.0161V33.6141C20.3119 35.7235 20.4398 37.6785 20.7469 39.4791C21.1051 41.2283 21.9239 42.7974 23.2033 44.1865C24.4827 45.5756 26.0947 46.3215 28.0394 46.4244H52.6037C54.0367 46.4759 55.2137 47.0161 56.1349 48.045C57.1072 49.074 57.5934 50.3087 57.5934 51.7492C57.5422 53.1383 57.0304 54.3215 56.0581 55.299C55.1369 56.2251 53.9855 56.7138 52.6037 56.7653H25.4295C21.8472 56.5595 18.879 55.3505 16.5249 53.1383C14.222 50.8746 12.5588 48.1222 11.5353 44.881C10.5629 41.6399 10.0512 38.1929 10 34.5402V15.0161C10.0512 13.627 10.5629 12.4695 11.5353 11.5434C12.5076 10.5659 13.6846 10.0514 15.0664 10Z" fill="white" fill-opacity="0.7"/>
                        <path d="M72.7925 27.9807C70.7455 27.9807 69.0311 27.2605 67.6494 25.8199C66.3188 24.3794 65.6535 22.6045 65.6535 20.4952C65.6535 18.3344 66.3188 16.5338 67.6494 15.0932C69.0311 13.6527 70.7455 12.9325 72.7925 12.9325C74.8907 12.9325 76.6051 13.6527 77.9357 15.0932C79.3174 16.5338 80.0083 18.3344 80.0083 20.4952C80.0083 22.6559 79.3174 24.4566 77.9357 25.8971C76.5539 27.2862 74.8396 27.9807 72.7925 27.9807ZM72.7925 58C70.7455 58 69.0311 57.2797 67.6494 55.8392C66.3188 54.3987 65.6535 52.5981 65.6535 50.4373C65.6535 48.2765 66.3188 46.4759 67.6494 45.0354C69.0311 43.5949 70.7455 42.8746 72.7925 42.8746C74.8396 42.8746 76.5539 43.5949 77.9357 45.0354C79.3174 46.4759 80.0083 48.2765 80.0083 50.4373C80.0083 52.5981 79.3174 54.3987 77.9357 55.8392C76.5539 57.2797 74.8396 58 72.7925 58Z" fill="white" fill-opacity="0.7"/>
                        <path d="M102.5 52.6752C99.89 49.1254 97.2801 44.4695 94.6701 38.7074L89.6805 27.9035C89.4246 27.3376 89.2711 26.7203 89.2199 26.0514C89.1176 24.6109 89.5526 23.3762 90.5249 22.3473C91.4972 21.3183 92.7766 20.8039 94.3631 20.8039C96.103 20.8039 97.3824 21.164 98.2012 21.8842C99.0712 22.5531 99.7621 23.4277 100.274 24.508L103.882 33.4598C104.803 35.5691 105.698 37.5756 106.568 39.4791C107.49 41.3312 108.513 43.0289 109.639 44.5723C110.816 46.1158 112.121 46.9389 113.554 47.0418C114.936 46.9389 116.241 46.1158 117.469 44.5723C118.544 43.0289 119.516 41.3312 120.386 39.4791C121.307 37.5756 122.228 35.5691 123.149 33.4598L126.757 24.508C127.269 23.4277 127.934 22.5531 128.753 21.8842C129.623 21.164 130.928 20.8039 132.668 20.8039C134.254 20.8039 135.534 21.3183 136.506 22.3473C137.479 23.3762 137.914 24.6109 137.811 26.0514C137.76 26.7203 137.606 27.3376 137.351 27.9035L132.361 38.7074C129.751 44.4695 127.141 49.1254 124.531 52.6752C122.024 56.1736 118.364 57.9486 113.554 58C108.692 57.9486 105.008 56.1736 102.5 52.6752Z" fill="white" fill-opacity="0.7"/>
                        <path d="M162.068 56.7653C157.565 56.6109 154.162 55.5563 151.859 53.6013C149.556 51.5949 147.893 49.3569 146.869 46.8875C145.846 44.3666 145.334 41.8199 145.334 39.2476C145.334 36.5723 145.82 34 146.793 31.5305C147.816 29.0096 149.479 26.7717 151.782 24.8167C154.136 22.8103 157.104 21.7814 160.687 21.7299H189.857C191.29 21.7299 192.492 22.2186 193.465 23.1961C194.488 24.1222 195 25.254 195 26.5916C195 27.9807 194.488 29.164 193.465 30.1415C192.492 31.0675 191.29 31.5305 189.857 31.5305H161.147C160.021 31.5305 159.023 31.9164 158.154 32.6881C157.335 33.4598 156.721 34.463 156.311 35.6978C155.953 36.9325 155.774 38.1415 155.774 39.3248C155.774 40.6109 155.953 41.8714 156.311 43.1061C156.721 44.3408 157.335 45.3441 158.154 46.1158C159.023 46.836 160.021 47.2219 161.147 47.2733H189.857C191.29 47.2733 192.492 47.7363 193.465 48.6624C194.488 49.5884 195 50.6945 195 51.9807C195 53.3183 194.488 54.4502 193.465 55.3762C192.492 56.3022 191.29 56.7653 189.857 56.7653H162.068ZM194.079 39.0932C194.079 40.0707 193.644 40.9196 192.774 41.6399C192.006 42.3087 191.034 42.6431 189.857 42.6431H164.755C163.578 42.6431 162.58 42.3087 161.761 41.6399C160.943 40.9196 160.533 40.0707 160.533 39.0932C160.533 38.1672 160.943 37.3441 161.761 36.6238C162.58 35.955 163.578 35.6206 164.755 35.6206H189.857C191.034 35.6206 192.032 35.9807 192.851 36.701C193.669 37.3698 194.079 38.1672 194.079 39.0932Z" fill="white" fill-opacity="0.7"/>
                    </g>
                    <defs>
                        <filter id="filter0_f_19_15" x="0" y="0" width="205" height="68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_19_15"/>
                        </filter>
                    </defs>
                </svg>
            </Logo_area>
            <Line></Line>
            {
                menu === true 
                ? 
                <>
                    <Menu>
                        <A_basic onClick={click_mypage}>마이페이지</A_basic>
                        <A_basic onClick={click_repaire}>수리</A_basic>
                        <A_basic onClick={click_apply}>신청하기</A_basic>
                        <A_basic onClick={click_notice_board}>게시판</A_basic>
                    </Menu>
                </>
                : null
            }
                
            
        </div>
    )
}

export default Header;
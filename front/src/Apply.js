import React from "react";
import styled from 'styled-components';
import './Root_css.css';
import Login_img_svg from './Img/Login_img_svg.svg';
import Icon_fish_svg from './Img/Icon.png';
import Header from "./Header";
const Apply = () => {
    const Text = styled.p`
        border-radius: 20px;
        border: 2px solid #182C3A;
        position: absolute;
        width: 35%;
        height: 80%;
        left: 5%;
        top: 3%;
    `
    const Checkbox = styled.input`
        width: 20%;
        height: 5%;
        position: absolute;
        bottom: 6%;
        left: 17%;
    `
    const Checkbox_text = styled.p`
        width: 15%;
        height: 5%;
        position: absolute;
        bottom: 5%;
        left: 14%;
    `
    const Right_area = styled.div`
        width: 45%;
        height: 80%;
        margin-left: 50%;
        margin-top: 3%; 
        display: flex;
        flex-direction: column;
    `
    const Right_text = styled.p`
        width: 25%;
        height:7%;
        left: 5%;
        margin-top: 5%;
    `
    const Input_area = styled.input`
        width:50%;
        height:7%;
        // margin-top: 5%;
        border-radius: 20px;
        border: 2px solid #182C3A;
    `
    return(
         
        <>
            <Header></Header>
            <div className="apply Login_and_signup_main">
                <Text>- 인계약은 피계약자의 생명이나 신체에 대해 기계인간으로 살아가는 것에 급여를 지급하는 계약입니다.
                - 이 계약서의 내용에 명시된 것과 관련이 없는 일은 계약 해지로 이어질 수 있습니다.
                - 개인의 기억 데이터는 회사에서 저장하고 있으며 데이터 이식 이외의 어떠한 목적으로도 사용하지 않습니다.
                - 데이터 일부에 문제가 생길 경우 사용자의 일정 비율의 배상을합니다.
                - 데이터가 손실되거나 유실될 경우 사용자에게 연락을 취해 해당 데이터를 복구하는 작업을 취할 수 있습니다.
                - 계약회사가 파산선고를 받ㅇ은 경우 계약자는 계약을 해지할 수 있습니다. 해지하지 않더라도 파산선고 후
                3개월을 경과하면 계약을 효력을 잃게 됩니다.
                - 계약자는 계약체결 후 바로 보험료의 전부 또는 제1회 계약금을 내야을 내야 하는데 이를 내지 않고 2개월이상             경과하면 다른 약정이 없는 한 계약회사는 이 계약을 해제할 수 있습니다.
                피계약자의 동의가 없는 타인의 계약은 무효입니다.  
                </Text>
                <Checkbox_text> 위 내용에 모두 동의합니다.</Checkbox_text>
                <Checkbox type="checkbox"></Checkbox>
                <Right_area>
                    <Right_text>이름</Right_text>
                    <Input_area></Input_area>
                    <Right_text>전화번호</Right_text>
                    <Input_area></Input_area>
                    <Right_text>거주지 주소</Right_text>
                    <Input_area></Input_area>
                </Right_area>
            </div>
        </>
    )
}
export default Apply;
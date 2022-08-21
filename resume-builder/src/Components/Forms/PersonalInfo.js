import React from "react";
import styled from "styled-components";
import Input from "../Utils/input";


const PersonalInfo = ({ personalInfo, onChange}) => {

    return(
        <PersonalInfoWrapper>
            <Title>Personal Information</Title>
            <Input
            placeholder='First'
            id='PersonFirstName'
            type="First"/>

            <Input
            placeholder='Middle'
            id='PersonMiddleName'
            type="Middle"/>

            <Input
            placeholder='Last'
            id='PersonLastName'
            type="Last"/>

            <Input
            placeholder='Address'
            id='PersonAddress'
            type="Address"/>

            <Input 
            placeholder="Email"
            id="PersonEmail"
            type="Email"/>

            <Input 
            placeholder="Phone"
            id="PersonPhone"
            type="Phone"/>

        </PersonalInfoWrapper>
    );
    
};

const PersonalInfoWrapper = styled.div
`
display: flex;
flex-direction: column;
height: fit-content;
width: 80%;
padding: 50px;

`;

const Title = styled.h2
`
text-align: center;

`;

export default PersonalInfo;
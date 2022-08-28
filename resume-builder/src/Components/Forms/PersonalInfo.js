
import React from "react";
import styled from "styled-components";
import Input from "../Utils/input";


const PersonalInfo = ({personalInfo, onChange }) => {
        return(
            <PersonalInfoWrapper>
                <Title>Personal Information</Title>
                <Input
                placeholder='First'
                id='PersonFirstName'
                type="text"
                name="firstName"
                onChange={(e) => onChange(e)}
                value={personalInfo.firstName}
                />
    
                <Input
                placeholder='Middle'
                id='PersonMiddleName'
                type="text"
                name="middleName"
                onChange={(e) => onChange(e)}
                value={personalInfo.middleName}
                />
    
                <Input
                placeholder='Last'
                id='PersonLastName'
                name="lastName"
                type="text"
                onChange={(e) => onChange(e)}
                value={personalInfo.lastName}
                />
    
                <Input
                placeholder='Address'
                id='PersonAddress'
                type="text"
                name="address"
                onChange={(e) => onChange(e)}
                value={personalInfo.address}
                />
    
                <Input 
                placeholder="Email"
                id="PersonEmail"
                type="Email"
                name="email"
                onChange={(e) => onChange(e)}
                value={personalInfo.email}
                />
    
                <Input 
                placeholder="Phone"
                id="PersonPhone"
                type="Phone"
                name="phone"
                onChange={(e) => onChange(e)}
                value={personalInfo.phone}
                />
    
            </PersonalInfoWrapper>
        );
    }

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
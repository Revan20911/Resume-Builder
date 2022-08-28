
import React from "react";
import styled from "styled-components";
import Input from "../Utils/input";


const PersonalInfo = ({id, personalInfo, onChange }) => {
        return(
            <PersonalInfoWrapper>
                <Title>Personal Information</Title>
                <Input
                placeholder='First'
                id='PersonFirstName'
                type="text"
                onChange={(e) => onChange(e, id)}
                value={personalInfo.firstName}
                />
    
                <Input
                placeholder='Middle'
                id='PersonMiddleName'
                type="text"
                onChange={(e) => onChange(e, id)}
                value={personalInfo.middleName}
                />
    
                <Input
                placeholder='Last'
                id='PersonLastName'
                type="text"
                onChange={(e) => onChange(e, id)}
                value={personalInfo.lastName}
                />
    
                <Input
                placeholder='Address'
                id='PersonAddress'
                type="text"
                onChange={(e) => onChange(e, id)}
                value={personalInfo.address}
                />
    
                <Input 
                placeholder="Email"
                id="PersonEmail"
                type="Email"
                onChange={(e) => onChange(e, id)}
                value={personalInfo.email}
                />
    
                <Input 
                placeholder="Phone"
                id="PersonPhone"
                type="Phone"
                onChange={(e) => onChange(e, id)}
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
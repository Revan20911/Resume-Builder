import React from "react";
import styled from "styled-components";
import Input from "../Utils/input";

const EducationInfo = ({ educationInfo, onChange}) => {

    return(
        <EducationWrapper>
            <Title>Education</Title>
            <Input
            placeholder='Highest Level of Education'
            id='PersonEducationLevel'
            type="EducationLevel"/>

            <Input
            placeholder='Institution'
            id='PersonEducationInstitution'
            type="Institution"/>

            <Input
            placeholder='Field of Study'
            id='Major'
            type="Major"/>

        </EducationWrapper>
    );
    
};

const EducationWrapper = styled.div
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

export default EducationInfo;
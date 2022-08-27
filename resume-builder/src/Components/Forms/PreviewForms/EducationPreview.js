import React from "react";
import styled from "styled-components";
import Input from "../Utils/input";
import Button from "../Utils/button";

const EducationPreview = () => {

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

            <Button sClass text="ADD" type="submit"/>

        </EducationWrapper>
    );
    
};

const EducationWrapper = styled.div
`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: fit-content;
width: 80%;
padding: 50px;



`;

const Title = styled.h2
`
text-align: center;

`;


import React from "react";
import styled from "styled-components";
import Input from "../Utils/input";
import Button from "../Utils/button";

const EducationInfo = (props, {onChange}) => {

    const {educationInfo} = props; 

    return(
        <EducationWrapper>
            <Title>Education</Title>
            <Input
            placeholder='Highest Level of Education'
            id='PersonEducationLevel'
            
            onChange={onChange}
            value={educationInfo.educationLevel}/>

            <Input
            placeholder='Institution'
            id='PersonEducationInstitution'
            
            onChange={onChange}
            value={educationInfo.educationInstitution}/>

            <Input
            placeholder='Field of Study'
            id='Major'
            
            onChange={onChange}
            value={educationInfo.field}/>

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

export default EducationInfo;
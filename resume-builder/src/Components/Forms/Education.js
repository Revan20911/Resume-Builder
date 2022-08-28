import React from "react";
import styled from "styled-components";
import Input from "../Utils/input";
import Button from "../Utils/button";

const EducationInfo = ({id, educationInfo, onChange, onDelete, name}) => {
    return(
        <EducationWrapper>
            <Title>Education</Title>
            <Input
            placeholder='Highest Level of Education'
            id='PersonEducationLevel'
            onChange={(e) => onChange(e, id)}
            name="educationLevel"
            value={educationInfo.educationLevel}/>

            <Input
            placeholder='Institution'
            id='PersonEducationInstitution'
            onChange={(e) => onChange(e, id)}
            name="educationInstitution"
            value={educationInfo.educationInstitution}/>

            <Input
            placeholder='Field of Study'
            id='Major'
            name="field"
            onChange={(e) => onChange(e, id)}
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
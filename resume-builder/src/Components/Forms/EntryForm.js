import React from "react";
import styled from "styled-components";
import PersonalInfo from "./PersonalInfo";
import EducationInfo from "./Education";
import ExperienceInfo from "./Experience";
import Button from "../Utils/button";



const EntryForm = ({
    Name, 
    onChangePersonInfo,
    onChangePersonExperience,
    onChangePersonEducation,

}) => {
    return(

        <FormContainer>

            <PersonalInfo />
            <EducationInfo />
            <ExperienceInfo />

            <Button text="Submit" sClass/>
            <Button></Button>
            <Button text="Clear" pClass></Button>
            
        </FormContainer>
    );
};

const FormContainer = styled.div
`
 display: flex;
 flex-direction: column;
 margin: 0 auto;
 width: 80%;
 height: 100%;
 padding: 10px;
 align-items: center;
 background-color: #eee;`;

 export default EntryForm;
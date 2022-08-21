import React from "react";
import styled from "styled-components";
import PersonalInfo from "./PersonalInfo";
import EducationInfo from "./Education";



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
            
        </FormContainer>
    );
};

const FormContainer = styled.div
`
 margin: 0 auto;
 width: 80%;
 height: 100%;
 padding: 20px;
 background-color: #eee;`;

 export default EntryForm;
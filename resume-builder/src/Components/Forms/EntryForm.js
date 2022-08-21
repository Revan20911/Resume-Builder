import React from "react";
import styled from "styled-components";
import PersonalInfo from "./PersonalInfo";


const EntryForm = ({
    Name, 
    onChangePersonInfo,
    onChangePersonExperience,
    onChangePersonEducation,

}) => {
    return(

        <FormContainer>

            <PersonalInfo></PersonalInfo>
            
           
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
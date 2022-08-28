import React from "react";
import styled from "styled-components";
import PersonalInfo from "./PersonalInfo";
import EducationInfo from "./Education";
import ExperienceInfo from "./Experience";
import Button from "../Utils/button";


const EntryForm = ({

  personalChange,
  experienceChange,
  educationChange,
  personalInfo,
  education,
  experienceInfo,
  submitForm,

  }) => {
    return(

        <FormContainer onSubmit={submitForm} >

            <PersonalInfo 
            personalInfo={personalInfo}
            onChange={personalChange}
            />

            <EducationInfo 
            educationInfo={education}
            onChange={educationChange}
            />

            <ExperienceInfo
            experienceInfo={experienceInfo}
            onChange={experienceChange}
            />
          
            <Button type="submit" text="Submit" sClass/>
            <Button/>
            <Button type="reset" text="Clear" pClass/>
         
        </FormContainer>
    );
};


const FormContainer = styled.form
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
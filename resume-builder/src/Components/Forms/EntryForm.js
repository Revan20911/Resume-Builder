import React from "react";
import styled from "styled-components";
import PersonalInfo from "./PersonalInfo";
import EducationInfo from "./Education";
import ExperienceInfo from "./Experience";



const EntryForm = ({

  personalChange,
  experienceChange,
  educationChange,
  personalInfo,
  education,
  experienceInfo,
  submitForm,
  educationAddItem,
  experienceItemAdd,
  
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
            experienceItemAdd={experienceItemAdd}
           
            />
            
        
        </FormContainer>
    );
};


const FormContainer = styled.form
`
 display: flex;
 flex-direction: column;
 margin: 0 auto;
 width: 100vw;
 height: 100vmax;
 padding: 10px;
 align-items: center;
 background-color: #eee;`;

 export default EntryForm;
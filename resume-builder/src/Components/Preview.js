import React from "react";
import EducationPreview from "./Forms/PreviewForms/EducationPreview";
import ExperiencePreview from "./Forms/PreviewForms/ExperiencePreview";
import PersonalPreview from "./Forms/PreviewForms/PersonalPreview";
import styled from "styled-components";


const Preview = ({personalInfo, experienceInfo, education} ) => {

    return(

        <PreviewWrapper>
            <PersonalPreview
            firstName={personalInfo.firstName}
            middleName={personalInfo.middleName}
            lastName={personalInfo.lastName}
            Address={personalInfo.address}
            phone={personalInfo.phone}
            email={personalInfo.email}/>
            <hr></hr>
            <EducationPreview
            educationInstitution={education.educationInstitution}
            educationLevel={education.educationLevel}
            field={education.field}/>
            <hr></hr>
            
            <ExperiencePreview
            jobTitle={experienceInfo.jobTitle}
            description={experienceInfo.description}
            startDate={experienceInfo.startDate}
            endDate={experienceInfo.endDate}/>

        </PreviewWrapper>
    )
}

const PreviewWrapper = styled.div
`margin: 0 auto;
display: flex;
flex-direction: column;
height: 100vmax;
width: 100vmax;
background-color: #fff;

border: 1px solid #ccc;

align-items: center;

hr{
    width: 80%;
}


`;

export default Preview;
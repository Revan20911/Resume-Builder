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
            email={personalInfo.email}
            />
            <EducationPreview
            educationInstitution={education.educationInstitution}
            educationLevel={education.educationLevel}
            field={education.field}/>
            
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
width: 60vmax;
background-color: #ccc;

align-items: center;


`;

export default Preview;
import React from "react";
import styled from "styled-components";


const EducationPreview = ({educationInstitution, educationLevel, field}) => {

    return(
        <EducationWrapper>
            <Title>Education</Title>
            <p>{educationInstitution}</p>
            <label> {educationLevel} of {field}</label>
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

export default EducationPreview;
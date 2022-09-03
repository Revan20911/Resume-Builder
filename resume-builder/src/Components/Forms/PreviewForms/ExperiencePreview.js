import React from "react";
import styled from "styled-components";

const ExperiencePreview = ({

    companyName, 
    jobTitle, 
    startDate,
    endDate,
    description

}) => {
        return(
            
            <ExperiencePreviewWrapper>
                <h2>Experience</h2>
                <h1>{companyName}</h1>
                <h2>{jobTitle}</h2>
                <Dates>
                    <label>{startDate} - {endDate}</label>
                </Dates>
                <p>{description}</p>
            </ExperiencePreviewWrapper>
        )
    };

const ExperiencePreviewWrapper = styled.div

`
display: flex;
flex-direction: column;

justify-content: center;
align-items: center;

h2{
    margin: 0 auto;
    text-align: center;
}

`;

const Dates = styled.div

`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 width: 100%; 

`;


export default ExperiencePreview;
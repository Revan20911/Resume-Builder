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
            <div>
                <h1>{companyName}</h1>
                <h2>{jobTitle}</h2>
                <Dates>
                    <label>{startDate}</label>
                    <label>{endDate}</label>
                </Dates>
                <label>{description}</label>
            </div>
        )
    };

const Dates = styled.div

`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 width: 100%; 

`;


export default ExperiencePreview;
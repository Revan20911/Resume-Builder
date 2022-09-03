import React from "react";
import styled from "styled-components";
import Input from "../Utils/input";
import Button from "../Utils/button";


const ExperienceInfo = ({id, experienceInfo, onChange, experienceItemAdd}) => {
    return(
        <ExperienceInfoWrapper>
            <Title>Professional Experience</Title>
            
            <Input
            placeholder='Company Name'
            id='Company'
            type="text"
            name="companyName"
            onChange={(e) => onChange(e, id)}
            value={experienceInfo.companyName}/>

            <Input
            placeholder='Job Title'
            id='Job-Title'
            type="text"
            name="jobTitle"
            onChange={(e) => onChange(e, id)}
            value={experienceInfo.jobTitle}/>

            <Dates>
            <Input
            placeholder='Start Date'
            type="date"
            dateClass
            name="startDate"
            onChange={(e) => onChange(e, id)}
            value={experienceInfo.startDate}/>

            <Input
            placeholder='End Date'
            type="date"
            dateClass
            name="endDate"
            onChange={(e) => onChange(e, id)}
            value={experienceInfo.endDate}/>
            </Dates>

            <Input
            placeholder="Job Description"
            descClass
            name="description"
            onChange={(e) => onChange(e, id)}
            value={experienceInfo.description}/>

        <Button type="submit" text="Add" sClass onClick={experienceItemAdd}/>

        </ExperienceInfoWrapper>
    );
    
};

const ExperienceInfoWrapper = styled.div
`
align-items: center;
height: fit-content;
width: 80%;



`;

const Dates = styled.div

`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 width: 100%; 

`;

const Title = styled.h2
`
text-align: center;

`;

export default ExperienceInfo;
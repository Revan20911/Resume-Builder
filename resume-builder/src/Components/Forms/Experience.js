import React from "react";
import styled from "styled-components";
import Input from "../Utils/input";
import Button from "../Utils/button";
import AddExperience from "./AddExperience";


const ExperienceInfo = ({ personalInfo, onChange, onClick}) => {

    

    return(
        <ExperienceInfoWrapper>
            <Title>Professional Experience</Title>
            
            <Input
            placeholder='Company Name'
            id='Company'
            type="Company"
            onChange={onChange}/>

            <Input
            placeholder='Job Title'
            id='Job-Title'
            type="Job-Title"
            onChange={onChange}/>

            <Dates>
            <Input
            placeholder='Start Date'
            type="date"
            dateClass
            onChange={onChange}/>

            <Input
            placeholder='End Date'
            type="date"
            dateClass
            onChange={onChange}/>
            </Dates>

            <Input
            placeholder="Job Description"
            descClass
            onChange={onChange}/>

           

            <Button  text="ADD" sClass/>
        </ExperienceInfoWrapper>
    );
    
};

const ExperienceInfoWrapper = styled.div
` <AddExperience />
align-items: center;
height: fit-content;
width: 80%;
padding: 50px;

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
import React from "react";
import styled from "styled-components";
import Input from "../Utils/input";


const ExperienceInfo = ({ personalInfo, onChange}) => {

    return(
        <ExperienceInfoWrapper>
            <Title>Professional Experience</Title>
            
            <Input
            placeholder='Company Name'
            id='Company'
            type="Company"/>

            <Input
            placeholder='Job Title'
            id='Job-Title'
            type="Job-Title"/>

            <Dates>
            <Input
            placeholder='Start Date'
            dateClass/>

            <Input
            placeholder='End Date'
            dateClass/>
            </Dates>

            <Input
            placeholder="Job Description"
            descClass/>

            

        </ExperienceInfoWrapper>
    );
    
};

const ExperienceInfoWrapper = styled.div
`
display: flex;
flex-direction: column;
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
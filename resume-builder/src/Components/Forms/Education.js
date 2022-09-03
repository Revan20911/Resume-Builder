import React from "react";
import styled from "styled-components";
import Input from "../Utils/input";
import Button from "../Utils/button";


const EducationInfo = ({id, educationInfo, onChange, educationItemAdd}) => {
    return(
        <EducationWrapper>
            <Title>Education</Title>
            <label>Education Level</label>
            <select
            
            placeholder='Highest Level of Education'
            id='PersonEducationLevel'
            onChange={(e) => onChange(e, id)}
            name="educationLevel"
            value={educationInfo.educationLevel}>
                <option value="" disabled selected>Select your option</option>
                <option value="High School" > High School</option>
                <option value="Bachelor's"> Bachelor's Degree</option>
                <option value="High School"> High School</option>
            </select>

            <Input
            placeholder='Institution'
            id='PersonEducationInstitution'
            onChange={(e) => onChange(e, id)}
            name="educationInstitution"
            value={educationInfo.educationInstitution}/>

            <Input
            placeholder='Field of Study'
            id='Major'
            name="field"
            onChange={(e) => onChange(e, id)}
            value={educationInfo.field}/>

            <Button type="submit" text="Add" sClass onClick={educationItemAdd}/>
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

padding: 20px;


select{
padding: 0.5rem;
margin: 10px;
height: 20px;
width: 96%;
border-radius: 0.5rem;
border: 1px solid transparent;
background-color: #fff;
color: #eee;


}

`;

const Title = styled.h2
`
text-align: center;

`;

export default EducationInfo;
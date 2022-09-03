import React from "react";
import styled from "styled-components";
import Input from "../Utils/input";
import Button from "../Utils/button";

const EducationInfo = ({id, educationInfo, onChange, onDelete}) => {
    return(
        <EducationWrapper>
            <Title>Education</Title>
            <select
            placeholder='Highest Level of Education'
            id='PersonEducationLevel'
            onChange={(e) => onChange(e)}
            name="educationLevel"
            value={educationInfo.educationLevel}>
                <option selected value="none">none</option>
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

            <Button sClass text="ADD" type="submit"/>

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

select{
padding: 10px 20px;
margin: 10px;
height: 20px;
width: 96%;
border-radius: 0.5rem;
border: 1px solid transparent;


}

`;

const Title = styled.h2
`
text-align: center;

`;

export default EducationInfo;
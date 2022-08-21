import React from "react";
import styled from "styled-components";
import Input from "../Utils/input";


const PersonalInfo = ({ personalInfo, onChange}) => {

    return(
        <PersonalInfoWrapper>
            <Input
            placeholder='Name'
            id='PersonName'
            type="Name"/>

            

            <Input
            placeholder='Name'
            id='PersonName'
            type="Name"/>

            

            <Input
            placeholder='Name'
            id='PersonName'
            type="Name"/>

            
           
        </PersonalInfoWrapper>
    );
    
};

const PersonalInfoWrapper = styled.div
`
display: flex;
height: 80%;
width: 80%;
padding: 50px;
`;

export default PersonalInfo;
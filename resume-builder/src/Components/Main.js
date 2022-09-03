import React from "react";
import styled from "styled-components";
import EntryForm from "./Forms/EntryForm";
import stateList from "./Forms/states";
import Preview from "./Preview";


const Main = () => {

    const [itemState, setItemState ] = React.useState(stateList);

    const handleEducationChange = (e) => {

        const {name, value} = e.target;

        setItemState((prevState) => ({

            ...prevState,

            education: {
                ...prevState.education,
                [name]: value,
            },
        }));
    }
  
    const handlePersonalChange = (e) => {

        const { name, value }  = e.target;

        setItemState((prevState) => ({

            ...prevState,
            personalInfo: {
                ...prevState.personalInfo,
                [name] : value,
            },
        }));
    }
  
    const handleExperienceChange = (e, id) => {

      
    }

    return(
    <MainWrapper>
        <EntryForm
        
            personalInfo={itemState.personalInfo}
            education={itemState.education}
            experienceInfo={itemState.experienceInfo}
            experienceChange={handleExperienceChange}
            educationChange={handleEducationChange}
            personalChange={handlePersonalChange}
        />
        <Preview
        experienceInfo={itemState.experienceInfo}  
        personalInfo={itemState.personalInfo}
        education={itemState.education}
        />
    </MainWrapper>
    );  
};

const MainWrapper = styled.div
`margin: 0 auto;
display: flex;
flex-direction: row;
background-color: #ccc;

`;

export default Main;
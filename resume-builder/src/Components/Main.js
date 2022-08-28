import React from "react";
import styled from "styled-components";
import EntryForm from "./Forms/EntryForm";
import stateList from "./Forms/states";


const Main = () => {

    const [itemState, setItemState ] = React.useState(stateList);
    
    const handleEducationChange = (e) => {

        
    }
  
    const handlePersonalChange = (e) => {

        const { name, value}  = e.target;

        setItemState((prevState) => ({

            ...prevState,
            personalInfo: {
                ...prevState.personalInfo,
                [name] : value,
            },
        }));
    }
  
    const handleExperienceChange = (e, id) => {

        const {name, value} = e.target;

        setItemState((prevState) => {

            const addExperience = prevState.experienceInfo.map((experienceItem) => {

                if(experienceItem.id === id){

                    return {...experienceItem, [name]: value}
                }
                return experienceItem
            })
            return {...prevState, experienceInfo: [...addExperience]}
        })
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
    </MainWrapper>
    );  
};

const MainWrapper = styled.div
`margin: 0 auto;
display: block;
height: 100vmax;
width: 60vmax;
background-color: #ccc;

`;

export default Main;
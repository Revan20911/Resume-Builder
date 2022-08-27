import React, {Component} from "react";
import styled from "styled-components";
import PersonalInfo from "./PersonalInfo";
import EducationInfo from "./Education";
import ExperienceInfo from "./Experience";
import Button from "../Utils/button";
import ExperiencePreview from "./PreviewForms/ExperiencePreview";



class EntryForm extends Component {

    constructor() {

        super();

        this.state = {

            education: {
                ecducationLevel: '',
                educationInstitution: '',
                field: '',
              },
        
              personalInfo: {
        
                firstName: '',
                middleName: '',
                lastName: '',
                address: '',
                email: '',
                phone: '',
        
              },
        
              experienceInfo: {
        
                companyName: '',
                jobTitle: '',
                startDate: '',
                endDate: '',
                description: '',
              },
              experienceList: [],
            }
        }
    
  handleEducationChange = (e) => {

    


  }

  handlePersonalChange = (e) => {

    this.setState = {

        personalInfo:{

            firstName: this.state.personalInfo.firstName,
            middleName: this.state.personalInfo.middleName,
            lastName: this.state.personalInfo.lastName,
            address: this.state.personalInfo.address,
            phone: this.state.personalInfo.phone,
            email: this.state.personalInfo.email,
        }
    }
  }

  handleExperienceChange = (e) => {

  }

  submitForm = (e) => {

    e.preventDefault();

    this.setState ({

        education: {

            educationLevel: e.target.value,
        },


    });

    console.log(this.state.education.educationLevel);
  }

  render(){ 
    
    const {education, personalInfo, experienceInfo, experienceList} = this.state;

    return(

        <FormContainer onSubmit={this.submitForm} >

            <PersonalInfo 
            onChange={this.handlePersonalChange}/>
            <EducationInfo 
            educationInfo={education}/>
            <ExperienceInfo />

            <Button type="submit" text="Submit" sClass/>
            <Button/>
            <Button type="reset" text="Clear" pClass/>


            <ExperiencePreview experienceList={experienceList}/>
            {/* <EducationPreview experienceList={experienceList}/>
            <PersonalInfoPreview experienceList={experienceList}/> */}
            
        </FormContainer>
    );
};

}

const FormContainer = styled.form
`
 display: flex;
 flex-direction: column;
 margin: 0 auto;
 width: 80%;
 height: 100%;
 padding: 10px;
 align-items: center;
 background-color: #eee;`;

 export default EntryForm;
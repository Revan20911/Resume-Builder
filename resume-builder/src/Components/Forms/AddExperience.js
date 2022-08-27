import React from "react";
import ExperiencePreview from "./PreviewForms/ExperiencePreview";

const AddExperience = (props) => {

    const {experinceList} = props;

    
    return (

        <div>
            {experinceList.map((experience) => {
                return (

                    <ExperiencePreview
                    
                        companyName={experience.companyName}
                        jobTitle={experience.jobTitle}
                        startDate={experience.startDate}
                        endDate={experience.endDate}
                        description={experience.description}
                
                    />    
                )
            })}
        </div>
    )
}

export default AddExperience;
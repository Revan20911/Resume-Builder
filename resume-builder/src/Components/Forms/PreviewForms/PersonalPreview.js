import React from "react";

const PersonalPreview = ({
    firstName,
    middleName,
    lastName,
    Address,
    phone,
    email
}) => {

    return(
        <>
        <h1>{firstName} {middleName} {lastName}</h1>
        <label>{Address} - {phone} - {email}</label>
        </>
    )

}

export default PersonalPreview;
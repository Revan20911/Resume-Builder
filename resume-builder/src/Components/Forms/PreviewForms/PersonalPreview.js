import React from "react";
import styled from "styled-components";

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
        <h1>{firstName}{lastName}</h1>
        <label>{Address} - {phone} - {email}</label>
        </>
    )

}

export default PersonalPreview;
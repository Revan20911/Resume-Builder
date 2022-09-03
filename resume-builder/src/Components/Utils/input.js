import React from "react";
import styled, { css } from "styled-components";

const Input = ({

     type,
     id,
     placeholder,
     value,
     onChange,
     descClass,
     dateClass,
     name,

}) => {
    return(

        <InputContainer
        onChange = {onChange}
        type = {type}
        id = {id}
        placeholder = {placeholder}
        name={name}
        value = {value}
        descClass={descClass}
        dateClass={dateClass}
        />

    );
};

const InputContainer = styled.input
`
padding: 0.5rem;
margin: 10px;
height: 20px;
width: 96%;
border-radius: 0.5rem;
border: 1px solid transparent;

&:hover{
    cursor: pointer;
    border: 1px solid #3E6189
}

&:focus{
    border-color: black;
}

${(props) => 

    props.descClass &&
    css
    `
    height: 100px;

    `}
${(props) => 

    props.dateClass &&
    css
    `
    width: 50%;

    `}

`;

export default Input;
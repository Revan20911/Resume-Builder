import React from "react";
import styled, { ThemeConsumer } from "styled-components";

const Input = ({type, id, placeholder, value, onChange}) => {
    return(
        <InputContainer
        onChange = {onChange}
        type = {type}
        id = {id}
        placeholder = {placeholder}
        value = {value}/>
    );
};

const InputContainer = styled.input
`
padding: 0.5rem;
margin: 10px;
height: 20px;
width: auto;
border-radius: 0.5rem;
border: 1px solid transparent;

&:focus{
    border-color: black;
}

`;

export default Input;
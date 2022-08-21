import React from "react";
import styled, {css} from "styled-components";

const Button = ({text, onClick, pClass, sClass}) => {
    return(

        <ButtonContainer 
        onClick = {onClick}
        pClass = {pClass}
        sClass = {sClass}>
            {text}
        </ButtonContainer>

    );
};

const ButtonContainer = styled.button 
`
 margin: 10px;
 height: 40px;
 width: 78%;
 border-radius: 0.5rem;
 border: 1px solid transparent;
 font-size: 20px;
 background-color: #22228B;

 &:hover{

    cursor: pointer;
    background-color: #9191C5;


 }

 ${(props) => 

    props.pClass && 
    css 
    `
    background-color: #ff0000;
    color: #FFFFFF;
        
        &:hover{
            background-color: #FF9F9F;
            cursor: pointer;
        }

    `}

 ${(props) => 

    props.sClass &&
    css

    `
    background-color:
    #227829;
    color: #FFFFFF;

        &:hover{
            background-color: #599A5F;
            cursor: pointer;
        }

    `}
`;

export default Button;
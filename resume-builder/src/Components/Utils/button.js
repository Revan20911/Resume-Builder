import React from "react";
import styled, {css} from "styled-components";

const Button = ({text, onClick}) => {
    return(

        <ButtonContainer onClick = {onClick}>
            {text}
        </ButtonContainer>

    );
};

const ButtonContainer = styled.button 
`padding: 10px 20px;
 height: 30px;
 width: fit-content;
`;

export default Button;
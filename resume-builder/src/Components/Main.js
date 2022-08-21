import React from "react";
import styled from "styled-components";
import Button from "./Utils/button";
import EntryForm from "./Forms/EntryForm";

const Main = () => {
    return(
    <MainWrapper>
        <EntryForm>

        </EntryForm>
    </MainWrapper>

    );  
};

const MainWrapper = styled.div
`
margin: 0 auto;
display: flex;
height: 900px;
width: 900px;
background-color: #ccc;
`;

export default Main;
import React from "react";
import styled from "styled-components";
import EntryForm from "./Forms/EntryForm";

const Main = () => {
    return(
    <MainWrapper>
        <EntryForm />
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
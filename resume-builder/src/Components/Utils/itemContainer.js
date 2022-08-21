import React from "react";
import styled from "styled-components";

const itemContainer = ({title, content}) => {
    return(
        <itemContainerWrapper>
            <Title>{title}</Title>
            <Content>{content}</Content>
        </itemContainerWrapper>
    );
};

const Content = styled.div
`display: block;
 margin: 0 auto;
`;
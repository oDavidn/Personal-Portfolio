import React from "react";
import MainBodyStyled from "./mainBody.styled";
import IntroductionStyled from "./sections/introduction/introduction.styled";
import Introduction from "./sections/introduction/introduction";
import styled from "styled-components";
const MarginAuto = styled.div`margin: auto`

const MainBody = () =>
{
    return <MainBodyStyled>
            <MarginAuto>
            <Introduction/></MarginAuto>
            </MainBodyStyled>
}

export default MainBody
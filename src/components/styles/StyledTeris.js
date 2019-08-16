import styled from "styled-components";

import bgImage from "../../img/giphy.gif";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  background-position: center;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;

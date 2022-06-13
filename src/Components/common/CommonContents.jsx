import React from "react";
import styled from "styled-components";
import CommonCont from "./CommonCont";

const ContentsWrapper = styled(CommonCont)`
  flex-direction: column;
  align-items: flex-start;
  height: 200vh;
  padding: 150px 0 70px;
`;

const ContentsTitle = styled.h1`
  font-size: 60px;
  line-height: 65px;
  font-weight: 700;
`;

const ContentsDescription = styled.p`
  font-size: 24px;
  font-weight: 300;
  color: #6d6d6d;
  margin-top: 30px;
`;

const Contents = styled.p`
  font-size: 17px;
  line-height: 1.7;
  margin-top: 30px;
`;

const CommonContents = ({ title, description, contents }) => {
  return (
    <ContentsWrapper>
      <ContentsTitle>{title}</ContentsTitle>
      <ContentsDescription>{description}</ContentsDescription>
      <Contents>{contents}</Contents>
    </ContentsWrapper>
  );
};

export default CommonContents;

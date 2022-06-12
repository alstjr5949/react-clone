import { Link } from "react-router-dom";
import styled from "styled-components";
import CommonCont from "../Components/common/CommonCont";

const HomeHeaderWrapper = styled(CommonCont)`
  flex-direction: column;
  align-items: center;
  padding: 80px 0 70px;
`;

const HomeHeader = styled.header`
  width: 100%;
  background-color: #282c34;
`;

const HomeHeaderTitle = styled.h1`
  font-size: 45px;
  font-weight: 900;
  color: #61dafb;
`;

const HomeHeaderDescription = styled.p`
  padding-top: 15px;
  font-size: 24px;
  font-weight: 200;
  color: #fff;
`;

const LinkBtnCont = styled.div`
  padding-top: 40px;
`;

const StartBtn = styled.button`
  padding: 10px 25px;
  background-color: #61dafb;
  transition: all 0.3s linear;
  font-size: 18px;
  &:hover {
    background-color: #fff;
  }
`;

const TutorialBtn = styled.button`
  padding: 10px 25px;
  background-color: transparent;
  color: #61dafb;
  transition: all 0.3s linear;
  font-size: 18px;
  &:hover {
    color: #fff;
  }
`;

const Home = () => {
  return (
    <>
      <HomeHeader>
        <HomeHeaderWrapper>
          <HomeHeaderTitle>React</HomeHeaderTitle>
          <HomeHeaderDescription>
            사용자 인터페이스를 만들기 위한 JavaScript 라이브러리
          </HomeHeaderDescription>
          <LinkBtnCont>
            <StartBtn>
              <Link to="/document">시작하기</Link>
            </StartBtn>
            <TutorialBtn>
              <Link to="/tutorial">자습서 읽어보기 &gt;</Link>
            </TutorialBtn>
          </LinkBtnCont>
        </HomeHeaderWrapper>
      </HomeHeader>
    </>
  );
};

export default Home;

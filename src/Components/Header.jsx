import reactIcon from "../imgs/react-icon.svg";
import styled from "styled-components";
import { Link, useMatch } from "react-router-dom";
import CommonCont from "./common/CommonCont";

const NavHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #20232a;
`;

const HeaderWrapper = styled(CommonCont)`
  height: 60px;
  justify-content: space-between;
  align-items: center;
`;

const HomeLogo = styled(Link)`
  width: 140px;
  display: flex;
  align-items: center;
  color: #61dafb;
  font-size: 20px;
  font-weight: 700;
  &::before {
    content: "";
    width: 26px;
    height: 24px;
    display: block;
    background-image: url(${reactIcon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 10px;
    margin-top: -4px;
  }
`;

const Nav = styled.nav`
  width: 500px;
  display: flex;
  font-weight: 300;
  color: #888;
`;

const NavListBox = styled.ul`
  display: flex;
`;

const NavList = styled.li`
  padding: 22px 10px;
  position: relative;
`;

const StyledLink = styled(Link)`
  height: 100px;
  padding-top: 1px;
  color: #61dafb;
  &::before {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0px;
    left: 0;
    background-color: #61dafb;
  }
`;

const SearchIcon = styled.button`
  width: 40px;
  border: none;
  color: #fff;
  background-color: transparent;
`;

const RemainBtnCont = styled.div`
  width: 280px;
  display: flex;
  justify-content: space-between;
  color: #fff;
`;

const VersionText = styled.a``;

const Lang = styled.a``;

const Github = styled.a``;

const Header = () => {
  const documentMatch = useMatch("/document");
  const tutorialMatch = useMatch("/tutorial");
  const blogMatch = useMatch("/blog");
  const communityMatch = useMatch("/community");
  return (
    <NavHeader>
      <HeaderWrapper>
        <HomeLogo to="/">React</HomeLogo>
        <Nav>
          <NavListBox>
            <NavList>
              {documentMatch ? (
                <StyledLink to="/document">문서</StyledLink>
              ) : (
                <Link to="/document">문서</Link>
              )}
            </NavList>
            <NavList>
              {tutorialMatch ? (
                <StyledLink to="/tutorial">자습서</StyledLink>
              ) : (
                <Link to="/tutorial">자습서</Link>
              )}
            </NavList>
            <NavList>
              {blogMatch ? (
                <StyledLink to="/blog">블로그</StyledLink>
              ) : (
                <Link to="/blog">블로그</Link>
              )}
            </NavList>
            <NavList>
              {communityMatch ? (
                <StyledLink to="/community">커뮤니티</StyledLink>
              ) : (
                <Link to="/community">커뮤니티</Link>
              )}
            </NavList>
          </NavListBox>
        </Nav>
        <SearchIcon>검색</SearchIcon>
        <RemainBtnCont>
          <VersionText>v18.0.0</VersionText>
          <Lang>Languages</Lang>
          <Github>Github</Github>
        </RemainBtnCont>
      </HeaderWrapper>
    </NavHeader>
  );
};

export default Header;

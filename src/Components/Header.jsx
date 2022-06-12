import reactIcon from "../imgs/react-icon.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CommonCont from "./common/CommonCont";

const StyledHeader = styled.header`
  width: 100%;
  background-color: #20232a;
`;

const HomeLogo = styled.h1`
  display: flex;
  align-items: center;
  color: #61dafb;
  font-size: 20px;
  font-weight: 700;
  &::before {
    content: "";
    width: 22px;
    height: 20px;
    display: block;
    background-image: url(${reactIcon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 10px;
  }
`;

const Nav = styled.nav``;

const NavListBox = styled.ul``;

const NavList = styled.li``;

const SearchIcon = styled.button``;

const VersionText = styled.p``;

const Lang = styled.p``;

const Header = () => {
  return (
    <StyledHeader>
      <CommonCont>
        <HomeLogo>React</HomeLogo>
        <Nav>
          <NavListBox>
            <NavList>
              <Link to="/document">문서</Link>
            </NavList>
            <NavList>
              <Link to="/tutorial">자습서</Link>
            </NavList>
            <NavList>
              <Link to="/blog">블로그</Link>
            </NavList>
            <NavList>
              <Link to="/community">커뮤니티</Link>
            </NavList>
          </NavListBox>
        </Nav>
        <SearchIcon>검색</SearchIcon>
        <VersionText>v18.0.0</VersionText>
        <Lang>Languages</Lang>
      </CommonCont>
    </StyledHeader>
  );
};

export default Header;

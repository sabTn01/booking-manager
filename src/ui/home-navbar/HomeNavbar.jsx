import { IconContext } from "react-icons/lib";
import styled from "styled-components";
import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";
import HomeContainer from "../HomeContainer";
import { FaGithub } from "react-icons/fa";
import ButtonIcon from "../ButtonIcon";

export const Nav = styled.nav`
  background: #101522;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(HomeContainer)`
  display: flex;
  justify-content: space-between;
  align-items: left;
  height: 80px;

  ${HomeContainer}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

function HomeNavbar() {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              SABER
            </NavLogo>
            <ButtonIcon size="xlarge">
              <a
                href="https://github.com/sabTn01/booking-manager"
                target="_blank"
              >
                <FaGithub />
              </a>
            </ButtonIcon>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default HomeNavbar;

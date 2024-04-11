import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";
import { Link } from "react-router-dom";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";
  return (
    <StyledLogo>
      <Link to="/">
        <Img src={src} alt="Logo" />
      </Link>
    </StyledLogo>
  );
}

export default Logo;

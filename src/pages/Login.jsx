import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";
import { FaGithub } from "react-icons/fa";
import ButtonIcon from "../ui/ButtonIcon";
import CredentialsBox from "../ui/CredentialsBox";

const LoginLayout = styled.main`
  min-height: 100vh;
  width: auto;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  return (
    <LoginLayout>
      <ButtonIcon>
        <a
          href="https://github.com/sabTn01/booking-manager"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </ButtonIcon>

      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <CredentialsBox />
      <LoginForm></LoginForm>
    </LoginLayout>
  );
}

export default Login;

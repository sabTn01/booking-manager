import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";
import CredentialsBox from "../ui/CredentialsBox";

const LoginLayout = styled.main`
  max-height: 100vh;
  width: auto;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
  margin-top: 100px;
`;

function Login() {
  return (
    <LoginLayout>
      <Heading as="h4">Log in to your account</Heading>
      <CredentialsBox />
      <LoginForm></LoginForm>
    </LoginLayout>
  );
}

export default Login;

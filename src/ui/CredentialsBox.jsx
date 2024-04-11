import styled from "styled-components";

const CredentialBox = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #f9f9f9;
  border: 2px solid #0077cc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & h1 {
    font-size: 18px;
    color: #333;
    margin: 0 0 10px 0;
  }
`;

function CredentialsBox() {
  return (
    <CredentialBox>
      <h1>Use those credentials for demo purposes.</h1>
      <p>Email: admin@bm.ca </p>
      <p>Password: 123456789</p>
    </CredentialBox>
  );
}

export default CredentialsBox;

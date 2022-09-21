import styled from "styled-components";

export const SignUp = styled.div`
  width: 340px;
  height: 640px;
  display: flex;
  flex-direction: column;
`;
export const NavBar = styled.div`
  height: 2em;
  margin: 0 0 24px;
  padding: 0 0 10px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #fff;
  button{
    width: 2em;
    border-radius: 50%;
    border: none;
    margin: 10px 321px 0 16px;
  object-fit: contain;
  }
`;
export const ArrowBack = styled.img`
  
`;

export const Logo = styled.img`
  margin: 0 128px;
  width: 7em;
  object-fit: contain;
`;

export const Text = styled.h1`
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
`;

export const Tittle = styled.div`
  height: 1em;
  margin: 16px 0 0;
  padding: 12px 32px;
`;

export const FormContainer = styled.form`
  margin: 0 1em;
  legend{
    font-family: Roboto;
  width: 6em;
  font-size: 12px;
  letter-spacing: -0.29px;
  color: #d0d0d0;
  }
  fieldset{
  height: 1.7em;
  padding: 1em 0.6em;
  border-radius: 4px;
  border: solid 1px #d0d0d0;
  margin-bottom: 1em;
  }
`;

export const Rectangle = styled.fieldset`
  height: 1.7em;
  padding: 1em 0.6em;
  border-radius: 4px;
  border: solid 1px #d0d0d0;
  margin-bottom: 1em;
`;

export const InputStyled = styled.input`
  width: 19em;
  height: 1em;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  letter-spacing: -0.39px;
  border: none;
  outline: none;

`;

export const Legend = styled.legend`
  font-family: Roboto;
  width: 6em;
  font-size: 12px;
  letter-spacing: -0.29px;
  color: #d0d0d0;
`;

export const ButtonSubmit = styled.button`
  margin-top: 1em;
  width: 24em;
  padding: 0.8em;
  border-radius: 4px;
  border: none;
  letter-spacing: -0.39px;
  background-color: #5cb646;
  cursor: pointer;
  p {
    text-align: center;
    font-family: Roboto;
    font-size: 16px;
  }
`;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as RoutePages from "../../routes/coodinator";
import useForm from "../../hooks/useForm";
import logo from "../../images/logo-future-eats/logo-future-eats-invert.png";
import arrowBack from "../.././images/arrowBack/back.png";
//import { cpf } from "cpf-cnpj-validator";
import {
  SignAll as SignUp,
  Logo,
  Tittle,
  Text,
  ArrowBack,
  NavBar,
  FormContainer,
  ButtonSubmit,
} from "../../components/styled-containers";
import { EmailInput } from "../../components/inputs/email";
import { NameInput } from "../../components/inputs/name";
import { CpfInput } from "../../components/inputs/cpf";
import { PasswordInput } from "../../components/inputs/password";
import { ConfirmPasswordInput } from "../../components/inputs/confirmPassword";

function Registration() {
  const navigate = useNavigate();
  const [form, onChange, clearInputs] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const [emailValid, setEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [cpfValid, setCpfValid] = useState(true);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setEmailValid(/[a-zA-Z)-9]+@[a-z]{3}.[a-z]?/.test(form.email));
    setIsPasswordValid(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(form.password)
    );
    setCpfValid(/\d{3}\.\d{3}\.\d{3}-\d{2}/.test(form.cpf));
  };

  return (
    <SignUp>
      <NavBar>
        <button
          onClick={() => {
            RoutePages.returnToLastPage(navigate);
          }}
        >
          <ArrowBack src={arrowBack} />
        </button>
      </NavBar>
      <Logo src={logo} />
      <Tittle>
        <Text>Cadastrar</Text>
      </Tittle>

      {/* Formulario */}
      <FormContainer onSubmit={onSubmit}>
        <NameInput value={form.name} onChange={onChange} />
        <EmailInput
          isValid={emailValid}
          value={form.email}
          onChange={onChange}
        />
        <CpfInput isValid={cpfValid} value={form.cpf} onChange={onChange} />
        <PasswordInput
          value={form.password}
          onChange={onChange}
          isValid={isPasswordValid}
        />
        <ConfirmPasswordInput
          value={form.password}
          onChange={onChange}
          isValid={isPasswordValid}
        
        />

        <ButtonSubmit>
          <p>Criar</p>
        </ButtonSubmit>
      </FormContainer>
    </SignUp>
  );
}

export default Registration;

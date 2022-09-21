import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as RoutePages from "../../routes/coodinator";
import useForm from "../../hooks/useForm";
import logo from "../../images/logo-future-eats/logo-future-eats-invert.png";
import arrowBack from "../.././images/arrowBack/back.png";
import viewPass from "../../images/password-view/senha-2.png";
import noViewPass from "../../images/password-no-view/senha.png";

import {
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
} from "@chakra-ui/react";
import {
  SignUp,
  Logo,
  Tittle,
  Text,
  ArrowBack,
  NavBar,
  Rectangle,
  FormContainer,
  Legend,
  InputStyled,
  ButtonSubmit,
} from "./styled";

function Registration() {
  const navigate = useNavigate();
  const [form, onChange, clearInputs] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [emailValid, setEmailValid] = useState(true)

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form)
    setEmailValid(/[a-zA-Z)-9]+@[a-z]{3}.[a-z]?/.test(form.email))

  }
  const onClickShowPassword = () => {
    setShowPassword(!showPassword)
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
        <FormControl isRequired>
          <fieldset>
            <FormLabel as="legend">Nome*</FormLabel>
            <Input 
            name="name"
            value={form.name} 
            onChange={onChange} />
          </fieldset>
        </FormControl>
        <FormControl 
          isInvalid={!emailValid}>
          <fieldset>
            <FormLabel 
            as="legend">E-mail*</FormLabel>
            <Input 
            name="email"
            value={form.email}
            
             onChange={onChange} />
             {!emailValid ? (
              <FormErrorMessage as="p">Email inválido.</FormErrorMessage>
            ) : undefined}
          </fieldset>
        </FormControl>
        <FormControl isRequired>
          <fieldset>
            <legend>CPF*</legend>
            <input
              name="cpf"
              value={form.cpf}
              onChange={onChange}
              type="text"
              pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
              placeholder="xxx.xxx.xxx-xx"

            />
          </fieldset>
        </FormControl>
        <fieldset>
          <legend>Senha*</legend>
          <InputGroup size="md">
            <Input
              name="password"
              value={form.password}
              onChange={onChange}
              pr="5em"
              type={showPassword ? "text" : "password"}
            />
            <InputRightElement width="4.5em">
            <Button h="1.75rem" size="sm" onClick={onClickShowPassword}>
                {showPassword ?  <img src={viewPass}/> : <img src={noViewPass}/>}
              </Button>
            </InputRightElement>
          </InputGroup>
        </fieldset>
        <fieldset>
          <legend>Confirmar*</legend>
          <InputGroup 
          
          size="md">
            <Input
              value={form.password}
              onChange={onChange}
              pr="5em"
              type={showPassword ? "text" : "password"}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" 
              title="A senha deve conter 6 ou mais caracteres, pelo menos 1 letra minúscula, pelo menos 1 maiúscula e números" 
              
              required
            />
            <InputRightElement width="4.5em">
              <Button h="1.75rem" size="sm" onClick={onClickShowPassword}>
                {showPassword ? <img src={viewPass}/> : <img src={noViewPass}/>}
              </Button>
            </InputRightElement>
          </InputGroup>
        </fieldset>
        <ButtonSubmit type="submit">
          <p>Criar</p>
        </ButtonSubmit>
      </FormContainer>
    </SignUp>
  );
}

export default Registration;

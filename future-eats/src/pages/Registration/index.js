import React from "react";
import logo from "../../images/logo-future-eats/logo-future-eats-invert.png";
import arrowBack from "../.././images/arrowBack/back.png";
import viewPass from "../../images/password-view/senha-2.png"
import noViewPass from "../../images/password-no-view/senha.png"
import {
  SignUp,
  Logo,
  Tittle,
  Text,
  ArrowBack,
  NavBar,
  Rectangle,
  Form,
  Legend,
  Input,
  Button,
  ViewPass,
  NoViewPass,
} from "./styled";

function Registration() {
  return (
    <SignUp>
      <NavBar>
        <ArrowBack src={arrowBack} />
      </NavBar>
      <Logo src={logo} />
      <Tittle>
        <Text>Cadastrar</Text>
      </Tittle>
      <Form>
        <Rectangle>
          <Legend htmlFor="name">Nome*</Legend>
          <Input name="name" />
        </Rectangle>
        <Rectangle>
          <Legend htmlFor="email">E-mail*</Legend>
          <Input name="email" />
        </Rectangle>
        <Rectangle>
          <Legend htmlFor="cpf">CPF*</Legend>
          <Input name="cpf" />
        </Rectangle>
        <Rectangle>
          <Legend htmlFor="password">Senha*</Legend>
          <Input name="password" />
          <ViewPass src={viewPass}/>
          <NoViewPass src={noViewPass}/>
        </Rectangle>
        <Rectangle>
          <Legend htmlFor="passwordConfirm">Confirmar*</Legend>
          <Input name="passwordConfirm" />
          <ViewPass src={viewPass}/>
          <NoViewPass src={noViewPass}/>
        </Rectangle>

        <Button>
           <p>Criar</p> 
        </Button>
      </Form>
    </SignUp>
  );
}

export default Registration;

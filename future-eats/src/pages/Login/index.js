import React, { useState, useEffect } from 'react';
import TelaInicio from '../../components/inicio';
import {
    Logo,
    Tittle,
    Text,
    FormContainer,
    ButtonSubmit
  } from "../../components/styled-containers";
import { EmailInput } from "../../components/inputs/email";
import { PasswordInput } from "../../components/inputs/password";
import logo from "../../images/logo-future-eats/logo-future-eats-invert.png";


function Login() {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, []);

    return (
        <div>
            {
                loading && <TelaInicio />
            }
            {
                !loading && <p>
                    <Logo src={logo} />
                    <Tittle>
                        <Text>Entrar</Text>
                    </Tittle>
                    <FormContainer onSubmit={onSubmit}>
                        <EmailInput
                            isValid={emailValid}
                            value={form.email}
                            onChange={onChange}
                        />
                        <PasswordInput
                            value={form.password}
                            onChange={onChange}
                            isValid={isPasswordValid}
                        />

                        <ButtonSubmit>
                            <p>Entrar</p>
                        </ButtonSubmit>
                    </FormContainer>
                </p>
            }
        </div>
    )
}

export default Login
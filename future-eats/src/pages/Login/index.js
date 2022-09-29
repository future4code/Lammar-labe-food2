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
import useForm from "../../hooks/useForm";


function Login() {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, []);

    const [form, onChange, clearInputs] = useForm({
        name: "",
        email: ""
    });

    const [emailValid, setEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        setEmailValid(/[a-zA-Z)-9]+@[a-z]{3}.[a-z]?/.test(form.email));
        setIsPasswordValid(
            /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(form.password)
        );
    };

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
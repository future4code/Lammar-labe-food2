import React, { useState } from 'react';
import { Button, useStatStyles } from '@chakra-ui/react'
import useForm from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom';

function Login () {
    const navigate = useNavigate();

    const [ form, onChange, clearInputs ] = useForm({
        email: "",
        password: ""
    });

    const [ isEmailValid, setIsEmailValid ] = useState(true);
    const [ isPasswordValid, setIsPasswordValid] = useState(true);



    return (
        <div>
            <div>
                <form onSubmit={onSubmit}>
                    <EmailInput 
                        value={form.email}
                        onChange={onChange}
                        isValid={isEmailValid}
                    />
                    <PasswordInput 
                        value={form.password}
                        onChange={onChange}
                        isValid={isPasswordValid}
                    />
                    <Button type="submit" variant="button">Entrar</Button>
                    <Button onClick={() => goToSignUpPage(navigate)} type="button" variant="button-cadastro">Não possui cadastro? Clique aqui.</Button>
                </form>
            </div>
        </div>
    )
}

export default Login;
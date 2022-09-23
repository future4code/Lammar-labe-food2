import React from 'react';
import { Button } from '@chakra-ui/react'

function Login () {

    return (
        <div>
            <div>
                <form onSubmit={onSubmit}>
                    <EmailInput 
                        value={form.email}
                        onChange={onChangeInputs}
                        isValid={isEmailValid}
                    />
                    <PasswordInput 
                        value={form.password}
                        onChange={onChangeInputs}
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
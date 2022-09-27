 import React, { useState, useEffect } from 'react';
import TelaInicio from '../../components/inicio';
// import { Button, useStatStyles } from '@chakra-ui/react'
// import useForm from '../../hooks/useForm'
// import { useNavigate } from 'react-router-dom';

// function Login () {
//     const navigate = useNavigate();

//     const [ form, onChange, clearInputs ] = useForm({
//         email: "",
//         password: ""
//     });

//     const [ isEmailValid, setIsEmailValid ] = useState(true);
//     const [ isPasswordValid, setIsPasswordValid] = useState(true);



//     return (
//         <div>
//             <div>
//                 <form onSubmit={onSubmit}>
//                     <EmailInput 
//                         value={form.email}
//                         onChange={onChange}
//                         isValid={isEmailValid}
//                     />
//                     <PasswordInput 
//                         value={form.password}
//                         onChange={onChange}
//                         isValid={isPasswordValid}
//                     />
//                     <Button type="submit" variant="button">Entrar</Button>
//                     <Button onClick={() => goToSignUpPage(navigate)} type="button" variant="button-cadastro">Não possui cadastro? Clique aqui.</Button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Login;

function Login() {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
      }, []);

    return (
        <div>     
        {
            loading && <TelaInicio />
        }
        {
            !loading && <p>Olá mundo</p>
        }
    </div>
    )
}

export default Login
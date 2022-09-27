import styled from 'styled-components';
import { TelaInicial } from './styled';
import logo from '../../images/logo-future-eats-white/logo-future-eats@2x.png'

function TelaInicio() {
    return (
        <TelaInicial>
                <img src={logo} alt="logo future eats" />
        </TelaInicial>
    )
};

export default TelaInicio;
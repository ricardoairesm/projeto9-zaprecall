import { useState } from 'react';
import styled from 'styled-components';
import logo from './assets/img/logo.png'

export default function App(props) {
    const [disabled, setDisabled] = useState("flex");
    return (
        <Corpo>
            <Logo disabled={disabled}>
                <img src={logo} />
            </Logo>
            <Botao onClick = {trocarTela} disabled = {disabled}>Iniciar Recall!</Botao>
        </Corpo>
    )

    function trocarTela() {
        setDisabled("none");
    }
}

const Corpo = styled.div`

box-sizing: border-box;
position: relative;
width: 375px;
height: 667px;
background: #FB6B6B;
border: 1px solid #DBDBDB;

`
const Logo = styled.div`
position: absolute;
width: 136px;
height: 161px;
left:119px;
top:148px;
display: ${props => props.disabled};
`

const Botao = styled.div`
position: absolute;
width: 246px;
height: 54px;
top:411px;
left:64px;
background: #FFFFFF;
border: 1px solid #D70900;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display:${props => props.disabled};
align-items:center;
justify-content:center;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color:#D70900;
`
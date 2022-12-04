import { useState } from 'react';
import styled from 'styled-components';
import TelaInicial from './TelaInicial';
import TelaPerguntas from './TelaPerguntas';

export default function App(props) {
    const [disabled2,setDisabled2] = useState("none");
   
    return (
        <Corpo>
            <TelaInicial mudarDisable = {setDisabled2}></TelaInicial>
            <TelaPerguntas disabled2 = {disabled2}></TelaPerguntas>
        </Corpo>
    )

   
}


const Corpo = styled.div`

box-sizing: border-box;
position: relative;
width: 375px;
height: 667px;
background: #FB6B6B;
border: 1px solid #DBDBDB;
overflow:hidden;
flex-wrap:wrap;

`
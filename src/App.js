import { useState } from 'react';
import styled from 'styled-components';
import TelaInicial from './telaInicial';
import TelaPerguntas from './telaPerguntas';
import cards from './cards';

export default function App(props) {
    
    
   
    return (
        <Corpo>
            <TelaPerguntas cards = {cards}></TelaPerguntas>
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
overflow:auto;
flex-wrap:wrap;


`
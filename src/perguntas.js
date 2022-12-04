import { useState } from 'react';
import styled from 'styled-components';
import play from "./assets/img/seta_play.png";
import virar from "./assets/img/seta_virar.png";

export default function Perguntas(props) {
    const cards = [
        { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
        { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
        { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
        { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
        { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
        { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ];
    const { playGame, clickada, esconderBranco, mostrarPergunta, mostrarResposta, botao } = props



    return (
        <>
            {cards.map((pergunta, index) =>

                <ContainerPerguntas key={pergunta.question} disabled={clickada.includes(pergunta.question)} estado={esconderBranco} estado2={mostrarPergunta} estado3={mostrarResposta}>
                    <h1 >Pergunta {index + 1}</h1>
                    <h2 >{pergunta.question}</h2>
                    <h3 >{pergunta.answer}</h3>
                    <Play disabled = {clickada.includes(pergunta.question)} onClick={() => playGame(pergunta.question)}>
                        <img src={play} />
                    </Play>
                    <Virar>
                        <img src = {virar}/>
                    </Virar>

                </ContainerPerguntas>
            )}
        </>
    )
}

const ContainerPerguntas = styled.button`
all:unset;
display:${props => props.display};
position:relative;
box-sizing:border-box;
width: 300px;
height: 65px;
background: #FFFFFF;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #333333;
margin-bottom: 25px;

&:disabled{
    height:131px;
    background: #FFFFD5;
    font-weight: 400;
    font-size: 18px;
    h1{
    position:absolute;
    top:23px;
    left:15px;
    display:${props => props.estado};
}

h2{
    position:absolute;
    top:23px;
    left:15px;
    display: ${props => props.estado2};
}

h3{
    position:absolute;
    top:23px;
    left:15px;
    display:${props => props.estado3};
}

.Play{
    display:none;
}

.Virar{
    display:flex;
}
    
}

h2{
    display: none;
}

h3{
    display: none
}

h1{
    position:absolute;
    top:23px;
    left:15px;

}






`

const Play = styled.button`
all:unset;
position: absolute;
left:265px;
top:20px;
img{
    width:20px;
    height:23px;
}
&:disabled{
    position:absolute;
    top:105px;
    left:254px;
    img{
        width:30px;
        height:20px;
    }
}

`

const Virar = styled.div`
display:none;
position:absolute;
top:105px;
left:254px;
img{
    width:30px;
    height:20px;
}
`
import { useState } from 'react';
import styled from 'styled-components';
import logo from './assets/img/logo.png';
import play from "./assets/img/seta_play.png";
import virar from "./assets/img/seta_virar.png";
import Perguntas from './perguntas';

export default function TelaPerguntas(props) {
    const { disabled2 } = props;
   
    const [esconderBranco, setEsconderBranco] = useState("column");
    const [mostrarPergunta, setMostrarPergunta] = useState("none");
    const [mostrarResposta, setMostratResposta] = useState("none");
    const [conteudo, setConteudo] = useState("Pergunta ");
    const [height, setHeight] = useState("65px");
    const [clickada, setClickada] = useState([]);
    const [botao, setBotao] = useState(play);

    function playGame(index) {
        setMostrarPergunta("column")
        setClickada([...clickada, index])
        console.log(clickada);
        console.log(index)
        setMostrarPergunta('flex')
        setEsconderBranco("none")
        setBotao(virar)
    }




    return (
        <>
            <Tela disabled2={disabled2}>
                <Logo>
                    <img src={logo}></img>
                    <h1>ZapRecall</h1>
                </Logo>

                <CardsBrancos>
                    <Perguntas  playGame = {playGame} clickada = {clickada}  esconderBranco = {esconderBranco} mostrarPergunta = {mostrarPergunta} mostrarResposta = {mostrarResposta} botao = {botao}>
                    </Perguntas>
                </CardsBrancos>
               
            </Tela>
        </>
    )
}




const Tela = styled.div`
display: ${props => props.disabled2}
`

const Logo = styled.div`
position: absolute;
left:59px;
top:42px;
display: ${props => props.disabled2};

h1{
    position: absolute;
    left:69px;
    top: 6px;
    width: 203.17px;
    height: 44px;
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.012em;
    color: #FFFFFF;
    transform: rotate(0.58deg);
}
img{
    position: absolute;
    width: 52px;
    height: 60px;
    
}
`

const CardsBrancos = styled.div`
position: absolute;
top: 153px;
left: 37px;
display:column;
`

const CardsPerguntas = styled.div`
position: absolute;
top: 153px;
left: 37px;
display:column;
`




const Numeradas = styled.div`
position:relative;
display: ${props => props.display};
box-sizing:border-box;
width: 299px;
height: 131px;
background: #FFFFD5;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
margin-bottom: 25px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
padding-top:18px;
padding-left:15px;

`


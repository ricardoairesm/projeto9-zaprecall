import { useState } from 'react';
import styled from 'styled-components';
import logo from './assets/img/logo.png';
import play from "./assets/img/seta_play.png";
import virar from "./assets/img/seta_virar.png";
import Perguntas from './perguntas';
import ContadorAcertos from './contadordeAcertos';

export default function TelaPerguntas(props) {
    const { cards } = props;
    const [primeiroClick, setPrimeiroClick] = useState([])
    const [segundoClick, setSegundoClick] = useState([])
    const [erradas, setErradas] = useState([])
    const [medias, setMedias] = useState([])
    const [certas, setCertas] = useState([])
    const [contador, setContador] = useState(0)


    function trocarParaPergunta(id) {
        const novoClick = [...primeiroClick, id]
        setPrimeiroClick(novoClick)
        console.log(novoClick)
    }

    function trocarParaResposta(id) {
        const novoSegundoClick = [...segundoClick, id]
        setSegundoClick(novoSegundoClick)
        console.log(novoSegundoClick)
    }
    function resetarResposta(id) {
        const novoClick = [];
        const novoSegundoClick = [];

        for (let i = 0; i < primeiroClick.length; i++) {
            if (primeiroClick[i] != id) {
                novoClick.push(primeiroClick[i]);
            }
        }
        for (let i = 0; i < segundoClick.length; i++) {
            if (segundoClick[i] != id) {
                novoSegundoClick.push(segundoClick[i]);
            }
        }
        console.log(novoClick);
        console.log(novoSegundoClick);
        setPrimeiroClick(novoClick);
        setSegundoClick(novoSegundoClick);

    }
    function naoLembrei(id) {
        console.log(id);
        const novoContador = contador + 1;
        const novaErrada = [...erradas, id]
        resetarResposta(id);
        setErradas(novaErrada);
        setContador(novoContador);
    }

    function quaseLembrei(id) {
        console.log(id);
        const novoContador = contador + 1;
        const novaMedia = [...medias, id]
        resetarResposta(id);
        setMedias(novaMedia);
        setContador(novoContador);
    }

    function zap(id) {
        console.log(id);
        const novoContador = contador + 1;
        const novaCerta = [...certas, id];
        resetarResposta(id);
        setCertas(novaCerta);
        setContador(novoContador);
    }


    return (
        <>
            <Tela >
                <Logo>
                    <img src={logo}></img>
                    <h1>ZapRecall</h1>
                </Logo>

                <ListaPerguntas>
                    {cards.map((cards) => <Perguntas key={cards.id} cards={cards} primeiroClick={primeiroClick} ativarPergunta={trocarParaPergunta} segundoClick={segundoClick} ativarResposta={trocarParaResposta} naoLembrei={naoLembrei} erradas={erradas} medias={medias} quaseLembrei={quaseLembrei} zap = {zap} certas = {certas}></Perguntas>)}
                </ListaPerguntas>
                <ContadorAcertos contador = {contador} cards = {cards}/>

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

const ListaPerguntas = styled.div`
position: absolute;
top: 153px;
left: 37px;
display:column;
padding-bottom:70px;
`




import { useState } from 'react';
import styled from 'styled-components';
import play from "./assets/img/seta_play.png";
import virar from "./assets/img/seta_virar.png";
import erro from "./assets/img/icone_erro.png";
import quase from "./assets/img/icone_quase.png";
import certo from "./assets/img/icone_certo.png";

export default function Perguntas(props) {
    const { id, question, answer } = props.cards
    const { primeiroClick, ativarPergunta, segundoClick, ativarResposta ,naoLembrei,erradas,medias,quaseLembrei, zap, certas, resultado, mudarResultado} = props
    const layout = []

    function alterarResultado(icone){
        const novoResultado = [...resultado, icone];
        mudarResultado(novoResultado);
    }

    if (certas.includes(id)) {
        return (
            <>
            <CaixaBranca data-test = "flashcard" color="#2FBE34" decoration = "line-through">
                <h1 data-test = "flashcard-text">Pergunta {id}</h1>
                <Play>
                    <img data-test="zap-icon" src={certo} />
                </Play>
            </CaixaBranca>
        </>
        )
        
    }
    if (medias.includes(id)) {
        return (
            <>
            <CaixaBranca data-test = "flashcard" color="#FF922E" decoration = "line-through">
                <h1 data-test = "flashcard-text">Pergunta {id}</h1>
                <Play>
                    <img data-test="partial-icon" src={quase} />
                </Play>
            </CaixaBranca>
        </>
        )
        
    }
    if (erradas.includes(id)) {
        return (
            <>
            <CaixaBranca data-test = "flashcard" color="red" decoration = "line-through">
                <h1 data-test = "flashcard-text" >Pergunta {id}</h1>
                <Play>
                    <img data-test="no-icon" src={erro} />
                </Play>
            </CaixaBranca>
        </>
        )
        
    }
    if (segundoClick.includes(id)) {
        return (
            <CaixaPergunta data-test = "flashcard" >
                <h1 data-test = "flashcard-text">{answer}</h1>
                <BotaoVermelho data-test="no-btn" onClick={()=> naoLembrei(id) & alterarResultado(erro)}><p>Não lembrei</p></BotaoVermelho>
                <BotaoAmarelo data-test="partial-btn" onClick={()=>quaseLembrei(id) & alterarResultado(quase)}>Quase não lembrei</BotaoAmarelo>
                <BotaoVerde data-test="zap-btn" onClick={()=>zap(id) & alterarResultado(certo)}>Zap!</BotaoVerde>
            </CaixaPergunta>
        )
        
    }
    if (primeiroClick.includes(id)) {
        return (
            <CaixaPergunta data-test = "flashcard" >
                <h1 data-test = "flashcard-text">{question}</h1>
                <Virar data-test="turn-btn" onClick={()=> ativarResposta(id)}>
                    <img src={virar} />
                </Virar>
            </CaixaPergunta>
        )
    }

    return (
        <>
            <CaixaBranca data-test = "flashcard" color="black" decoration = "none">
                <h1 data-test = "flashcard-text">Pergunta {id}</h1>
                <Play data-test="play-btn" onClick={() => ativarPergunta(id)}>
                    <img src={play} />
                </Play>
            </CaixaBranca>
        </>
    )
}

const CaixaBranca = styled.div`
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
margin-bottom: 25px;
color:${props => props.color};

h1{
    text-decoration-line: ${props=>props.decoration};
    position:absolute;
    top:23px;
    left:15px;
}
`
const CaixaPergunta = styled.div`
position:relative;
box-sizing:border-box;
width: 300px;
height: 150px;
background: #FFFFD5;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 19px;
color: #333333;
margin-bottom: 25px;

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
    width:23px;
    height:23px;
}

`

const Virar = styled.div`
position:absolute;
top:105px;
left:254px;
img{
    width:30px;
    height:20px;
}
`

const BotaoVermelho = styled.button`
all:unset;
position: absolute;
width: 85px;
height: 37px;
bottom:10px;
left:17px;
background: #FF3030;
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
justify-content:center;
color: #FFFFFF;
p{
    width:65px;
    text-align:center;
}

`
const BotaoAmarelo = styled.button`
all:unset;
position: absolute;
width: 85px;
height: 37px;
bottom:10px;
left:110px;
background: #FF922E;;
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
text-align: center;

color: #FFFFFF;
`
const BotaoVerde = styled.button`
all:unset;
position: absolute;
width: 85px;
height: 37px;
bottom:10px;
left:203px;
background: #2FBE34;
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
justify-content:center;

color: #FFFFFF;
`
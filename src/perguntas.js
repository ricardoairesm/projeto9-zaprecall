import { useState } from 'react';
import styled from 'styled-components';
import play from "./assets/img/seta_play.png";
import virar from "./assets/img/seta_virar.png";
import erro from "./assets/img/icone_erro.png";
import quase from "./assets/img/icone_quase.png";
import certo from "./assets/img/icone_certo.png";

export default function Perguntas(props) {
    const { id, question, answer } = props.cards
    const { primeiroClick, ativarPergunta, segundoClick, ativarResposta ,naoLembrei,erradas,medias,quaseLembrei, zap, certas} = props
    const layout = []
    if (certas.includes(id)) {
        return (
            <>
            <CaixaBranca color="#2FBE34" decoration = "line-through">
                <h1>Pergunta {id}</h1>
                <Play>
                    <img src={certo} />
                </Play>
            </CaixaBranca>
        </>
        )
        
    }
    if (medias.includes(id)) {
        return (
            <>
            <CaixaBranca color="#FF922E" decoration = "line-through">
                <h1>Pergunta {id}</h1>
                <Play>
                    <img src={quase} />
                </Play>
            </CaixaBranca>
        </>
        )
        
    }
    if (erradas.includes(id)) {
        return (
            <>
            <CaixaBranca color="red" decoration = "line-through">
                <h1>Pergunta {id}</h1>
                <Play>
                    <img src={erro} />
                </Play>
            </CaixaBranca>
        </>
        )
        
    }
    if (segundoClick.includes(id)) {
        return (
            <CaixaPergunta>
                <h1>{answer}</h1>
                <BotaoVermelho onClick={()=>naoLembrei(id)}><p>Não lembrei</p></BotaoVermelho>
                <BotaoAmarelo onClick={()=>quaseLembrei(id)}>Quase não lembrei</BotaoAmarelo>
                <BotaoVerde onClick={()=>zap(id)}>Zap!</BotaoVerde>
            </CaixaPergunta>
        )
        
    }
    if (primeiroClick.includes(id)) {
        return (
            <CaixaPergunta>
                <h1>{question}</h1>
                <Virar onClick={()=> ativarResposta(id)}>
                    <img src={virar} />
                </Virar>
            </CaixaPergunta>
        )
    }

    return (
        <>
            <CaixaBranca color="black" decoration = "none">
                <h1>Pergunta {id}</h1>
                <Play onClick={() => ativarPergunta(id)}>
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
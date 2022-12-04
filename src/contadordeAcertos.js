import styled from "styled-components";

export default function ContadorAcertos(props) {
    const {contador, cards} = props
    return (
        <Contador>{contador}/{cards.length} CONCLUÍDOS</Contador>
    )
}

const Contador = styled.div`
position: fixed;
width: 375px;
height: 70px;
top:597px;
left:0px;
display:flex;
align-items:center;
justify-content:center;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #333333;

background: #FFFFFF;
box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
`
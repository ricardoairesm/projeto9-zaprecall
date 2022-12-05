import styled from "styled-components";

export default function ContadorAcertos(props) {
    const {contador, cards, resultado} = props;
    
    return (
        <>
        <Contador data-test="footer"><h1>{contador}/{cards.length} CONCLUÍDOS</h1></Contador>
        <Icones><div>{resultado.map((imagem,index)=><img key = {index} src ={imagem}/>)}</div></Icones>
        </>
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
h1{
    position:fixed;
    top:606px;
    left:115px;
}

background: #FFFFFF;
box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
`

const Icones = styled.div`
position:fixed;
top:634px;
width:375px;
left:0px;
div{
    display:flex;
    justify-content:center;
}
img{
    margin-right:5px;
}
`
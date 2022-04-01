import React from 'react'
import styled from 'styled-components'

const CaixaFooter = styled.div`
display:flex;
border: 7px solid lightblue;
box-shadow: 0 0 1em lightblue;
background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
justify-content: space-around;
    img:hover{
        width: 80px;
    }

`
export default class Footer extends React.Component {


    render() {
        return (
            <CaixaFooter>
                <p> &#169; 2022 Christian Cardeal, Karen Kubo e Mariana Mendes </p> 
                <a href='mailto:christian-cardeal@hotmail.com'><img src={this.props.mail} alt="email-christian"/></a>
                <a href='mailto:karennckubo@gmail.com'><img src={this.props.mail} alt="email-karen"/></a>
                <a href='mailto:filhatronixmmlima@gmail.com'><img src={this.props.mail} alt="email-mariana"/></a>
            </CaixaFooter>
        )
    }
}
import React from 'react'
import styled from 'styled-components'


    const CaixaHeader = styled.div `
        display:flex;
        justify-content: center;
        border: 7px solid lightblue;
        box-shadow: 0 0 1em lightblue;
        background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
        img {
            width: 10vw;
        }
    `
export default class Header extends React.Component {
    

  render() {
    return (
      <CaixaHeader>
        <img src={this.props.imagem} alt='logo'/>
        <p>Lab E-Commerce</p>
      </CaixaHeader>
    )
  }
}

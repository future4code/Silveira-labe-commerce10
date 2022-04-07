
import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
width: 15vw;
`


export class Filtro extends React.Component {
  render() {


  return (
      < div >
    <h2>Filtros</h2>
        Valor Mínimo:
        <br />
        <Input
        type="number"
          value={this.props.minimo}
          onChange={this.props.onChangeMinimo}
          placeholder={"0..."}
        />
        <br />
        <br />
        Valor Máximo:
        <br />
        <Input
        type="number"
          value={this.props.maximo}
          onChange={this.props.onChangeMaximo}
          placeholder={"1000..."}
        />
        <br />
        <br />
        Busca por nome:
        <br />
        <Input
          value={this.props.busca}
          onChange={this.props.onChangeBusca}
          placeholder={"Digite o produto..."}
        />
      {this.props.sortProduto} 
    
      </div >
  )}
}

export default Filtro;

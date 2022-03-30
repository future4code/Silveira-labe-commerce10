import styled from 'styled-components'
import React from 'react'


const Centering = styled.div`	
	text-align: center;
`

export default class Filtro extends React.Component {
    

    onChangeInput = (event) => {
        this.setState({novoValor: event.target.value})
      }

      onChangeFilter = (event) => {
        this.setState({filtro: event.target.value})
      }





    render() {
  return (
    <div>
      <Centering>
      <h2>Filtros</h2>
      <form>
        <label>
        Valor Mínimo:
        <br/>
        <input   
     value={this.state.novoValor}
     onChange={this.onChangeFilter}
     placeholder={"0..."}
/>
    <br/>
        <br/>
        </label>
        <label>
        Valor Máximo:
        <br/>
        <input   
     value={this.state.novoValor}
     onChange={this.onChangeFilter}
     placeholder={"1000..."}
/>
        </label>
        <br/>
        <br/>
        <label>
        Busca por nome:
        <br/>
        <input   
     value={this.state.novoValor}
     onChange={this.onChangeFilter}
     placeholder={"Digite o produto..."}
/>
         </label>
</form>  
</Centering>    
    </div>
  );
}
}


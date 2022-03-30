import React from "react"
import styled from 'styled-components'
import Produtos from "./Produtos"

const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
 `


const Informação = styled.div` 
  p {
      text-align: center;
  }
`





export default class Carrinho extends React.Component {

removeOnclick =  (event) => {
    
  }


    render() {      
    return (
        <div>
            <ContainerCard>
                <h3>Carrinho:</h3>
                    <div>
                         {props.map((produto) => {
                                return (
                                    <Informação>
                                    <p>{produto.quantidadedeprodutos}</p>
                                    <p>{produto.name}x</p>
                                    <button onClick={this.removeOnclick}> Remove </button>
                                    </Informação>
                                    )
                                })}
                    </div>
                <p>Valor: R$</p>
            </ContainerCard>
        </div>
        )
   }
}


import React from "react"
import styled from 'styled-components'

const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 20vw;
    border: 2px ridge;
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);    

 `

export default class Carrinho extends React.Component {



    render() {
            const compraTotal = (this.props.carrinho).reduce((acumulador, produto) => acumulador+produto.value*produto.quantidade, 0)
        return (
           
                <ContainerCard>
                    <h3>Carrinho:</h3>
                    {this.props.mapdositens}
                    <p>Valor: R$ {compraTotal}</p>
                </ContainerCard>
            
        )
    }
}


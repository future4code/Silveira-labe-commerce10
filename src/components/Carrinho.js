import React from "react"
import styled from 'styled-components'

const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 30vw;
 `

export default class Carrinho extends React.Component {



    render() {
        return (
           
                <ContainerCard>
                    <h3>Carrinho:</h3>

                    {this.props.mapdositens}

                    <p>Valor: R$ {this.props.compraTotal}</p>
                </ContainerCard>
            
        )
    }
}


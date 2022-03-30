import React from 'react'
import styled from 'styled-components'

const ContainerProdutos = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
`
const ListaProdutos = styled.div`
    display: flex;
    flex-wrap: wrap;
    border: 2px solid black;
`

const Itens = styled.div `
    margin: 10px;
    justify-content: center;
    border: 3px solid pink;
        display: flex;
        flex-direction: column;
        img{ 
            width: 20vw;
        }
`

const Span = styled.span`
    text-align: center;
`


export default class Produtos extends React.Component {
    // state = {
    //     produto: [
    //         {
    //             id: 1,
    //             name: "Produto 1",
    //             value: 500.00,
    //             imageUrl: "https://picsum.photos/200",
    //         },
    //         {
    //             id: 2,
    //             name: "Produto 2",
    //             value: 100.00,
    //             imageUrl: "https://picsum.photos/201",
    //         },
    //         {
    //             id: 3,
    //             name: "Produto 3",
    //             value: 500.00,
    //             imageUrl: "https://picsum.photos/199",
    //         },
    //         {
    //             id: 4,
    //             name: "Produto 4",
    //             value: 600.00,
    //             imageUrl: "https://picsum.photos/202",
    //         }
    //     ],
    //     quantidadedeprodutos: '',

    // }


    render() {
        console.log(this.props)

        const listaDeProdutos = this.props.produto.map((prod) => {
            return (
                <Itens>
                    <img src={prod.imageUrl} alt="imagem"/>
                    <Span><strong>{prod.name}</strong></Span>
                    <Span>R$ {prod.value}</Span>
                    <button onClick={() => { }}>Adicionar ao carrinho</button>
                </Itens>
            )
        })

        return (
            <>
            <ContainerProdutos>
                <Span>Quantidade de produtos: {this.props.produto.length}</Span>
                <div>
                    <Span>Ordenação crescente:</Span>
                        <select>
                            <option onClick={this.props.ordenarC} value="crescente">Crescente</option>
                            <option onClick={this.props.ordenarD} value="decrescente">Decrescente</option>
                        </select>
                    <button onClick={this.props.ordenarC}>lalala</button>
                    <button onClick={this.props.ordenarD}>lelele</button>
                </div>
            </ContainerProdutos>
            <ListaProdutos>
                    {listaDeProdutos}
            </ListaProdutos>
            
            </>
        )
    }
}
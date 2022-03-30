import React from 'react'
import styled from 'styled-components'
// import Filtro from './components/Filtro'
// import Carrinho from './components/Carrinho'
import Produtos from './components/Produtos'
// import Grid from './components/Grid'


const MainContainer = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    box-sizing: border-box;

`

const ContainerFiltro = styled.div`
    width: 250px;
    border: 2px solid;
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    margin: auto;
    padding: 30ppx;    
    align-items: center;
    
`

const ContainerProdutos = styled.div`

`

const ContainerCarrinho = styled.div`

`

export class App extends React.Component {
  state = {
    minimo: 0,
    maximo: 1000,
    busca: '',
    produto: [
      {
        id: 1,
        name: "Produto 1",
        value: 500.00,
        imageUrl: "https://picsum.photos/200",
      },
      {
        id: 2,
        name: "Produto 2",
        value: 100.00,
        imageUrl: "https://picsum.photos/201",
      },
      {
        id: 3,
        name: "Produto 3",
        value: 500.00,
        imageUrl: "https://picsum.photos/199",
      },
      {
        id: 4,
        name: "Produto 4",
        value: 600.00,
        imageUrl: "https://picsum.photos/202",
      }
    ],
    quantidadedeprodutos: ''
  }
                 


  ordenarC = () => {
    const ordenarArray = this.valoresArray.map((prod) => {
      return prod.sort((a, b) => a - b)
    })
    this.setState({ produto: ordenarArray })
    console.log('cresce C')
  }

  ordenarD = () => {
    const ordenarArrayD = this.valoresArray.map((prod) => {
      return prod.sort((a, b) => a - b)
    })
    this.setState({ produto: ordenarArrayD })
    console.log('descresce D')
  }

  render() {
    const valoresArray = this.state.produto.map ((prod) => {
      const arrayValores = [];
      arrayValores.push(prod.value)
      return arrayValores;
    })

    return (

      <MainContainer>
        {/* <ContainerFiltro>
          <Filtro> 
          </Filtro>
          </ContainerFiltro> */}

        <ContainerProdutos>
          <Produtos ordenarC={this.ordenarC} ordenarD={this.ordenarD} produto={this.state.produto} />



        </ContainerProdutos>


      </MainContainer>

    );
  }
}

export default App;
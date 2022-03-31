import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
// import Filtro from './components/Filtro'
// import Carrinho from './components/Carrinho'
import Produtos from './components/Produtos'
// import Grid from './components/Grid'

const GlobalStyle = createGlobalStyle`
   box-sizing: border-box;
`

const MainContainer = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    display:flex;

`

const ContainerFiltro = styled.div`
    width: 15vw;
    height:100vh; 
    border: 2px solid;
    background-image: linear-gradient(120deg, #efd3e9 0%, #ca6db0 100%);
    margin: auto;
    padding: 10px;    
    align-items: center;
    text-align: center;
    
`

const ContainerProdutos = styled.div`

`

const ContainerCarrinho = styled.div`

`

export class App extends React.Component {

  // ESTADOS INÍCIO
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
        value: 400.00,
        imageUrl: "https://picsum.photos/199",
      },
      {
        id: 4,
        name: "Produto 4",
        value: 600.00,
        imageUrl: "https://picsum.photos/202",
      },
      {
        id: 5,
        name: "Produto 5",
        value: 180.00,
        imageUrl: "https://picsum.photos/198",
      },
      {
        id: 6,
        name: "Produto 6",
        value: 80.00,
        imageUrl: "https://picsum.photos/197",
      },
      {
        id: 7,
        name: "Produto 7",
        value: 50.00,
        imageUrl: "https://picsum.photos/203",
      },
      {
        id: 8,
        name: "Produto 8",
        value: 90.00,
        imageUrl: "https://picsum.photos/204",
      },
    ],
    quantidadedeprodutos: '',
    valorCompra: ''
  }
  // ESTADOS FIM


  // FUNÇÕES FILTRO INÍCIO  
  onChangeMinimo = (event) => {
    this.setState({minimo: event.target.value })
  }

  onChangeMaximo = (event) => {
    this.setState({maximo: event.target.value })
  }

  onChangeBusca = (event) => {
    this.setState({busca: event.target.value })
  }
  // FUNÇÕES FILTRO FIM


  // FUNÇÕES PRODUTOS INÍCIO
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
    this.setState({ produto: ordenarArrayD.reverse() })
    console.log('descresce D')
  }

  valoresArray = this.state.produto.map((prod) => {
    return prod.value;
  })  

  adicionarCarrinho = () => {
    const pegarValor = this.state.produto.filter((prod) => {
      return prod.value === prod.value
    })
  }

  // FUNÇÕES PRODUTOS FIM

  render() {



    return (
      <>
      <GlobalStyle/>
      <MainContainer> 
        <ContainerFiltro>
          <h2>Filtros</h2>
            Valor Mínimo:
            <br />
            <input
              value={this.state.minimo}
              onChange={this.onChangeMinimo}
              placeholder={"0..."}
            />
            <br />
            <br />
            Valor Máximo:
            <br />
            <input
              value={this.state.maximo}
              onChange={this.onChangeMaximo}
              placeholder={"1000..."}
            />
          <br />
          <br />
            Busca por nome:
            <br />
            <input
              value={this.state.busca}
              onChange={this.onChangeBusca}
              placeholder={"Digite o produto..."}
            />
        </ContainerFiltro>

        <ContainerProdutos>
          <Produtos 
          ordenarC={this.ordenarC} 
          ordenarD={this.ordenarD} 
          produto={this.state.produto}/>
          {/*  Vou colocar aqui as props que terão que ser passadas para "produtos" e "carrinho" vindo da busca:
            min = {this.state.minimo}
            max = {this.state.maximo}
            busc = {this.state.busca}
            Eles entram junto de Ordenar C, Ordenar D etc acima
          Ainda não terminei o vídeo para ver como aplica eles exatamente lá dentro, então volto daqui a pouco */}
        </ContainerProdutos>


      </MainContainer>
      </>
    );
  }
}

export default App;
import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Filtro from './components/Filtro'
import Carrinho from './components/Carrinho'

const GlobalStyle = createGlobalStyle`
   box-sizing: border-box;
`

const MainContainer = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    display: flex;

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
const Produto = styled.div`

`
const ContainerProdutos = styled.div`
    display:flex;
    justify-content: space-between;
`

const ListaProdutos = styled.div`
    display: flex;
    flex-wrap: wrap;
    border: 2px solid black;
`

const Itens = styled.div`
    margin: 10px;
    justify-content: center;
    border: 3px solid pink;
        display: flex;
        flex-direction: column;
        img{ 
            width: 5vw;
        }
`

const Span = styled.span`
    text-align: center;
`

const ContainerCarrinho = styled.div`

`

const Valores = styled.div`

`

const DivDoMap = styled.div`
    display:flex;
`

export class App extends React.Component {

  // ESTADOS INÍCIO
  state = {
    minimo: "",
    maximo: "",
    busca: '',
    produto: [
      {
        id: 1,
        name: "Cachorro",
        value: 500.00,
        imageUrl: "https://picsum.photos/200",
      },
      {
        id: 2,
        name: "Maçã",
        value: 100.00,
        imageUrl: "https://picsum.photos/201",
      },
      {
        id: 3,
        name: "Chocolate",
        value: 400.00,
        imageUrl: "https://picsum.photos/199",
      },
      {
        id: 4,
        name: "Bicicleta",
        value: 600.00,
        imageUrl: "https://picsum.photos/202",
      },
      {
        id: 5,
        name: "Lasanha",
        value: 180.00,
        imageUrl: "https://picsum.photos/198",
      },
      {
        id: 6,
        name: "Video Game",
        value: 80.00,
        imageUrl: "https://picsum.photos/197",
      },
      {
        id: 7,
        name: "Celular",
        value: 50.00,
        imageUrl: "https://picsum.photos/203",
      },
      {
        id: 8,
        name: "Praia",
        value: 90.00,
        imageUrl: "https://picsum.photos/204",
      },
    ],
    valorCompra: '',
    order: '',
    carrinho: [],
  }
  // ESTADOS FIM


  // FUNÇÕES FILTRO INÍCIO  
  onChangeMinimo = (event) => {
    this.setState({ minimo: event.target.value })
  }

  onChangeMaximo = (event) => {
    this.setState({ maximo: event.target.value })
  }

  onChangeBusca = (event) => {
    this.setState({ busca: event.target.value })
  }

  updateOrder = (ev) => {
    this.setState({
      order: ev.target.value
    })
  }
  // FUNÇÕES FILTRO FIM


  // FUNÇÕES CARRINHO INÍCIO
  removeOnclick = (produtoRemover) => {
    const novaListaCarrinho = this.state.carrinho.filter((produto) => {
      return produto.id !== produtoRemover.id
    })
    this.setState({ carrinho: novaListaCarrinho })
  }

  adicionarCarrinho = (produ) => {

    const itensCarrinho = this.state.produto.filter((prod) => {
      if (prod.id === produ.id) {
        return prod;
      } else {
        return false;
      }
    })
    const novoCarrinho = [produ, ... this.state.carrinho]

    this.setState({ carrinho: novoCarrinho })

    let quantidade = 0;
    if (itensCarrinho.length === 0) {
      quantidade++;
    }

  }

  contarIndex = (id) => {
    let count = 0;
    this.state.carrinho.forEach (elemento => {
      if (elemento.id === id) {
        count += 1;
      }
    })
    return count;
  }

  // FUNÇÕES CARRINHO FIM

  render() {

    const mapdositens = this.state.carrinho.map((item) => {
      return (

        <DivDoMap>
          <Valores>
            <p>{this.contarIndex}</p>
          </Valores>
          <Valores>
            <p>{item.name}</p>
          </Valores>
          <Valores>
            <button onClick={this.removeOnclick}>Remover</button>
          </Valores>
        </DivDoMap>

      )
    })

    let produtosfiltrados =
      this.state.produto
        .filter(produto => {
          return produto.name.toLowerCase().includes(this.state.busca.toLowerCase())
        })
        .filter(produto => {
          return this.state.minimo === "" || produto.value >= this.state.minimo
        })
        .filter(produto => {
          return this.state.maximo === "" || produto.value <= this.state.maximo
        })
        .sort((a, b) => {
          if (this.state.order === "cresc") {
            return a.value - b.value
          } else if (this.state.order === "decresc") {
            return b.value - a.value
          }

        })
        .map(produto => {
          return (
            <Itens key={produto.id}>
              <img src={produto.imageUrl} alt="imagem" />
              <Span><strong>{produto.name}</strong></Span>
              <Span>R$ {produto.value}</Span>
              <button onClick={this.adicionarCarrinho}>Adicionar ao carrinho</button>
            </Itens>
          )
        })

    return (
      <>
        <GlobalStyle />
        <MainContainer>
          {/* <ContainerFiltro> */}
          {/* 
          <Filtro
            minimo={this.state.minimo}
            maximo={this.state.maximo}
            busca={this.state.busca}
            onChangeMinimo={this.onChangeMinimo}
            onChangeMaximo={this.onChangeMaximo}
            onChangeBusca={this.onChangeBusca}
            produto={this.state.produto}
            listaDeProdutos={this.listaDeProdutos}

          /> */}
          {/* </ContainerFiltro> */}

          <Produto>

            <ContainerProdutos>
              <Span> Quantidade de produtos: {produtosfiltrados.length} </Span>
              <div>
                <label for="order">Sort by: </label>
                <select
                  name="order"
                  value={this.state.order}
                  onChange={this.updateOrder}
                >
                  <option value={"maisvend"}>Mais Vendidos</option>
                  <option value={"cresc"}>Crescente</option>
                  <option value={"decresc"}>Decrescente</option>

                </select>
              </div>
            </ContainerProdutos>

            <ListaProdutos>

              {produtosfiltrados}

            </ListaProdutos>
          </Produto>

          <Carrinho
            mapdositens={mapdositens}
          />

        </MainContainer>
      </>
    )
  }
}

export default App;
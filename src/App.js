import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Filtro from './components/Filtro'
import Carrinho from './components/Carrinho'
import Header from './components/header'
import Footer from './components/footer'
import Logo from './img/logo.png'
import Email from './img/o-email.png'

const GlobalStyle = createGlobalStyle`
   box-sizing: border-box;
`

const MainContainer = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    display: flex;

`

const ContainerFiltro = styled.div`
    width: 20vw;
    min-height: 100vh;
    border: 2px ridge;
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);    
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
    border: 3px solid lightblue;
        display: flex;
        flex-direction: column;
        img{ 
            justify-self: center;
            width: 16vw;
        }
`

const Span = styled.span`
    text-align: center;
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
        name: "Garrafa",
        value: 500.00,
        imageUrl: "https://picsum.photos/200",
        quantidade: ''
      },
      {
        id: 2,
        name: "Mochila",
        value: 100.00,
        imageUrl: "https://picsum.photos/201",
        quantidade: ''
      },
      {
        id: 3,
        name: "Chocolate",
        value: 400.00,
        imageUrl: "https://picsum.photos/199",
        quantidade: ''
      },
      {
        id: 4,
        name: "Bicicleta",
        value: 600.00,
        imageUrl: "https://picsum.photos/202",
        quantidade: ''
      },
      {
        id: 5,
        name: "Monitor LED",
        value: 180.00,
        imageUrl: "https://picsum.photos/198",
        quantidade: ''
      },
      {
        id: 6,
        name: "Video Game",
        value: 80.00,
        imageUrl: "https://picsum.photos/197",
        quantidade: ''
      },
      {
        id: 7,
        name: "Celular",
        value: 50.00,
        imageUrl: "https://picsum.photos/203",
        quantidade: ''
      },
      {
        id: 8,
        name: "Tenis",
        value: 90.00,
        imageUrl: "https://picsum.photos/204",
        quantidade: ''
      }
    ],
    valorCompra: '',
    order: '',
    carrinho: [],
    

  }
  // ESTADOS FIM

  // LOCAL STORAGE INÍCIO
  componentDidUpdate() {
    localStorage.setItem("cart", JSON.stringify(this.state.carrinho) )
  };

  componentDidMount() {
    const cartString = localStorage.getItem("cart")
    if (cartString) {
      const cartObj = JSON.parse(cartString) 
      this.setState({carrinho: cartObj})
      }
  };
  // LOCAL STORAGE FIM

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
    if (produtoRemover.quantidade <= 1) {
      const novaListaCarrinho = this.state.carrinho.filter((produto) => {
        return produto.id !== produtoRemover.id
      })
      this.setState({ carrinho: novaListaCarrinho })
    } else {
      const novaListaCarrinho = this.state.carrinho.map((produto) => {
        if (produto.id === produtoRemover.id) {
          return {...produto, quantidade:produto.quantidade-1}
        }
        return produto
      })
      this.setState({ carrinho: novaListaCarrinho })
    }  
    
  }

  adicionarCarrinho = (produ) => {
 
    const itensCarrinho = this.state.carrinho.filter((prod) => {
      if (prod.id === produ.id) {
        return prod;
      } else {
        return false;
      }      
    })

    if (itensCarrinho.length === 0) {
      produ.quantidade = 1
      const novoCarrinho = [ ...this.state.carrinho, produ]
      this.setState({
        carrinho: novoCarrinho
      })
    } else {
      const novoCarrinho = this.state.carrinho.map((prod) => {
        if (produ.id === prod.id) {
          return {...prod, quantidade: prod.quantidade + 1}
        } else {
          return prod
        }
      })

      this.setState({
        carrinho: novoCarrinho
      })
    }
    console.log(this.state.carrinho)
  }
  

  // FUNÇÕES CARRINHO FIM

  render() {

    const mapdositens = this.state.carrinho.map((item) => {
      return (

        <DivDoMap key={item.id}>
          <Valores>
            <p>{item.quantidade}x</p>
          </Valores>
          <Valores>
            <p>{item.name}</p>
          </Valores>
          <Valores>
            <p> R$: {item.value*item.quantidade}</p>
          </Valores>
          <Valores>
            <button onClick={() => this.removeOnclick(item)}>Remover</button>
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
              <button onClick={() => this.adicionarCarrinho(produto)}>Adicionar ao carrinho</button>
            </Itens>
          )
        })

    return (
      <>
        <GlobalStyle />
        <Header
        imagem= {Logo}
        />
        <MainContainer>
          <ContainerFiltro> 
          
          <Filtro
            minimo={this.state.minimo}
            maximo={this.state.maximo}
            busca={this.state.busca}
            onChangeMinimo={this.onChangeMinimo}
            onChangeMaximo={this.onChangeMaximo}
            onChangeBusca={this.onChangeBusca}
            produto={this.state.produto}
            listaDeProdutos={this.listaDeProdutos}
          />
          </ContainerFiltro>

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
            carrinho = {this.state.carrinho}
          />

        </MainContainer>
        
        <Footer
        mail={Email}
        />
      </>
    )
  }
}

export default App;
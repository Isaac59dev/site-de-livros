import './App.css'
import Livro from './components/Livro'
import { useState } from 'react'



import domCasmurroImg from './assets/dom-casmurro.jpg';
import oAlienistaImg from './assets/o-alienista.jpg';
import brasCubasImg from './assets/memorias-postumas.jpg';
import aMoreninhaImg from './assets/a-moreninha.jpg';

// Lista de livros com imagens reais
const livros = [
  {
    id: 1,
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis',
    preco: 29.90,
    imagem: domCasmurroImg
  },
  {
    id: 2,
    titulo: 'O Alienista',
    autor: 'Machado de Assis',
    preco: 19.90,
    imagem: oAlienistaImg
  },
  {
    id: 3,
    titulo: 'Memórias Póstumas de Brás Cubas',
    autor: 'Machado de Assis',
    preco: 24.90,
    imagem: brasCubasImg
  },
  {
    id: 4,
    titulo: 'A Moreninha',
    autor: 'Joaquim Manuel de Macedo',
    preco: 22.90,
    imagem: aMoreninhaImg
  }
];



function App() {
  const [carrinho, setCarrinho] = useState([])

  // Adiciona livro ao carrinho
  const adicionarAoCarrinho = (livro) => {
    setCarrinho([...carrinho, livro])
  }

  // Remove item pelo índice
  const removerDoCarrinho = (index) => {
    const novoCarrinho = [...carrinho]
    novoCarrinho.splice(index, 1)
    setCarrinho(novoCarrinho)
  }

  const total = carrinho.reduce((acc, item) => acc + item.preco, 0)

  return (
    <div className="App">
      <h1>📚 Minha Loja de Livros</h1>
      <p>🛒 Itens no carrinho: {carrinho.length} | Total: R$ {total.toFixed(2)}</p>

      <div className="lista-livros">
        {livros.map((livro) => (
          <Livro key={livro.id} livro={livro} aoComprar={adicionarAoCarrinho} />
        ))}
      </div>

      <h2>Carrinho</h2>
      {carrinho.length === 0 ? (
        <p>Carrinho vazio.</p>
      ) : (
        <ul>
          {carrinho.map((item, index) => (
            <li key={index}>
              {item.titulo} - R$ {item.preco.toFixed(2)}{' '}
              <button onClick={() => removerDoCarrinho(index)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App

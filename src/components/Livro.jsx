import './Livro.css'

function Livro({ livro, aoComprar }) {
  return (
    <div className="livro">
      {/* Aqui a mágica */}
      <img 
        src={livro.imagem} 
        alt={livro.titulo}
        style={{ width: "150px", height: "220px", objectFit: "cover" }}
      />

      <h2>{livro.titulo}</h2>
      <p>Autor: {livro.autor}</p>
      <p>Preço: R$ {livro.preco.toFixed(2)}</p>
      <button onClick={() => aoComprar(livro)}>Comprar</button>
    </div>
  );
}

export default Livro;

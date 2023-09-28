function App() {
  const nome = "gian"

  const pessoa = {
    nome: "Maria"
  }

  let estaDeDia = true;

  function retornaNome(){
    return nome;
  }

  return (
    <main>
      <h1>Olá, {estaDeDia ? 'Bom dia' : 'Boa tarde'} {pessoa.nome}!</h1>
      <h2>heyehey {nome}</h2>
      <h2>{retornaNome()}</h2>
      
    </main>
  )
}

export default App

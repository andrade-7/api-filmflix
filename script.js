const lista_de_filmes = document.querySelector("#lista_de_filmes")

const formulario = document.querySelector("#formulario")
const buscar = document.querySelector("#buscar")

const populares = document.querySelector("#populares")
const mais_assistidos = document.querySelector("#mais_assistidos")
const por_vir = document.querySelector("#por_vir")


//MENU POPULARES
populares.addEventListener('click', async function buscarDados() {

    lista_de_filmes.innerHTML = ""

  try {
    const resposta = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=77c4e2b070a2e1396500d0b42ebf7cec&language=pt_BR")
    const dados = await resposta.json()
    dados.results.forEach((filme_da_vez) => {
      const novo_elemento = document.createElement("div")
      novo_elemento.innerHTML = `
        <h2>Nome: ${filme_da_vez.title}</h2>
        <h2>Data: ${filme_da_vez.release_date}</h2>

        <img width=350 src="${`https://image.tmdb.org/t/p/w500${filme_da_vez.poster_path}`}">
        `
      lista_de_filmes.appendChild(novo_elemento)
    })
  } catch (error) {
    console.log("Error: ", error)
  }
})


//MENU MAIS VOTADOS
mais_assistidos.addEventListener('click', async function buscarDados() {

    lista_de_filmes.innerHTML = ""

  try {
    const resposta = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=77c4e2b070a2e1396500d0b42ebf7cec&language=pt_BR")
    const dados = await resposta.json()
    dados.results.forEach((filme_da_vez) => {
      const novo_elemento = document.createElement("div")
      novo_elemento.innerHTML = `
        <h2>Nome: ${filme_da_vez.title}</h2>
        <h2>Data: ${filme_da_vez.release_date}</h2>

        <img width=350 src="${`https://image.tmdb.org/t/p/w500${filme_da_vez.poster_path}`}">
        `
      lista_de_filmes.appendChild(novo_elemento)
    })
  } catch (error) {
    console.log("Error: ", error)
  }
})


//MENU POR VIR
por_vir.addEventListener('click', async function buscarDados() {

    lista_de_filmes.innerHTML = ""

  try {
    const resposta = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=77c4e2b070a2e1396500d0b42ebf7cec&language=pt_BR")
    const dados = await resposta.json()
    dados.results.forEach((filme_da_vez) => {
      const novo_elemento = document.createElement("div")
      novo_elemento.innerHTML = `
        <h2>Nome: ${filme_da_vez.title}</h2>
        <h2>Data: ${filme_da_vez.release_date}</h2>

        <img width=350 src="${`https://image.tmdb.org/t/p/w500${filme_da_vez.poster_path}`}">
        `
      lista_de_filmes.appendChild(novo_elemento)
    })
  } catch (error) {
    console.log("Error: ", error)
  }
})



//CARREGAR TELA INICIAL
async function buscarDados() {
  try {
    const resposta = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=77c4e2b070a2e1396500d0b42ebf7cec&language=pt-BR")
    const dados = await resposta.json()
    dados.results.forEach((filme_da_vez) => {
      const novo_elemento = document.createElement("div")
      novo_elemento.innerHTML = `
        <h2>Nome: ${filme_da_vez.title}</h2>
        <h2>Data: ${filme_da_vez.release_date}</h2>

        <img width=350 src="${`https://image.tmdb.org/t/p/w500${filme_da_vez.poster_path}`}">
        `
      lista_de_filmes.appendChild(novo_elemento)
    })
  } catch (error) {
    console.log("Error: ", error)
  }
}

buscarDados()



//BARRA DE PESQUISA
formulario.addEventListener('submit', async (e) => {
    e.preventDefault()

    lista_de_filmes.innerHTML = ""

try{
    const resposta = await fetch(
     `https://api.themoviedb.org/3/search/movie?api_key=77c4e2b070a2e1396500d0b42ebf7cec&query=${buscar.value}&language=pt_BR`
    )
    const dados = await resposta.json()
    console.log(dados);
    dados.results.forEach((filme_da_vez) => {
        const novo_elemento = document.createElement("div")
        novo_elemento.innerHTML = `
            <h2>Nome: ${filme_da_vez.title}</h2>
            <h2>Data: ${filme_da_vez.release_date}</h2>
            <img width=350 src="${`https://image.tmdb.org/t/p/w500${filme_da_vez.poster_path}`}">
            `
        lista_de_filmes.appendChild(novo_elemento)
        })
    }catch (error) {
    console.log("Error: ", error)
    }
})

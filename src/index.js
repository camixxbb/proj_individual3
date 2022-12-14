// link => http://localhost:8181/
const express = require('express')
const {response} = require('express')
const {uuid} = require('uuidv4')


const app = express()
app.use(express.json())
const filmes = [{
   "filmes": [
      {
          "nome": "As Viagens de Chihiro",
          "ano": "2003",
          "classificação": "Livre",
          "descrição": "Chihiro e seus pais estão se mudando para uma cidade diferente. A caminho da nova casa, o pai decide pegar um atalho. Eles se deparam com uma mesa repleta de comida, embora ninguém esteja por perto. Chihiro sente o perigo, mas seus pais começam a comer. Quando anoitece, eles se transformam em porcos. Agora, apenas Chihiro pode salvá-los.",
          "id": 1
      },
      {
          "nome": "Ponyo: Uma Amizade Que Veio do Mar",
          "ano": "2010",
          "classificação": "Livre",
          "descrição": "O garoto Sousuke encontra um peixinho dourado preso em uma garrafa e decide libertá-lo, sem saber que se trata da deusa do mar Ponyo. Filha de um poderoso mago, ela se comove com a atitude do menino e usa a magia do pai para se transformar em humana. Dessa forma, acredita poder fortalecer a amizade com Sousuke. Porém, a substância de sua poção mágica pode colocar em risco o vilarejo onde mora o menino.",
          "id": 2

      },
      {
          "nome": "The End of Evangelion",
          "ano": "1997",
          "classificação": "16 anos",
          "descrição": "A SEELE ordena um ataque à NERV para destruir os EVAs antes que Gendo consiga provocar o terceiro impacto e a união das almas humanas.",
          "id": 3
      },
      {
          "nome": "Akira",
          "ano": "1998",
          "classificação": "14 anos",
          "descrição": "Uma grande explosão fez com que Tóquio fosse destruída em 1988. Em seu lugar foi construída Neo Tóquio, que, em 2019, sofre com atentados terroristas por toda a cidade. Os amigos Kaneda e Tetsuo integram uma gangue de motoqueiros. Eles disputam rachas violentos com uma gangue rival, os Palhaços, até que um dia Tetsuo encontra Takashi, uma estranha criança com poderes que fugiu do hospital onde era mantido como cobaia.",
          "id": 4
      },
      {
          "nome": "Inuyasha: Sentimentos que Transcedem o Tempo",
          "ano": "2001",
          "classificação": "14 anos",
          "descrição": "InuYasha precisa deter um demônio que deseja dominar o mundo inteiro. O plano do vilão é absorver os poderes de seu pai, e ele atrai InuYasha para uma armadilha.",
          "id": 5
      },
      {
          "nome": "Inuyasha: A Espada Que Domina o Mundo",
          "ano": "2003",
          "classificação": "14 anos",
          "descrição": "Dois irmãos deixam as diferenças de lado para deter o poder destrutivo de uma espada maligna.",
          "id": 6
      }
  ]
}]
const doces = [
   {
       "doces": [
      {
          "produto": "Barra de Chocolate Branco",
          "marca": "Nestlé",
          "seção": "Chocolates",
          "descrição": "Barra de chocolate branco da Nestlé",
          "id": 7
      },
      {
          "produto": "Barra de Chocolate Preto",
          "marca": "Nestlé",
          "seção": "Chocolates",
          "descrição": "Barra de chocolate preto da Nestlé",
          "id": 8
      },
      {
          "produto": "Barra de Chocolate Meio a Meio",
          "marca": "Garoto",
          "seção": "Chocolates",
          "descrição": "Barra de chocolate meio a meio da Garoto",
          "id": 9
      },
      {
          "produto": "Bala Fini",
          "marca": "Fini",
          "seção": "Doces",
          "descrição": "Bala Fini sabor frutas vermelhas",
          "id": 10
      },
      {
          "produto": "Bala Fini",
          "marca": "Fini",
          "seção": "Doces",
          "descrição": "Bala Fini sabor tutti-frutti",
          "id": 11
      },
      {
          "produto": "Bala Fini",
          "marca": "Fini",
          "seção": "Doces",
          "descrição": "Bala Fini sabor morango",
          "id": 12
      }
  ]
   }
]
const funcionarios = [
   {
      "funcionários": [
      {
          "nome": "Aislany",
          "usuario": "aislany_cine",
          "cargo": "Marketing",
          "turno": "8 am - 16 pm",
          "id": 13
      },
      {
        "nome": "Camilla",
        "usuario": "camilla_cine",
        "cargo": "Social Media",
        "turno": "16 pm - 22 pm",
        "id": 14        
      },
      {
        "nome": "Gabriel",
        "usuario": "gabriel_cine",
        "cargo": "RH",
        "turno": "8 am - 16 pm",
        "id": 15
      },
      {
        "nome": "Juliana",
        "usuario": "juliana_cine",
        "cargo": "Analista de Sistemas",
        "turno": "8 am - 16 pm",
        "id": 16
      },
      {
        "nome": "Maria Eduarda",
        "usuario": "mariaduarda_cine",
        "cargo": "Gerente",
        "turno": "10 am - 18 pm",
        "id": 17
      }
  ]
   }
]

//ROTA FILMES

app.get('/filmes', (request, response) => {
   return response.json(filmes)
}) //visualizar
app.post('/filmes', (request, response) => {    
   const {nome, ano, classificacao, descricao} = request.body
   const filme = {id: uuid(), nome, ano, classificacao, descricao}
   filmes.push(filme)
   return response.status(201).json(filme)
})//inserir 
app.put('/filmes/:id',(request, response) => {
   const { id } = request.params
   const {nome, ano, classificacao, descricao} = request.body
   const newFilmes = {id, nome, ano, classificacao, descricao}
   const filmeindex = filmes.findIndex(filme => filme.id == id)
   filmes[filmeindex] = newFilmes;
   return response.json(newFilmes)
})//atualizar 
app.delete('/filmes/:id',(request, response) => { 
   const { id } = request.params
   const filmeindex = filmes.findIndex(filme => filme.id == id)
   filmes.splice(filmeindex, 1)
   return response.status(204).send()
})//excluir 

//ROTA DOCES

app.get('/doces', (request, response) => {
   return response.json(doces)
})//visualizar 
app.post('/doces', (request, response) => { 
   const {produto, marca, secao, sabor} = request.body
   const doce = {id: uuid(), produto, marca, secao, sabor}
   doces.push(doce)
   return response.status(201).json(doce)
})//inserir 
app.put('/doces/:id',(request, response) => { 
   const { id } = request.params
   const {produto, marca, secao, sabor} = request.body
   const newDoces = {id, produto, marca, secao, sabor}
   const doceindex = doces.findIndex(doce => doce.id == id)
   doces[doceindex] = newDoces;
   return response.json(newDoces)
})//atualizar 
app.delete('/doces/:id',(request, response) => { 
   const { id } = request.params
   const doceindex = doces.findIndex(doce => doce.id == id)
   doces.splice(doceindex, 1)
   return response.status(204).send()
})//excluir 

//ROTA funcionários

app.get('/funcionarios', (request, response) => {
   return response.json(funcionarios)
})//visualizar 
app.post('/funcionarios', (request, response) => { 
   const {nome, usuario, cargo, turno} = request.body
   const funcionario = {id: uuid(), nome, usuario, cargo, turno}
   funcionarios.push(funcionario)
   return response.status(201).json(funcionario)
})//inserir 
app.put('/funcionarios/:id',(request, response) => { 
   const { id } = request.params
   const {nome, usuario, cargo, turno} = request.body
   const newFuncionarios = {id, nome, usuario, cargo, turno}
   const funcionarioindex = funcionarios.findIndex(funcionario => funcionario.id == id)
   funcionarios[funcionarioindex] = newFuncionarios;
   return response.json(newFuncionarios)
})//atualizar
app.delete('/funcionarios/:id',(request, response) => { 
   const { id } = request.params
   const funcionarioindex = funcionarios.findIndex(funcionario => funcionario.id == id)
   funcionarios.splice(funcionarioindex, 1)
   return response.status(204).send()
})//excluir 

app.listen(8181, () =>{
   console.log('O servidor foi iniciado!')
})
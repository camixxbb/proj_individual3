// link => http://localhost:8181/
const express = require('express')
const {response} = require('express')
const {uuid} = require('uuidv4')

const app = express()
app.use(express.json())
const filmes = []
const doces = []
const salas = []

//ROTA FILMES

app.get('/filmes', (request, response) => {
   return response.json(filmes)
})//visualizar
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
   const filme = {id: uuid(), produto, marca, secao, sabor}
   filmes.push(filme)
   return response.status(201).json(filme)
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

//ROTA SALAS

app.get('/salas', (request, response) => {
   return response.json(salas)
})//visualizar 
app.post('/salas', (request, response) => { 
   const {numero, genero, acessibilidade, cadeiras} = request.body
   const sala = {id: uuid(), numero, genero, acessibilidade, cadeiras}
   salas.push(sala)
   return response.status(201).json(sala)
})//inserir 
app.put('/salas/:id',(request, response) => { 
   const { id } = request.params
   const {numero, genero, acessibilidade, cadeiras} = request.body
   const newSalas = {id, numero, genero, acessibilidade, cadeiras}
   const salaindex = salas.findIndex(sala => sala.id == id)
   salas[salaindex] = newSalas;
   return response.json(newSalas)
})//atualizar
app.delete('/salas/:id',(request, response) => { 
   const { id } = request.params
   const salaindex = salas.findIndex(sala => sala.id == id)
   salas.splice(salaindex, 1)
   return response.status(204).send()
})//excluir 

app.listen(8181, () =>{
   console.log('O servidor foi iniciado!')
})
// link => http://localhost:8181/
const express = require('express')
const {response} = require('express')
const {uuid} = require('uuidv4')

const app = express()
app.use(express.json())
//ROTA FILMES
const filmes = []


app.get('/filmes', (request, response) => {
   return response.json(filmes)
})//visualizar => FUNCIONOU
app.post('/filmes', (request, response) => { //usando um install q add o id automaticamente
   const {nome, ano, classificação, descrição} = request.body
   const filme = {id: uuid(), nome, ano, classificação, descrição}
   filmes.push(filme)
   return response.status(201).json(filme)
})//inserir => FUNCIONOU
app.put('/filmes/:id',(request, response) => { //vai usar o id para reconhecer onde vai ser mudado(no link adiciona /id)
   const { id } = request.params
   const {nome, ano, classificação, descrição} = request.body
   const newFilmes = {id, nome, ano, classificação, descrição}
   const filmeindex = filmes.findIndex(filme => filme.id == id)
   filmes[filmeindex] = newFilmes;
   return response.json(newFilmes)
})//atualizar => FUNCIONOU
app.delete('/filmes/:id',(request, response) => { //vai excluir tudo relacionado ao id
   const { id } = request.params
   const filmeindex = filmes.findIndex(filme => filme.id == id)
   filmes.splice(filmeindex, 1)
   return response.status(204).send()
})//excluir => FUNCIONOU 

//ROTA DOCES
const doces = []


app.get('/doces', (request, response) => {
   return response.json(doces)
})//visualizar => FUNCIONOU
app.post('/doces', (request, response) => { //usando um install q add o id automaticamente
   const {nome, ano, classificação, descrição} = request.body
   const filme = {id: uuid(), nome, ano, classificação, descrição}
   filmes.push(filme)
   return response.status(201).json(filme)
})//inserir => FUNCIONOU
app.put('/doces/:id',(request, response) => { //vai usar o id para reconhecer onde vai ser mudado(no link adiciona /id)
   const { id } = request.params
   const {produto, marca, seção, sabor} = request.body
   const newDoces = {id, produto, marca, seção, sabor}
   const doceindex = doces.findIndex(doce => doce.id == id)
   doces[doceindex] = newDoces;
   return response.json(newDoces)
})//atualizar => FUNCIONOU
app.delete('/doces/:id',(request, response) => { //vai excluir tudo relacionado ao id
   const { id } = request.params
   const doceindex = doces.findIndex(doce => doce.id == id)
   doces.splice(doceindex, 1)
   return response.status(204).send()
})//excluir => FUNCIONOU 

//ROTA SALAS
const salas = []


app.get('/salas', (request, response) => {
   return response.json(salas)
})//visualizar => FUNCIONOU
app.post('/salas', (request, response) => { //usando um install q add o id automaticamente
   const {numero, genero, acessibilidade, cadeiras} = request.body
   const sala = {id: uuid(), numero, genero, acessibilidade, cadeiras}
   salas.push(sala)
   return response.status(201).json(sala)
})//inserir => FUNCIONOU
app.put('/salas/:id',(request, response) => { //vai usar o id para reconhecer onde vai ser mudado(no link adiciona /id)
   const { id } = request.params
   const {numero, genero, acessibilidade, cadeiras} = request.body
   const newSalas = {id, produto, marca, seção, sabor}
   const salaindex = salas.findIndex(sala => sala.id == id)
   salas[salaindex] = newSalas;
   return response.json(newSalas)
})//atualizar => FUNCIONOU
app.delete('/salas/:id',(request, response) => { //vai excluir tudo relacionado ao id
   const { id } = request.params
   const salaindex = salas.findIndex(sala => sala.id == id)
   salas.splice(salaindex, 1)
   return response.status(204).send()
})//excluir => FUNCIONOU 

app.listen(8181, () =>{
   console.log('O servidor foi iniciado!')
})
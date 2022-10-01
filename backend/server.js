const express = require('express'),
app = express(),
port = 3000

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const bdNotes = require('./bd_notes')

app.get('/', (req, res) => {
    res.send(console.log('Esta é a página principal!'))
})

app.get('/notes', (req, res) => {
    res.send(bdNotes.getNotas())
})

app.get('/notes/:id', (req, res) => {
    res.send(bdNotes.getNotas(request.params.id))
})

app.post('/notes', (req, res) => {
    const nota = bdNotes.salvarNota({
        titulo: req.body.titulo,
        text: req.body.texto
    })
    res.send(nota) // JSON PARA SER REENVIADO PARA WEB
})

app.put('/notes/:id', (req, res, next) => {
    const nota = bdNotes.salvarNota({
        id: req.params.id,
        titulo: req.body.titulo,
        text: req.body.texto
    })
    res.send(nota)
})

app.delete('/notes/:id', (req, res) => {
    const nota = bdNotes.excluirNotas(req.params.id)
    res.send(nota) // RETORNAR UM JSON!! APÓS O ATO ÁCIMA
})

app.listen (port, () => {
    console.log(`Server executando em : http://localhost:${port}`)
})
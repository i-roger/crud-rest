const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const notas = {}

function salvarNota(nota) {
    if(!nota.id) nota.id = sequence.id
    notas[nota.id] = nota
    return nota
}

function getNota(id) {
    return notas [id] || {}
}

function getNotas(){
    return Object.values(notas)
}

function excluirNotas(id) {
    const nota = notas[id]
    delete notas[id]
    return nota
}

module.exports = { salvarNota, getNota, getNotas, excluirNotas }
//importo il menu
const menu = require('../data/menu')

//preparo tutte le funzioni

//index (.get)
function index(req, res) {
    res.json(menu)
}

//show (.get)
function show(req, res) {
    res.json(menu.find(post => post.id === Number(req.params.id)))
}

//store (.post)
function store(req, res) {
    res.send('Aggiungi un nuovo post')
}

//update (.put)
function update(req, res) {
    res.send(`Modifica INTERAMENTE il post con id: ${req.params.id}`)
}

//modify (.patch)
function modify(req, res) {
    res.send(`Modifica PARZIALMENTE il post con id: ${req.params.id}`)
}

//destroy (.delete)
function destroy(req, res) {
    res.send(`Cancellazione del post con id: ${req.params.id}`)
}

module.exports = { index, show, store, update, modify, destroy }
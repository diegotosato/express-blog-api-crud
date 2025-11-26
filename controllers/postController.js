//importo il menu
const { error } = require('console')
const menu = require('../data/menu')

//preparo tutte le funzioni

//index (.get)
function index(req, res) {
    res.json(menu)
}

//show (.get)
function show(req, res) {
    //converto l'ID in numero
    const id = Number(req.params.id)

    //filtro il menu ed estraggo il sinoglo post il cui id è uguale ad id
    const findPost = menu.find(post => post.id === id)

    //restituisco in formato json il post trovato
    // res.json(findPost)

    //se il post non esiste, allora setto lo status su 404 (not found), e restituisco un oggetto che contiene status, errore e un messaggio
    if (!findPost) {
        res.sendStatus(404)

        return res.json({
            status: 404,
            error: 'Not found',
            message: 'Il post non esiste'
        })
    }

    res.json(findPost)
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
    //converto l'ID in numero
    const id = Number(req.params.id)

    //filtro il menu ed estraggo il sinoglo post il cui id è uguale ad id
    const deletePost = menu.find(post => post.id === id)

    //se il post non esiste, allora setto lo status su 404 (not found), e restituisco un oggetto che contiene status, errore e un messaggio
    if (!deletePost) {
        res.sendStatus(404)

        return res.json({
            status: 404,
            error: 'Not found',
            message: 'Il post non esiste'
        })
    }

    //metodo splice per rimuovere il post desiderato
    //recupero la posizione nell'array del post da eliminare, dichiaro dopo la virgola quanti elementi rimuovere
    menu.splice(menu.indexOf(deletePost), 1);

    //loggo in console l'array aggiornato
    console.log(menu);

    //rispondo on un errore 204 per indicare che la cancellazione sia avvenuta con successo
    res.sendStatus(204)

}

module.exports = { index, show, store, update, modify, destroy }
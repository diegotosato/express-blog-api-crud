const express = require('express')
const router = express.Router()
const listOfPosts = require('../data/posts')

//index
router.get('/', (req, res) => {
    // res.send('Lista dei i post')
    res.json(listOfPosts)
})

//show
router.get('/:id', (req, res) => {
    // res.send(`Mostrami il post con id: ${req.params.id}`)
    res.json(listOfPosts.find(post => post.id === Number(req.params.id)))
})

//store
router.post('/', (req, res) => {
    res.send('Aggiungi un nuovo post')
})

//update
router.put('/:id', (req, res) => {
    res.send(`Modifica INTERAMENTE il post con id: ${req.params.id}`)
})

//modify
router.patch('/:id', (req, res) => {
    res.send(`Modifica PARZIALMENTE il post con id: ${req.params.id}`)
})

//destroy
router.delete('/:id', (req, res) => {
    res.send(`Cancellazione del post con id: ${req.params.id}`)
})


module.exports = router;
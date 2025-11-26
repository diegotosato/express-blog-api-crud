const express = require('express')
const app = express()
const PORT = 3000

const postsRouter = require('./routers/posts')

app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.send('Home Page')
})

//Resource: Posts
app.use('/api/posts', postsRouter)
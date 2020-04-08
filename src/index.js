const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const downloadVideo = require('./download')

// servidor
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


// rotas
app.use(express.static(path.join(__dirname, 'videos')))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'frontend/index.html')))

app.post('/download', async (req, res) => {
    try {
        const finish = obj => res.status(200).json(obj)
        downloadVideo(req.body.url, finish)
    } catch (error) {
        res.sendStatus(500).json(error)
    }
})


// servindo app
app.listen(3013, () => console.log('> servindo na porta: 3013'))
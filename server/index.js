import './config.js'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import multer from 'multer'
import { getItemsBySize } from './controller/stuffController.js'
// import { getItemsBySize } from './controller/stuffController.js'
import { getDb } from './util/db.js'
import { addSingleItem, deleteSingleItem, getSingleItem, updateSingleItem } from './controller/itemController.js'
// import { addSingleItem, deleteSingleItem, getSingleItem, updateSingleItem } from './controller/itemController.js'

// Falls ihr multer oder den express validator nutzt, importiert diese einfach auch
const PORT = process.env.PORT
const app = express()
//Image speichern auf MongoDB
const storage = multer.memoryStorage()
const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 1024 }
}).single('image')

app.use(morgan('dev'))
//Frontend mit Backend verbinden mit Cors
app.use(cors())
app.use(express.json())
//Error Handling wegen Bild (Damit kein zu großes Bild verwendet wird)
app.use((err, req, res, next) => {
    if (err.code === 'LIMIT_FILE_SIZE') {
        res.send({ result: 'fail', error: { code: 1001, message: 'File is too big' } })
        return
    }
    next()
})

// Alle unsere Routen
app.get('/', (req, res) => {
    res.status(200).send('Alles OKAY')
})
//Alles um Stuff-Sammlung
app.get('/api/size/:size', getItemsBySize)
//Alles was mit einem einzelenen Item zu tun hat
app.get('/api/item/:item', getSingleItem)
app.post('/api/add', upload, addSingleItem)
app.put('/api/item/:item', upload, updateSingleItem)
app.delete('/api/item/:item', deleteSingleItem)

app.post('/api/uploadphoto', async (req, res, next) => {
    const base64Image = req.body.image
    const imageName = req.body.name
    const type = req.body.type
    let response;

    try {
        response = await imagesService.upload(imageName, base64Image)
    } catch (error) {
        console.error('error uploading image', error.message)
        return next(new Error('error uploading image', image.name))
    }
    res.send({ link: response })
})

// dann werfen wir den Server mal an
app.listen(PORT, () => console.log('Server runs on Port:', PORT))
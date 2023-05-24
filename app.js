const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv/config')

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors())

//import routes
const postRoutes = require('./routes/post')

app.use('/post', postRoutes)

app.get('/', (req, res) => {
  res.send('Affh iyyhh')
})

let db = mongoose.connection


mongoose.connect(process.env.DB_CONNECTION,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// handle error
db.on('error', console.error.bind(console, 'Error Establishing a Database Connection?'))

//handle success
db.once('open', () =>{
    console.log('Database a connected')
})

app.listen(process.env.PORT, () => {
  console.log(`Server sedang berjalan! ${process.env.PORT}`)
})
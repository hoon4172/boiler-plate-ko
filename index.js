const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://hoon4172:sjha782800@boilerplate.e5tji.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>console.log('MongoDB Connected...'))
  .catch(err => console.log(err))
  

app.get('/',(req,res)=> res.send('Hello World!'))
app.listen(port, () => console.log(`Example app ${port}!`))
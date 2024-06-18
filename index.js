const express = require('express')
require('dotenv').config()
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{res.send('namansrivastava');
})  

app.get('/login',(req,res)=>{
    res.send('<h1>welcome to login page</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>welcome to the toxic club </h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})  
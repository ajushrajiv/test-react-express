const express = require('express')
var cors = require('cors')

const {PORT} = process.env;
const app = express()

app.use(cors())
 
app.get('/user', (req, res) => {
  res.status(200).json({profile: { firstName :"Max",
            lastName:"Rogger",
            address:{
                doorNo:"1A",
                streetName:"FirstStreet"
            },
            hobbies:["reading","swimming","skiing"]
            }})
})

app.get('/todo', (req, res) => {
    res.status(200).json({TODO: { Shopping:["grocery","gifts"],
                Appointments:"dental clinic"
              }})
  })
 
app.listen(PORT, function () {
  console.log(`app listening on ${PORT}`)
})
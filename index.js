const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser')

const {PORT} = process.env;
const app = express()

app.use(bodyParser.json())//middleware
app.use(cors())

let profiles=[
  {
    id:1, 
    firstName:"Alan",
    lastName:"Roger", 
    birthDate: new Date("1990-10-10")
  },
  {
    id:2, 
    firstName:"Ada",
    lastName:"Roger", 
    birthDate: new Date("1991-11-11")
  }
]

const todos = [
  {
    id:1, 
    grocery: ["milk", "egg","bread"],
    doBefore:new Date("2024-02-16")
  },
  {
    id:2, 
    gift:["lego","books"],
    doBefore:new Date("2024-02-20")
  }
]

//GET REQUEST

//return all profiles
app.get('/profiles', (req, res) => {
  res.json({profiles});
})
 
//return the specific user
app.get('/user', (req, res) => {
  //console.log("REQUEST", req.query)
  //const userId =2;
  const userId =parseInt( req.query.userId);
  const userProfile = profiles.find((item) => item.id === userId )
  res.json({profile: userProfile})
})


//return all todos
app.get('/todos', (req, res) => {
    res.json({todos})
  })

//return a single todo
app.get('/todo',(req,res) => {
  const todoId = parseInt(req.query.todoId);
  const todoList = todos.find((item) => item.id === todoId)
  res.json({todo: todoList})
})


//POST REQUEST

//add a single profile
app.post('/user',(req,res) => {
  const newUser = req.body.user;
  profiles.push(newUser);
  res.json({user: newUser});
})

//add a single todo
app.post('/todo',(req,res) => {
  const newTodo = req.body.todo;
  todos.push(newTodo);
  res.json({todo: newTodo});
})


//UPDATE

app.put('/user/updateuser',(req,res) => {
  const { username, id}= req.body.user;

  const currentUser = profiles.find((item) => item.id === userId)
  currentUser.username =username;

  const deletedProfiles = profiles.filter((item) => item.id !== userId)
  deletedProfiles.push(currentUser);

  profiles = deletedProfiles
  res.json({updatedProfiles: currentUser});
})

 
app.listen(PORT, function () {
  console.log(`app listening on ${PORT}`)
})
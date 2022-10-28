const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000


// cros
app.use(cors())

//body-parser 
app.use(express.json())  // middleware
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
// app.use(bodyParser.json())




app.get('/', (req, res) => {
  res.send('Hello World!')
})

const users =[
  {id:1, name: 'sabana', email:'sabana@gmail.com', phone: '0147895623'},
  {id:2, name: 'sadana', email:'sadana@gmail.com', phone: '01455895623'},
  {id:3, name: 'sakira', email:'sakira@gmail.com', phone: '0147895623'},
  {id:4, name: 'sabiba', email:'sabiba@gmail.com', phone: '0147895623'},
  {id:5, name: 'saku', email:'saku@gmail.com', phone: '0147895623'},
  {id:6, name: 'sakaku', email:'kakuna@gmail.com', phone: '0147895623'},
  {id:7, name: 'laku', email:'laku@gmail.com', phone: '0147895623'},
  {id:8, name: 'hakim', email:'hakim@gmail.com', phone: '0147895623'},
  {id:9, name: 'lakim', email:'lakima@gmail.com', phone: '0147895623'},
  {id:10, name: 'purnima', email:'purnima@gmail.com', phone: '0147895623'},
  {id:11, name: 'durnima', email:'durnima@gmail.com', phone: '0147895623'},
]

app.get('/users', (req, res) => {
  // filter by search query parameter
  if(req.query.name){
    const search = req.query.name.toLowerCase();
    const matched = users.filter(user => user.name.toLowerCase().includes(search))
    res.send(matched);
  }else{
    res.send(users);
  }
});


// parameter
app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  const user = users.find(u=> u.id == id);
  res.send(user)
})

// post data
app.post('/user', (req, res)=>{
  console.log('request', req.body);
  const user = req.body;
  user.id = users.length+1;
  users.push(user)
  res.send(user)
})


// listen........
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
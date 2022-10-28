### Basic server setup

# step-1: Create a folder

" mkdir [folder_Name]"

# step-2: npm initialize

" npm init "

# step-3: install the express

" npm install express --save"

# step-4: create index.js file

### Express or node server

# step-1: require express

" const express = require('express') "

# step-2: create app variable & call the express

" const app = express();"

# step-2: Declare port

" const port = 5000 "
" const port = process.env.PORT || 5000 "

# step-3: Set the Route

app.get('/', (req, res) => {
res.send('Hello World!')
})

# step-4: Listen to Port

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

# set-5: Run to the Commend Line

" node index.js "
-- check your browser for that exact port

# step-4: get

app.get('/users', (req, res) => {
res.send(users);
});

### nodemon install & Package.json file configure

# step-1: install nodemon

" npm install -g nodemon "
-- A nodemon install is required to keep the server running mood all the time

# step-2: Package.json file configure

"scripts": {
"start": "node index.js",
"start-dev": "nodemon index.js",
"test": "echo \"Error: no test specified\" && exit 1"
},

# step-3: Cors (cors policy) middleware install & use

" npm install cors " ----------------- install
" const cors = require('cors') " ----- declare
" app.use(cors()) " ------------------- Use Case

# step - 4: Body perser install & use

" npm install body-parser " ----------- install
" app.use(express.json()) " ----------- use Case

### important method Syntax

# A) Basic Syntax

app.get('/, (req, res)=>{
res.send()
})

# B) filter by search query parameter

app.get('/users', (req, res) => {
if(req.query.name){
const search = req.query.name.toLowerCase();
const matched = users.filter(user => user.name.toLowerCase().includes(search))
res.send(matched);
}else{
res.send(users);
}
});

# c) parameter

app.get('/user/:id', (req, res) => {
const id = req.params.id;
const user = users.find(u=> u.id == id);
res.send(user)
})

# D) post data

app.post('/user', (req, res)=>{
console.log('request', req.body);
const user = req.body;
user.id = users.length+1;
users.push(user)
res.send(user)
})

# E) listen

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

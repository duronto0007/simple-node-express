const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
// const port =process.env.PORT || 3000;
const port = 5000;

app.get('/', (req,res) =>{
    res.send('WOW! i am very excited to learn node with jhonker vaai!')
})
const users =[
    {id: 0, name: 'satter', email: 'satter@gmail.com' , phone: '01739946189'},
    {id: 1, name: 'shavab', email: 'shavab@gmail.com' , phone: '01739946189'},
    {id: 2, name: 'salman', email: 'salman@gmail.com' , phone: '01739946189'},
    {id: 3, name: 'taraq', email: 'taraq@gmail.com' , phone: '01739946189'},
    {id: 4, name: 'Tamim', email: 'Tamim@gmail.com' , phone: '01739946189'},
    {id: 5, name: 'Ayaan', email: 'Ayaan@gmail.com' , phone: '01739946189'},
]
app.get('/users', (req, res) =>{
    const search = req.query.search;
    // use quary parameter 
    if (search){
       const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
       res.send(searchResult);
    }
    else{
        res.send(users);
    }
    
})
// app.METHOD

app.post( '/users', (req, res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)

})

// dynamic Api

app.get('/users/:id', (req, res) =>{
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits', (req, res) =>{
    res.send('frutits price now a days is very high');
})

app.get('/fruits/mangoes/fazli', (req, res) =>{
    res.send('very tesety mango');
})

app.listen(port, () =>{
    console.log('Listing to port', port);
})
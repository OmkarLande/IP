
//server setup (app)

const express = require('express')
const app = express()
const port =5000

app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))


// mongo connection

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mongoconnection',{
    useNewUrlparser:true,
    useUnifiedTopology:true
})
.then(()=> {console.log("Connection sucessful  DB is connected")})
.catch( (error) => {console.log("Recieved an error",error)});



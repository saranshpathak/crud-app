const express =require('express');
const app = express();
const connect = require('./confiq/connection');
const bodyParser = require('body-parser');
const paths = require('./routes/paths');
const cors = require("cors");



connect();
app.use(express.json());
app.use(cors());
// app.get('/',(req,res)=>{
//     res.send(`hi haterss`);
//   });
app.use('/',paths);

app.listen(8000,()=>{
    console.log('successfully running')
} )
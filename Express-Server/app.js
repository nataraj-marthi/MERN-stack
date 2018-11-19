const express=require('express');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const cors=require('cors');
const helmet=require('helmet');
const config=require('./config');
const routes=require('./routes');


const mongoose=require('mongoose');

const app=express();

app.use(morgan('combined'))
app.use(cors())
app.use(helmet())
app.use(bodyParser.json())

app.use('/',routes)

// db:'mongodb://localhost:27017/cricketapp' will create DB called cricketapp
mongoose.connect(config.dev.db,{
    useNewUrlParser: true
})

app.listen(config.dev.port,config.dev.hostname,()=>{
    console.log(`Express Server started on port ${config.dev.port} `)
})

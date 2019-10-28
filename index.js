var express= require('express');
var app = express();
const morgan=require("morgan");
const fs =require('fs')
const path=require("path")

var accesslog=  fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(morgan(('combined', { stream: accesslog })))


app.get("/", (req,res) =>{
res.send("ok")

})

var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);

app.listen(3000, ()=>{

    console.log("listenig")
})
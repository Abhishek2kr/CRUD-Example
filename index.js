const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect("mongodb://localhost:27017/master",(error,db)=> {
    if(error) {
        console.log(error); 
        throw error;
    }
    console.log("Connected...");
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


const port = process.env.port || 4001; 
app.listen(port,()=> {
    console.log(`I am listening on port ${port}`);
})

app.use((req,res,next)=> {
    next();
})

require('./routes/index.js')(app);
module.exports = app;



// app.get("/",async (req,res)=> {
//     await https.get("https://jsonplaceholder.typicode.com/users",(response)=> {
//         let data = '';
//         response.on("data",(chunk)=> {data += chunk});
//         response.on("end",()=> {console.log(JSON.parse(data))});

//     })
//     console.log("Hello");
//     res.send("Hello::::::").status(200);
// })

// app.router()
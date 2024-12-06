const express=require("express");
const errorHandler = require("./middleware/errorHandler.js");
const connectDb = require("./Config/dbConnection.js");
const dotenv =require("dotenv").config();

const cors = require('cors');



const corsOptions = {
    origin: '*',
    methods: 'GET, POST, PUT, DELETE', 
    allowedHeaders: 'Content-Type, Authorization', 
};



connectDb();

const app=express();


app.use(cors(corsOptions));

const port= process.env.PORT || 5000;


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
 app.use("/api/employee",require("./routes/employeeRoutes.js"))
 app.use("/api/user",require("./routes/userRoutes.js"))
app.use(errorHandler);
app.listen(port,()=>{
    console.log(`Server is listening to port ${port}`)
});
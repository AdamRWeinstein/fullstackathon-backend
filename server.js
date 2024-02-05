// Imports
require('dotenv').config();
require('./config/db.connection')
const { PORT } = process.env;
const express = require('express');
const cors = require("cors");
const morgan = require("morgan");

const app = express();

const ridesRouter = require('./routes/rides')

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use(cors());
app.use(morgan("dev"));

app.use('/rides', ridesRouter)

// Routes
app.get("/", (req, res) => {
    res.send("hello world")
})

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
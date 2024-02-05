// Imports and configurations
require('dotenv').config();
require('./config/db.connection')
const { PORT } = process.env;
const express = require('express');
const cors = require("cors");
const morgan = require("morgan");

// Initialize Express app
const app = express();

// Route handlers
const ridesRouter = require('./routes/rides')

// Middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use(cors());
app.use(morgan("dev"));

// API routes
app.use('/rides', ridesRouter)

// Server routes
app.get("/", (req, res) => {
    res.send("hello world")
})

// Start server
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
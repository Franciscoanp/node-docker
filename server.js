const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");


//iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//inicnando o banco de dados
mongoose.connect("mongodb://localhost:27017/nodeapi", { useNewUrlParser: true });

requireDir("./src/models");

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);

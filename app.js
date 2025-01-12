const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

app.use(express.json())

app.listen(3000, function () {
    console.log("Server Online !")
});

//DB Connection

const conn = require("./db/conn")
conn();

//Routes
const routes = require("./routes/router")
app.use("/api", routes);

///rszzfYN3mxk4ozv4
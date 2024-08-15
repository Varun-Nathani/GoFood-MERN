const express = require('express');
const app = express();
const mongoDB = require("./db")
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World! This is the API server.');
})

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use(express.json())
app.use("/api", require("./routes/CreateUser"));
app.use("/api", require("./routes/DisplayData"));
app.use("/api", require("./routes/OrderData"));

app.listen(port, (err, res) => {
    console.log(`Example app listening on  http://localhost:${port}`);
});

mongoDB()

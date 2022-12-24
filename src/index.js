const express = require('express')
const app = express()
const port = 3000
const path=require("path");
const requests=require("requests");


const staticPath=path.join(__dirname,"../public");

app.set("view engine","hbs")

app.use(express.static(staticPath))
app.set('views','views/')


app.get("/",(req,res)=>{
  res.render("index.hbs")
})

app.listen(port, () => {
  console.log(`Example app listening on  localhost:${port}`)
})
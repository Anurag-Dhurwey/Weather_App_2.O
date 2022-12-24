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
  
  requests('https://api.openweathermap.org/data/2.5/weather?q=bhopal&appid=099029477bb8bd68ccf37540ba19ea39', )
  .on('data',  (chunk)=> {
      let objdata=JSON.parse(chunk);
      const arr_data=[objdata];  
      res.render("index.hbs",{
        Location:   arr_data[0].name,
        Country:   arr_data[0].sys.country,
        Temprature:   Math.ceil(arr_data[0].main.temp-273.15),
        Min_Temp:   Math.ceil(arr_data[0].main.temp_min-273.15),
        Max_Temp:   Math.ceil(arr_data[0].main.temp_max-273.15)})  
  });
     
  
})

app.listen(port, () => {
  console.log(`Example app listening on  localhost:${port}`)
})
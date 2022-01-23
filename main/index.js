const path=require('path');
const express = require('express');
const app = express();

const port=process.env.port||8000;

//console.log(path.join(__dirname,"../stat_doc"));
const staticPath=path.join(__dirname,'../stat_doc');

app.set("view engine","hbs");
app.use('/static',express.static(staticPath));

app.get("/",(req,res)=>{
    res.render("relax");
});
/*app.get('/',(req,res)=>{
  res.send("hello  yooo")
});*/

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})
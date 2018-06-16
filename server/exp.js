const exp = require('express');
const app = exp();

app.use("/",(req,res,next)=>{
    res.sendFile('./index.html',{root:__dirname});
});

app.listen(7070 , function(){
    console.log("7070포트로 시작")
});
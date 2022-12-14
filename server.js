const express = require("express");
const app = express();

//middleware
const timeVerif =()=>{
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();
    
    return day !== 1 && day !== 5 && hour < 17 && hour > 9 ; 
}
//
app.use( express.static('pages'));
// close
app.use(function(req,res,next){
    if (timeVerif()){
        next();
    }
    else {
        res.sendFile(__dirname+'/pages/close.html')
        console.log('This App is not available !')
    }
})
//home
app.get('/',function(req,res){
    res.sendFile(__dirname+'/pages/home.html')
});
//contact
app.get('/contact',function(req,res){
    res.sendFile(__dirname+'/pages/contact.html')
});
//about
app.get('/about',function(req,res){
    res.sendFile(__dirname+'/pages/about.html')
});
//server
app.listen(3000,(err)=> 
err ? console.log(err) 
: console.log("server is running")
);
var express = require('express');
var app = express();

app.get('/',function(req,res)
{
	res.sendfile('index.html');
})
app.get('/edit',function(req,res)
{
	res.sendfile('edit.html');
})
app.get('/delete',function(req,res)
{
	res.sendfile('delete.html');
})
app.listen(3001,()=>
{
	console.log("server is not working");
})

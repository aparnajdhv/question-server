var express=require('express');
var router = express.Router();

router.get('/get-test',function(req,res,next){

    res.send('first request completed');

})

router.get('/test-query',function(req,res,next){
    const name=req.query.name
    const location=req.query.loc
    const runs=req.query.runs
    res.send(`My name is ${name}, I am from ${location}. Runs are ${runs}`)
})

router.patch('/test-path/:name/:loc/:runs',function(req,res,next){
    const name=req.params.name
    const location=req.params.loc
    const runs=req.params.runs
    res.send(`My name is ${name}, I am from ${location}. Runs are ${runs}`)
})

router.put('/test-headers',function(req,res,next){
    const name=req.headers.name
    const location=req.headers.loc
    const runs=req.headers.runs
    res.send(`My name is ${name}, I am from ${location}. Runs are ${runs}`)
})

router.post('/test-post',function(req,res,next){
    const name=req.body.name
    const location=req.body.loc
    const runs=req.body.runs
    res.send(`My name is ${name}, I am from ${location}. Runs are ${runs}`)
})


module.exports=router;
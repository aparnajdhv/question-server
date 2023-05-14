var express=require('express');
var router = express.Router();
var mongodb = require('mongodb');

router.post('/save-que',async function(req,res,next){
    try{
    const dataObj=req.body.data;
    //conect with db
    //const url='mongodb://127.0.0.1:27017';
    const url='mongodb+srv://test:test@9am.ff4os4o.mongodb.net/';
    const mongodbClient=mongodb.MongoClient;
    const server = await mongodbClient.connect(url);
    const db=server.db('student');
    const collection = db.collection('question');
    const result = await collection.insertOne(dataObj)
    res.send(result);
    }
    catch(e){
        console.log(e)
        res.send(e);
    }
})

module.exports=router;
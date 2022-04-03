const express = require("express");
const router = express.Router();

const fs = require("fs");
const { parse } = require("csv-parse");

router.get('/authors' , async(req , res) => {
    try {
        const inputFile = 'authors.csv';

        var parser = parse({delimiter: ';'}, function (err , data) { 
            res.send(data);
        });

        fs.createReadStream('./data/'+inputFile).pipe(parser);
    }   
    catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error :(");
    }
});

router.get('/books' , async(req , res) => {
    try {
        const inputFile = 'books.csv';

        var parser = parse({delimiter: ';'}, function (err , data) { 
            res.send(data);
        });

        fs.createReadStream('./data/'+inputFile).pipe(parser);
    }   
    catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error :(");
    }
})

router.get('/magazines' , async(req , res) => {
    try {
        const inputFile = 'magazines.csv';

        var parser = parse({delimiter: ';'}, function (err , data) { 
            res.send(data);
        });

        fs.createReadStream('./data/'+inputFile).pipe(parser);
    }   
    catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error :(");
    }
})

module.exports = router;
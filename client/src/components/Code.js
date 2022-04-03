import React from 'react'

const Code = () => {

    var text = `
    const fs = require("fs");
    const { parse } = require("csv-parse");

    const inputFile = 'authors.csv';

    var parser = parse({delimiter: ';'}, function (err , data) { 
        res.send(data);
    });

    fs.createReadStream('./data/'+inputFile).pipe(parser);
    `
    
    return (
        <div className='displayCode' >
            <h1 className='headings' >Below code can be used to read CSV</h1>
            <pre>
                <code>
                    {text}
                </code>
            </pre>
        </div>
    )
}

export default Code
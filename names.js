'use strict';

import { readFile } from 'fs';

let users = [
    { name = "Kaddy" },
    { name = "Esteban" },
    { name = "Marco" },
    { name = "Hello" }
]

fs.writeFile("names.js", data, (err) => {
    if (err)
        console.log(err);
    else {
        console.log("File written successfully\n");
    }
});

fs.readFile('names.js', (err, data) => {
    console.log(data);
})


const fs = require("fs");

function readFirstJsonFile(cb) {
    fs.readdir("./data", (err, files) => {
        if (err) cb(err);
        else {
            const jsonFiles = files.filter((file) => file.endsWith(".json"));
            const firstJsonName = jsonFiles[0];

            fs.readFile(`./data/${firstJsonName}`, "utf8", (err, data) => {
                if (err) cb(err);
                else {
                    cb(data);
                }
            });
        }
    });
}

function handleResults(err, fileData) {
    if (err) console.log("We got an error -->", err);
    else {
        console.log(fileData);
    }
}
readFirstJsonFile(handleResults);

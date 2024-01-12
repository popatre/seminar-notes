const http = require("http");
const fs = require("fs/promises");

/*
"/api/cats" - POST - tick
collect up the data being sent - tick
- read the cats file
- update the array
- write the new array to the file
--send response - and object they sent
 */

const server = http.createServer((req, res) => {
    const { url, method } = req;
    console.log(`Received a ${method} request on ${url}`);
    if (url === "/") {
        res.setHeader("Content-Type", "application/json");
        res.statusCode = 200;
        res.write(JSON.stringify({ msg: "hello world" }));
        res.end();
    }
    if (url === "/api/cats") {
        if (method === "GET") {
            fs.readFile("database/cats.json", "utf-8").then((fileContents) => {
                const cats = JSON.parse(fileContents);
                res.setHeader("Content-Type", "application/json");
                res.statusCode = 200;
                res.write(JSON.stringify({ cats }));
                res.end();
            });
        }
        if (method === "POST") {
            let body = "";
            req.on("data", (packet) => {
                body += packet.toString();
            });

            req.on("end", () => {
                const newCat = JSON.parse(body);

                fs.readFile("database/cats.json", "utf-8")
                    .then((fileData) => {
                        const currentCats = JSON.parse(fileData);
                        currentCats.push(newCat);

                        return fs.writeFile(
                            "database/cats.json",
                            JSON.stringify(currentCats)
                        );
                    })
                    .then(() => {
                        res.setHeader("Content-Type", "application/json");
                        res.statusCode = 201;
                        res.write(JSON.stringify({ cat: newCat }));
                        res.end();
                    });
            });
        }
    }
});

server.listen(9090, (err) => {
    if (err) console.log(err);
    else console.log("Server listening on port: 9090");
});

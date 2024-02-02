# Server stuff

plan : https://docs.google.com/document/d/1_fK7l4BdaG3EABGPAlNw8NN8bzct48LNEmyPPvXGn8E/edit

```js
const http = require("http");
const fs = require("fs/promises");

const server = http.createServer((request, response) => {
    const method = request.method;
    const url = request.url;

    if (url === "/api/artworks" && method === "GET") {
        fs.readFile("./data/artworks.json", "utf-8").then((contents) => {
            const artworks = JSON.parse(contents);
            response.statusCode = 200;
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify({ artworks: artworks }));
            response.end();
        });
    }
    if (url === "/api/artworks" && method === "POST") {
        let body = "";

        request.on("data", (packet) => {
            body += packet.toString();
        });

        request.on("end", () => {
            const artToPost = JSON.parse(body);
            fs.readFile(`${__dirname}/data/artworks.json`, "utf-8")
                .then((fileContents) => {
                    const parsedFileContents = JSON.parse(fileContents);
                    const updatedArtWorks = [...parsedFileContents, artToPost];

                    return fs.writeFile(
                        `${__dirname}/data/artworks.json`,
                        JSON.stringify(updatedArtWorks, null, 2)
                    );
                })
                .then(() => {
                    response.statusCode = 201;
                    response.setHeader("Content-Type", "application/json");
                    response.write(JSON.stringify({ artwork: artToPost }));
                    response.end();
                })
                .catch((err) => {
                    console.log("on no", err);
                });
        });
    }
});

server.listen(9090, (err) => {
    console.log("Server listening on port 9090");
});
```

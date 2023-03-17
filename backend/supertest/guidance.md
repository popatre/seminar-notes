# Supertest - Doing a POST

SETUP - https://github.com/popatre/be-supertest-sem/tree/seminar

### 1. Using `supertest` for POST

-   write tests for `POST /api/snacks`, keeping in mind:
    -   the `send` method on the request will be new to them
    -   write a test - with `snack_name`, 'price', and 'flavour_text'
    -   draw attention to when template literals are okay vs puts us at risk of SQL injection (latter being if data the _user provided_ is being interpolated into the string )

### TEST

```js
describe("POST /api/snacks", () => {
    test("status:201, responds with the new snack when all properties are provided", () => {
        const newSnack = {
            snack_name: "Skittles",
            price: 50,
            flavour_text: "Taste the rainbow",
        };

        return request(app)
            .post("/api/snacks")
            .send(newSnack)
            .expect(201)
            .then(({ body }) => {
                expect(body.snack).toEqual({
                    snack_id: 5,
                    snack_name: "Skittles",
                    price: 50,
                    flavour_text: "Taste the rainbow",
                });
            });
    });
});
```

---

### APP

```js
app.post("/api/snacks", postSnack);
```

app.use(express.json()) - later

---

### CONTROLLER

```js
exports.postSnack = (req, res) => {
    const newSnack = req.body;

    insertSnack(newSnack).then((snack) => {
        res.status(201).send({ snack });
    });
};
```

---

### MODEL

```js
exports.insertSnack = (snack) => {
    const { snack_name, price, flavour_text } = snack;

    const psqlQuery = `INSERT INTO snacks (snack_name, price, flavour_text) VALUES ($1, $2, $3) RETURNING *;`;

    const queryValues = [snack_name, price, flavour_text];

    return db.query(queryStr, queryValues).then(({ rows }) => rows[0]);
};
```

---

### 2. Before and after testing: seeding and ending connection

**Seeding before tests**

-   having successfully posted a snack, discuss how this could make tests that access the same data fail on next run of the test suite
-   elicit from the students the idea of seeding before the tests are run - edit the `test` script accordingly to run the .sql before `jest`
-   discuss how these does not protect from changes to data _between_ individual tests and how this is a problem we will solve later in the week

### SCRIPT

```js
"scripts": {
        "test": "npm run setup-dbs && PGDATABASE=nc_snacks_test jest",
        "setup-dbs": "psql -f db/nc_snacks.sql && psql -f db/nc_snacks_test.sql ",
        "dev": "PGDATABASE=nc_snacks nodemon listen.js"
    },

```

**Ending the connection**

-   to stop the server hanging after running the tests, require in the connection to the db/client and `afterAll` invoke db.end()

# Seeding funcs

## ref obj

```js
function createRefObject(data, key1, key2) {
    const refObj = {};
    if (data.length === 0) return refObj;

    data.forEach((datum) => {
        const key1Value = datum[key1];
        const key2Value = datum[key2];
        refObj[key1Value] = key2Value;
    });

    return refObj;
}
```

## prep rides

```js
function prepareRidesData(ridesData, parksData) {
    if (ridesData.length === 0 || parksData.length === 0) return [];

    const parksRef = createRefObject(parksData, "park_name", "park_id");

    const preparedRides = ridesData.map((ride) => {
        const rideCopy = { ...ride };
        rideCopy.park_id = parksRef[rideCopy.park_name];
        delete rideCopy.park_name;
        return rideCopy;
    });

    return preparedRides;
}
```

```js
function arrangeRidesData(preparedRidesData) {
    const formattedRides = arrangeData(preparedRidesData);
    return formattedRides;
}
```

```js
function insertRides(preparedRidesData) {
    const formattedRides = arrangeRidesData(preparedRidesData);

    const insertQuery = format(
        `INSERT INTO rides
      (ride_name, year_opened, votes, park_id )
    VALUES
      %L
    RETURNING *;`,
        formattedRides
    );
    return db.query(insertQuery);
}
```

```js
.then((insertedParks) => {
            const preparedRides = prepareRidesData(rides, insertedParks.rows);
            return insertRides(preparedRides);
        })
```

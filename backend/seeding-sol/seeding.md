# Seeding

## Create Ref

```
 test("should return an object", () => {
        expect(createRefObject([])).toEqual({});
    });
```

```
test("should create single key and value", () => {
        const input = [{ park_id: 1, park_name: "NC" }];
        const expectedResult = { NC: 1 };

        const result = createRefObject(input, "park_name", "park_id");
        expect(result).toEqual(expectedResult);
    });
```

```
test("should create multiple keys and values", () => {
        const input = [
            { park_id: 1, park_name: "NC" },
            { park_id: 2, park_name: "NC2" },
        ];
        const expectedResult = { NC: 1, NC2: 2 };

        const result = createRefObject(input, "park_name", "park_id");

        expect(result).toEqual(expectedResult);
    });
```

```
test("should not mutate input array", () => {
        const input = [
            { park_id: 1, park_name: "NC" },
            { park_id: 2, park_name: "NC2" },
        ];
        const inputCopy = [
            { park_id: 1, park_name: "NC" },
            { park_id: 2, park_name: "NC2" },
        ];

        createRefObject(input, "park_name", "park_id");

        expect(input).toEqual(inputCopy);
    });
```

## prepareRidesData

```
test("should return empty array when passed no data in array", () => {
        expect(prepareRidesData([], [])).toEqual([]);
    });
```

```
test("should change appropriate key to corresponding id in single object passed", () => {
        const ridesInput = [
            {
                ride_name: "Tidal Wave",
                year_opened: 2000,
                park_name: "Thorpe Park",
                votes: 1,
            },
        ];

        const parksInput = [
            {
                park_id: 1,
                park_name: "Thorpe Park",
            },
        ];

        const expected = [
            {
                ride_name: "Tidal Wave",
                year_opened: 2000,
                park_id: 1,
                votes: 1,
            },
        ];

        const result = prepareRidesData(ridesInput, parksInput);

        expect(result).toEqual(expected);
    });
```

```
test("should change appropriate key to corresponding ids when passed multiple objects", () => {
        const ridesInput = [
            {
                ride_name: "Tidal Wave",
                year_opened: 2000,
                park_name: "Thorpe Park",
                votes: 1,
            },
            {
                ride_name: "Nemesis",
                year_opened: 2000,
                park_name: "Alton",
                votes: 1,
            },
        ];
        const parksInput = [
            {
                park_id: 1,
                park_name: "Thorpe Park",
            },
            {
                park_id: 2,
                park_name: "Alton",
            },
        ];
        const expected = [
            {
                ride_name: "Tidal Wave",
                year_opened: 2000,
                park_id: 1,
                votes: 1,
            },
            {
                ride_name: "Nemesis",
                year_opened: 2000,
                park_id: 2,
                votes: 1,
            },
        ];
        const result = prepareRidesData(ridesInput, parksInput);

        expect(result).toEqual(expected);
    });
```

```
 test("should not mutate input arrays",
```

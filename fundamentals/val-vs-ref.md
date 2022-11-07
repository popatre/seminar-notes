# Seminar Overview

This seminar covers how to approach writing tests for function purity. There are 2 main things to consider,

1. How can we use jest to test for mutation of nested objects (e.g. array containing many objects).
2. How can we use jest to test for newness of objects for pure functions

# Seminar Outline

Discuss with students a function you're are going to build using TDD to demonstrate mutation e.g. `cancelMemberships()`

Consider providing them with an understanding of the end goal implementation by showing them what the most complex input/output should look like.

```js
const members = [
  { name: 'Paul', status: 'active' },
  { name: 'Vel', status: 'active' }
];
​
cancelMemberships(members) // ---> [{ name: 'Paul', status: 'cancelled'  },{ name: 'Vel',  status: 'cancelled'  }]
```

​
Implement the function with TDD with the students help where possible. Ensure you are able to demo:
a test confirming the array returned is entirely new
a test confirming there is no mutation to the input
​

## Example testing flow

An example of the testing order would look like:

-   Empty array
-   New array
-   One membership already cancelled
-   One membership not yet cancelled
-   Multiple
-   Testing for mutation!!
-   (optional) new objects in the array

Build up the tests with the students and discuss the tests. Getting weaker students to do the earlier stages now they've had some practice TDD is a nice confidence builder for them.

```js
test("returns an empty array when there are no members", () => {
    const input = [];
    expect(cancelMemberships(input)).toEqual([]);
});

function cancelMemberships(members) {
    return members;
}
```

```js
test("returns a new array", () => {
    const input = [];
    // toBe uses references rather than contents
    expect(cancelMemberships(input)).not.toBe(input);
});

function cancelMemberships(members) {
    // change to return members to see a failing test
    return [];
}
```

```js
test("returns unchanged object when passed single member already cancelled", () => {
    const input = [{ name: "Paul", status: "cancelled" }];
    const expected = [{ name: "Paul", status: "cancelled" }];
    expect(cancelMemberships(input)).toEqual(expected);
});

function cancelMemberships(members) {
    return [members[0]];
}
```

```js
// putting expected into a variable for neatness
test("changes a single order to salad", () => {
    const input = [{ name: "Paul", status: "active" }];
    const expected = [{ name: "Paul", status: "cancelled" }];
    expect(cancelMemberships(input)).toEqual(expected);
});

function cancelMemberships(members) {
    if (members.length === 0) return [];

    members[0].status = "cancelled";
    return [members[0]];
    // return members.map((member) => {
    //     member.status = "cancelled";
    //     return member;

    //     // if the students remember that they shouldn't be mutating these nested objects then
    //     // it's fine to go straight to the below. Don't force them to do it incorrectly as they
    //     // will copy you even if you tell them your only doing it for examples sake xD

    //     // const newOrder = { ...member };
    //     // newOrder.status = 'cancelled';
    //     // return newOrder;
    // });
}
```

```js
test("changes multiple members to cancelled", () => {
    const input = [
        { name: "Paul", status: "active" },
        { name: "Vel", status: "active" },
    ];
    const expected = [
        { name: "Paul", status: "cancelled" },
        { name: "Vel", status: "cancelled" },
    ];
    expect(cancelMemberships(input)).toEqual(expected);
});

function cancelMemberships(members) {
    return members.map((member) => {
        member.status = "cancelled";
        return member;
    });
}
```

The test for mutation is one that students will traditionally struggle to come up with themselves. A helpful way to think about tests like this is that the test is simulating real world use of the function. So we setup a scenario (arrange), use the function we want to test (act) and then check that what we wanted happened (assert).

```js
test("doesn't mutate the original input", () => {
    // arrange
    const input = [
        { name: "Paul", status: "active" },
        { name: "Vel", status: "active" },
    ];
    const unchangedOrders = [
        { name: "Paul", status: "active" },
        { name: "Vel", status: "active" },
    ];
    // act
    cancelMemberships(input);
    // assert
    expect(input).toEqual(unchangedOrders);
});

function cancelMemberships(members) {
    return members.map((member) => {
        // copy the objects to new references before mutating
        const newOrder = { ...member };
        newOrder.status = "cancelled";
        return newOrder;
    });
}
```

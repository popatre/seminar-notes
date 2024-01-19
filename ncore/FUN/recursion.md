# Recursion

figjam - https://www.figma.com/file/Jw3YltFp2F64D6pp6u2dWx/Recursion-Seminar-Stuff?type=whiteboard&node-id=0-1&t=kWSh3Dt39ugtcZyM-0

Session plan - https://docs.google.com/document/d/1pioWL9-uSq_1-QbGUZ8g1MYTC19NpPmzaXZhOELmhMY/edit

Python tutor - https://pythontutor.com/render.html#code=function%20countIceCreams%28arr%29%20%7B%0A%20%20%20%20let%20count%20%3D%200%3B%0A%0A%20%20%20%20for%20%28const%20item%20of%20arr%29%20%7B%0A%20%20%20%20%20%20%20%20if%20%28Array.isArray%28item%29%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20//recursive%20step%0A%20%20%20%20%20%20%20%20%20%20%20%20count%20%2B%3D%20countIceCreams%28item%29%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20if%20%28item%20%3D%3D%3D%20%22iceCream%22%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20//base%20case%0A%20%20%20%20%20%20%20%20%20%20%20%20count%2B%2B%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20return%20count%3B%0A%7D%0A%0Aconst%20totalIceCreamSearch%20%3D%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%5B%22iceCream%22%5D,%0A%20%20%20%20%20%20%20%20%20%20%20%20%22sadness%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%5B%5B%22iceCream%22%5D,%20%22sadness%22%5D,%0A%20%20%20%20%20%20%20%20%20%20%20%20%5B%5B%5B%22iceCream%22,%20%22sadness%22%5D,%20%22iceCream%22%5D%5D,%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%0A%20%20console.log%28countIceCreams%28totalIceCreamSearch%29%29%3B&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false

## Tests are written

-   Discuss when need recursion here

```js
function countIceCreams(arr) {
    let count = 0;
    for (const item of arr) {
        if (Array.isArray(item)) {
            count += countIceCreams(item);
        } else if (item === "iceCream") count++;
    }
    return count;
}
```

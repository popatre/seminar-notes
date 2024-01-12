# Form Validation

Begin with an HTML form set up as in the lecture

### 1. Add client-side validation

#### Learning Objectives

-   Understand the difference between client side validation and server side validation.
-   Understand the impact on UX when validating user input.
-   Be able to add event listeners at appropriate times to provide feedback before onsubmit, e.g. onchange, onblur.
-   Understand `a11y` considerations to make when providing feedback via:
    -   style / visual indicators
    -   text info
-   Be able to access the element that triggered the event using `event.target`

#### Guidance

1. Lead a discussion about validation and client side vs server side in a larger scale project that uses an api. Client side validation is faster, uses less data (because no request) and better UX.

2. Link up a .js file and discuss what events to track input on (blur, change etc) and, for just one input box add the appropriate event listener (can introduce event.target when making flexible later). Mention the benefits of `addEventListener` over `on[event]` (the former allows multiple event handlers to be attached, the latter would overwrite ). Extract out functions out so event listeners are not inline.

_Note: that `onblur` triggers when focus is lost, `onchange` triggers when focus is lost but only if the contents have 'changed' in some way (different to React onChange)._

3. Colour is a good indicator of validity for many (i.e. if there is a language barrier), so change colour of input box based using css classes, discussing benefits of classList over .style / .setAttribute.

4. Also need text accompanying the colour change for accessibility and general UX. Recap how to .createElement, .innerText (warding away from innerHtml) and .appendChild in relation to label as parent node.

5. Make this validate function more flexible - recap how to access the content of the specific input box experiencing the change/blur event using `event.target.value`. (If time, use querySelectorAll and show .forEach to attach the eventListener to multiple inputs.)

### 2. Add extra form submit functionality

#### Learning Objectives

-   Understand that we can allow extra validation functionality to our form submits

#### Guidance

1. Add condition to handleSubmit to only redirect to welcomePage.html if input boxes are all valid (e.g. using `classList.contains('valid')`)

```js
form.addEventListener("submit", (event) => {
    if (
        !userNameInput.classList.contains("valid") ||
        !phoneNumberInput.classList.contains("valid")
    ) {
        event.preventDefault();
    }
});
```

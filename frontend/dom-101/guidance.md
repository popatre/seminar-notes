# Semantic HTML

-   Send out this [article](https://www.semrush.com/blog/semantic-html5-guide/) first thing

Start off with `div-soup`

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <div>
            <div id="title" class="heading">My Shopping Lists</div>
            <div class="heading">This weeks list:</div>
            <div id="shopping-list">
                <div>Bread</div>
                <div>Potatoes</div>
                <div>Tomatoes</div>
            </div>
        </div>
        <div>
            <div class="info">Extra info, socials and all that</div>
        </div>
    </body>
</html>
```

-   Talk about how the use of semantic html improves the quality of this page with respect to a11y and dev experience.

Refactor into the following with the help of the students

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Shopping Lists</title>
        <script src="./example1.js" defer></script>
    </head>
    <body>
        <main>
            <h1 id="title" class="heading">My Shopping Lists</h1>
            <h2 class="heading">This weeks list:</h2>
            <ol id="shopping-list">
                <li>Eggs</li>
                <li>Milk</li>
                <li>Bacon</li>
            </ol>
        </main>
        <footer>
            <p class="info">Extra info, socials and all that</p>
        </footer>
    </body>
</html>
```

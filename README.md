# Friend Finder

## Summary
This is my Friend Finder application. This app allows the user to take a survey. The user is then given a display of the name and photo of the person their scores most closely matched.

## Site Pictures
![Site](./friend-finder.JPG)

## Technologies Used 
- HTML - Used to create elements on the DOM
- JS - Used to manipulate content on HTML
- JQuery - JavaScript library used for DOM manipulation
- Express - Web framework for Node.js
- Heroku - Cloud platform to deploy web applications
- Git - Version control system to track changes to source code
- Github - Hosts repository that can be deployed to GitHub pages

## Code Snippets
The following code starts the server, allowing it to listen to client requests.
```js
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
```

The following code shows the method of retreiving data from the route request. In this case, the JSON object friends is returned to the route /api/friends.
```js
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
```

## Author Links
https://github.com/hagoodj
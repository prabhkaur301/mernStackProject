# Steps:-
## Lesson-1 learnings:- 
* npm init to initialise the node project 
* install dependencies
### Update start script in package.json , it will start the server .
* node server - used in production
* nodemon server - used in dev mode . (because nodemon will automatically restart the server on updates)

* define server.js to run server
* make views that can be used to sendFile in case of 404 instead of plain json
* setup routes in 'routes' folder

## Lesson-2 learnings:- 
### Middlewares:- intermediate between incoming API request and API response
* adds additional functionality to backend API
* used for preliminary data processing before controller
* three types :- built-in, custom, third party

* Built-in :- like express.static, express.json (to manage json)
* Custom:- I made two custom middlewares :- 
- logger ("to log all the requests with timestamp), 
- errorHandler (To log all the errors with message and timestamp)
* Third party- like cors, cookie-parser

### **cors** :- we do not want our API to be used by any url/ anyone , to limit the use we have cors policy in browser (Cross Origin Resource Sharing).
- We can set cors for particular options by giving options of urls in cors() method
const express = require( "express" );
const app = express();
const port = 9091; // default port to listen

app.use((request,response,next)=>{
    console.log("Hello from middleware");
    next();
});

// define a route handler for the default home page
app.get( "/", ( request, response ) => {
    console.log("Serving the response");
    response.send( "Hello world from 9090!" );
} );

app.post("/api/calc",(request,response)=>{
    response.send("Api works");
});

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
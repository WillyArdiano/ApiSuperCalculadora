const express = require( "express" );
const app = express();
const port = 9091; // default port to listen
const bodyparser = require("body-parser");
const calculadora = require("../src/calculadora");

app.use((request,response,next)=>{
    console.log("Hello from middleware");
    next();
});

app.use(bodyparser.json());

// define a route handler for the default home page
app.get( "/", ( request, response ) => {
    console.log("Serving the response");
    response.send( "Hello world from 9090!" );
} );

app.post("/api/calc",(request,response)=>{
    console.log(request.body);
    response.json({
        opr1: request.body.opr1,
        opr2: request.body.opr2,
        opr: request.body.opr,
        res: calculadora.calcular(request.body.opr1,request.body.opr2,request.body.opr)
    });
});

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
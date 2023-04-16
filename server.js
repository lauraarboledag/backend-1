require("dotenv").config()
require ("./database/configuration")
const app = require ("./app")
//const server = require ("./server")

app.get(" /hello", (req, res) => {
    res.json(
        {
            "saludo": "Hola IUD"
        }
    )
 })

 //console.log(mongoConn)
 const port = process.env.PORT;
 app.listen(port, () => {
    console.log( "arrancó por puerto: 5000" )
 })
const mongoose = require("mongoose")

const mongoConn = async () => {
    console.log("estoy intentando conectarme...")
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log ("¡Conexión exitosa con Mongo!")
    }catch(e){
        console.log("Error", e)
        //throw new (`Error de conexión :${e}`)
    }
    
    module.exports = { mongoConn }
}
mongoConn()
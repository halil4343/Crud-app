const mongoose = require("mongoose")

const connectDB = async () => {
    try{
        const con = await mongoose.connect(process.env.DB_URI)
        console.log(`connected to MongoDB ${con.connection.host}`)

    }catch(err){
        console.log(err)
        process.exit(1)
    }
}
module.exports = connectDB
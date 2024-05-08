import mongoose from "mongoose";

const  mongoDBConnection = async () => {
    try {
       await mongoose.connect(process.env.MONGODB_URI)
        .then((res) => {
            console.log(`Database Name : ${res.connection.db.databaseName}`)
            console.log(`Database Port : ${res.connection.port}`)
        }).catch((err) =>  {
            console.log(err.message)
        })

        mongoose.connection.on('connected', () => {
            console.log('Connected to MongoDB Database Cloud ')
        })
        mongoose.connection.on('error', (err) => {
            console.log(err.message)
        })
        mongoose.connection.on('disconnected', () => {
            console.log('Disconnected from MongoDB Database Cloud')
        })
        process.on('SIGINT', async () => {
            await mongoose.connection.close();
            process.exit(0);
        })
    } catch (error) {
        console.log(error.message)
    }
}

export default mongoDBConnection;
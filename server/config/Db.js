import mongoose from 'mongoose';

export const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGU_URL)
        console.log(`DB Connect Successfully ${conn.connection.host}`)
    } catch (error) {
        console.log(`DB Not Connected Successfully due to Error of ${error}`)
    }
}
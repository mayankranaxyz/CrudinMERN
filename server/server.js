import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/Db.js';
import router from './routes/ProductsRoutes.js';

const app = express();
app.use(cors())
app.use(express.json())
dotenv.config()
connectDB()

app.use('/api', router)



const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Server is Running on PORT ${PORT}`)
})
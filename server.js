import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors())

//db connection
connectDB();

//api endpoint

app.use('/api/food',foodRouter)
app.use('/images',express.static('uploads'))

app.get('/', (req,res)=>{
    res.send("API working")
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


const express = require('express')
const dotenv = require('dotenv')
const app = express()
const taskRoutes = require('./routes/taskRoute')
dotenv.config()


const PORT = process.env.PORT;

app.use(express.json());
app.use('/tasks', taskRoutes);
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})
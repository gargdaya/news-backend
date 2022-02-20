// Import the express in typescript file
import express from 'express';
import 'dotenv/config'
import mongoose from 'mongoose';
import webRouter from './routes';
import cors from 'cors';

// Initialize the express engine
const app: express.Application = express();

app.use(express.json());
app.use(cors())
const port = process.env.PORT||3300;
 
 app.use('/apis/',webRouter)
 app.use(express.static(__dirname + '/assets'));
 // DB Connection
mongoose.connect(process.env.DB_URI||'mongodb://localhost:27017/news').then(()=>{
   console.info("Database is Connected ");
});

// Server setup
app.listen(port, () => {
    console.info(`Server is up and running at http://localhost:${port}/`);
});
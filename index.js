import express from 'express';
import cors from 'cors';
import StoryRoute from './routers/StoryRoute.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(StoryRoute)

app.listen(5000, ()=> console.log('Server is running...'));
import express from 'express';
import cors from 'cors';
import StoryRoute from './routers/StoryRoute.js';
import ChapterRoute from './routers/ChapterRoute.js';
import CategoryRoute from './routers/CategoryRoute.js';
import KeywordRoute from './routers/KeywordRoute.js';
import Story_ManagementRoute from './routers/Story_ManagementRoute.js';
import StatusRoute from './routers/StatusRoute.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(StoryRoute)
app.use(ChapterRoute);
app.use(CategoryRoute);
app.use(KeywordRoute);
app.use(Story_ManagementRoute);
app.use(StatusRoute);

app.listen(5000, ()=> console.log('Server is running...'));
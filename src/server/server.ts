import * as express from 'express';
// import mongoose from 'mongoose';

// mongoose
//   .connect('[MONGO_URL]')
//   .then(() => console.log('Connected to DB.'))
//   .catch(console.log);

import apiRouter from './routes/api';

const app = express();

app.disable('x-powered-by');
app.use(express.static('public'));
app.use(apiRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));

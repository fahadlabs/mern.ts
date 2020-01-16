import * as express from 'express';
// import mongoose from 'mongoose';

// mongoose
//   .connect('[MONGO_URL]')
//   .then(() => console.log('Connected to DB.'))
//   .catch(e => console.log(e));

import apiRouter from './routes/api';

const app = express();

app.use(express.static('public'));
app.use(apiRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));

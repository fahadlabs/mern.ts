import * as express from 'express';

// import Person from './../model/Person';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
  res.json({ message: 'Hello World' });
});

export default router;

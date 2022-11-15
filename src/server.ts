import express, { json } from 'express';
import mongoose from 'mongoose';
import { routes } from './router';

const port = 3333;

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    console.log('Connected to MongoDB');

    const app = express();

    app.use(json());
    app.use(routes);

    app.get('/', (req, res) => {
      return res.status(200).json({ message: 'Hello World' });
    });

    app.listen(port, () => {
      console.log(`Server is running on http://localhost/${port}`);
    });
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB', err);
  });

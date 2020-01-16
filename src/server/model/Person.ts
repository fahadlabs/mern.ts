import * as mongoose from 'mongoose';

const Person = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: String, required: true }
});

export default mongoose.model('Person', Person);

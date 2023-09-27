require('dotenv').config()
const mongoose = require('mongoose');

const connectionUri = process.env.MONGO_URI

// Only return documents that match the query criteria exactly.
mongoose.set("strictQuery", true);
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToMongo = async () => {
  try {
    await mongoose.connect(connectionUri, options)
    console.log('Connected to MongoDB!');
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectToMongo
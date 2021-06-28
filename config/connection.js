const mongoose = require('mongoose');

const connection = async () => {
  try {
    mongoose.connect(
      process.env.MONGO_URL,
      {
        useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true
      },
      () => {
        console.log('DB connected');
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connection;
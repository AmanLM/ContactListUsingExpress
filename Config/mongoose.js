const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connecting to MongoDB cloud');
  })
  .catch((err) => {
    console.log(err);
  });


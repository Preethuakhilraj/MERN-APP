const mongoose = require('mongoose');
mongoose.set('debug', true);
require('dotenv').config();

const db=mongoose.connect('mongodb+srv://preethu:preethu@cluster0.eksdofl.mongodb.net/USER?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
  console.log("DB is connected");
})
.catch((error) => {
  console.error('Error in connection', error);
});
mongoose.set('debug', true);
module.exports = db;
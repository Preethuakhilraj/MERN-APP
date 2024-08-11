const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./connection/connection'); // Database connection

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const route = require('./route/route'); // or ./route/otpRoutes if renamed
app.use('/api', route);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});

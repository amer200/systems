require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.listen(process.env.PORT, () => {
    console.log('connected')
})
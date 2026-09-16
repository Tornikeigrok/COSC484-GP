require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { allowedOrigins } = require('./utils/allowedOrigins');
const app = express();

const allowedOr = allowedOrigins(process.env.ALLOWED_ORIGINS);
const serverPort = process.env.SERVER_PORT;

app.use(cors({
    origin: allowedOr,
    credentials: true
}));

app.use(express.json());

if (require.main === module) {
    app.listen(serverPort, () => {
        console.log(`server running on: ${serverPort}`);
    });
}

module.exports = app;

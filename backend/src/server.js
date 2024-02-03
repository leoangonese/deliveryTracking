// imports
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

// attributes
const app = express();
const PORT = 3001;

// start server
app.use(cors());
app.use('/', routes);
app.listen(PORT, () => {
    console.log(`Server started: ${PORT}`);
});

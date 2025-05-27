const express = require('express');
const cors = require('cors');
const morgan = require('morgan')
const gardenRouter = require('./routes/gardenRouter');

const app = express();
app.use(express.json())
app.use(cors())
app.use(morgan())

app.use('/api/gardens', gardenRouter)


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`)
});
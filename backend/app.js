const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const knex = require('knex')(require('./knexfile.js')['development']);

app.use(express.json());
app.use(morgan('dev'));
app.use(
    cors({
        origin: "*",
        methods: 'GET',
    })
)

app.get('/', (req,res) => {
    res.json("test")
})

app.post('/', (req,res) => {
    res.send('test2')
})

const port = 3001;
app.listen(port, () =>
    console.log(`Backend listening at http://localhost:${port}`)
)
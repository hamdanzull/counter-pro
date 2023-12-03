const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
// const { PrismaClient } = require('@prisma/client');
const welcome = require('./routes/welcome');
const count = require('./routes/count');
const set = require('./routes/set');


dotenv.config();
const app = express();
// const prisma = new PrismaClient();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// routes config
app.use(['/count', '/api/count'], count);
app.use(['/set', '/api/set'], set);
app.get(['/', '/api'], welcome);

// app.get('/users', async (req, res) => {
//     const countsData = await prisma.counts.findMany();
//     res.json(countsData);
// });

// Route not found
app.use((req, res, next) => {
    res.status(404).json({ status: "error", message: 'Route not found' });
});

// Server error
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ status: "error", message: 'Internal Server Error' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

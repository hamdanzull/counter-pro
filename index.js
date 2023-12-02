const express = require('express');
const cors = require('cors');
const path = require('path');
const countRoutes = require('./routes/countRoutes');
const setRoutes = require('./routes/setRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// routes config
app.use(['/count', '/api/count'], countRoutes);
app.use(['/set', '/api/set'], setRoutes);

app.get(['/', '/api'], (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

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

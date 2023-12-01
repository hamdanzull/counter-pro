const express = require('express');
const path = require('path');
const countRoutes = require('./routes/countRoutes');
const newRoutes = require('./routes/newRoutes');
const setRoutes = require('./routes/setRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// routes config
app.use(['/new', '/api/new'], newRoutes);
app.use(['/set', '/api/set'], setRoutes);
app.use(['/count', '/api/count'], countRoutes);

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

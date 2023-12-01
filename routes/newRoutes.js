const express = require('express');
const counts = require('./counts');

const router = express.Router();

router.get(['/id/:name_id', '/'], (req, res) => {
    let name_id = req.params.name_id || req.query.id;

    if (!name_id || counts[name_id]) {
        return res.status(400).json({ status: "error", message: `ID of ${name_id} already exists`, count: counts[name_id] || 0 });
    }

    counts[name_id] = 1;
    res.status(201).json({ status: "success", message: `ID of ${name_id} was added successfully`, count: counts[name_id] });
});

module.exports = router;

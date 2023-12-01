const express = require('express');
const counts = require('./counts');

const router = express.Router();

router.get(['/:name_id/:num_count', '/'], (req, res) => {
    let name_id = req.params.name_id || req.query.id;
    let num_count = req.params.num_count || req.query.count;

    if (!name_id || !counts[name_id]) {
        return res.status(404).json({ status: "error", message: `ID of ${name_id}  not found` });
    }

    if (isNaN(num_count)) {
        return res.status(400).json({ status: "error", message: `Invalid count value for ${name_id}. Count should be a number` });
    }

    counts[name_id] = num_count;
    res.status(201).json({ status: "success", message: `Count of ${name_id} was changed successfully`, count: counts[name_id] });
});

module.exports = router;

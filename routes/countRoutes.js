const express = require('express');
const counts = require('./counts');

const router = express.Router();

router.use(['/id/:name_id', '/'], (req, res, next) => {
    let name_id = req.params.name_id || req.query.id;

    if (name_id) {
        if (counts[name_id]) {
            counts[name_id]++;
        }

        console.log(counts);
    }

    next();
});

router.get(['/id/:name_id', '/'], (req, res) => {
    let name_id = req.params.name_id || req.query.id;

    if (!name_id || !counts[name_id]) {
        return res.status(404).json({ status: "error", message: `ID of ${name_id} not found` });
    }

    const count = counts[name_id];
    res.json({ status: "success", message: "Get count successfully", count });
});

module.exports = router;

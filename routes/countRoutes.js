const express = require('express');
const counts = require('./counts');

const router = express.Router();

router.get(['/id/:name_id', '/'], (req, res) => {
    let name_id = req.params.name_id || req.query.id;

    let count = counts[name_id];

    if (counts[name_id]) {
        counts[name_id]++;
        res.json({
            status: "success",
            message: "Get count successfully",
            count
        });
    } else {
        // auto create new ID
        counts[name_id] = 1;
        console.log(`Success create ID "${name_id}"`);
        res.json({
            status: "success",
            message: `ID of '${name_id}' was added and get count successfully`,
            count: counts[name_id]
        });
    }

    console.log(counts);
});

module.exports = router;
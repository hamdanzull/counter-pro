const express = require('express');
const counts = require('./counts');

const router = express.Router();

router.get(['/:name_id/:num_count', '/'], (req, res) => {
    let name_id = req.params.name_id || req.query.id;
    let num_count = req.params.num_count || req.query.count;


    if (!isNaN(num_count)) {
        if (counts[name_id]) {
            counts[name_id] = num_count;
            res.status(201).json({
                status: "success",
                message: `Count of '${name_id}' was changed successfully`,
                count: counts[name_id]
            });
        } else {
            counts[name_id] = num_count;
            res.status(202).json({
                status: "success",
                message: `ID of '${name_id}' was addded successfully and the count was changed`,
                count: counts[name_id]
            });
        }
    } else {
        return res.status(400).json({ status: "error", message: `Invalid count value for '${name_id}'. Count should be a number` });
    }
});

module.exports = router;

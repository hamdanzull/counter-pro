const express = require('express');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

router.get(['/:name_id/:num_count', '/'], async (req, res) => {
    let name_id = req.params.name_id || req.query.id;
    let num_count = req.params.num_count || req.query.count;

    const foundId = await prisma.counts.findUnique({
        where: { name_id }
    });

    if (!isNaN(num_count)) {
        if (foundId) {
            const setCount = await prisma.counts.update({
                where: { name_id },
                data: { count: parseInt(num_count) }
            });

            res.status(201).json({
                status: "success",
                message: `The count of ID '${setCount.name_id}' was successfully changed`,
                count: setCount.count
            });

            // log
            console.log("Update:", setCount);
        } else {
            const addNewId = await prisma.counts.create({
                data: { name_id, count: parseInt(num_count) }
            });

            res.status(202).json({
                status: "success",
                message: `The ID '${addNewId.name_id}' was added and the count was successfully changed`,
                count: addNewId.count
            });

            // log
            console.log("Create:", addNewId);
        }
    } else {
        return res.status(400).json({ status: "error", message: `Invalid count value for '${name_id}'. Count should be a number` });
    }
});

module.exports = router;
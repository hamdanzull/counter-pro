const express = require('express');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

router.get(['/id/:name_id', '/'], async (req, res) => {
    let name_id = req.params.name_id || req.query.id;
    const foundId = await prisma.counts.findUnique({
        where: { name_id }
    });

    if (foundId) {
        const updateCount = await prisma.counts.update({
            where: { name_id },
            data: { count: foundId.count + 1 }
        });

        res.json({
            status: "success",
            message: `The count of ID '${updateCount.name_id}' was successfully changed`,
            count: updateCount.count
        });

        // log
        console.log("Update:", updateCount);
    } else {
        const addNewId = await prisma.counts.create({
            data: { name_id, count: 1 }
        });

        res.json({
            status: "success",
            message: `The ID '${addNewId.name_id}' was added and the count was successfully changed`,
            count: addNewId.count
        });

        // log
        console.log("Create:", addNewId);
    }

});

module.exports = router;
const express = require('express');

const router = express.Router();

router.get(['/', '/api'], (req, res) => {
    res.send(`
    <style>
        body {
            font-family: 'Courier New', Courier, monospace;
            font-size: 10px;
            color: #ffffff;
            background-color: #121212;
        }
        th, td {
        padding: 0 10px;
        }
    </style>

    <body>
        <h2>HOW TO USE</h2>
        <table>
            <tr>
                <th>Description</th>
                <th>Params</th>
                <th>Query</th>
            </tr>
            <tr>
                <td>Get counter</td>
                <td>/count/id/name_id</td>
                <td>/count/?id=name_id</td>
            </tr>
            <tr>
                <td>Set counter</td>
                <td>/set/name_id/num_count</td>
                <td>/set?id=name_id&count=num_count</td>
            </tr>
        </table><br>

        <h2>RESULT</h2>
        <table>
            <tr>
                <th>Description</th>
                <th>Code</th>
                <th>Response</th>
            </tr>
            <tr>
                <td>Get counter</td>
                <td>200</td>
                <td>{"status":"success","message":"The ID 'name_id' was added and the count was successfully changed","count":1}</td>
            </tr>
            <tr>
                <td></td>
                <td>200</td>
                <td>{"status":"success","message":"The count of ID 'name_id' was successfully changed","count":2}</td>
            </tr>
            <tr>
                <td>Set counter</td>
                <td>202</td>
                <td>{"status":"success","message":"The ID 'name_id' was added and the count was successfully changed","count":"1000"}</td>
            </tr>
            <tr>
                <td></td>
                <td>201</td>
                <td>{"status":"success","message":"The count of ID 'name_id' was successfully changed","count":"1000"}</td>
            </tr>
            <tr>
                <td></td>
                <td>400</td>
                <td>{"status":"error","message":"Invalid count value for 'name_id'. Count should be a number"}</td>
            </tr>
        </table><br>

        <h2>OTHER RESULT</h2>
        <table>
            <tr>
                <th>Code</th>
                <th>Response</th>
            </tr>
            <tr>
                <td>404</td>
                <td>{"status":"error","message":"Route not found"}</td>
            </tr>
            <tr>
                <td>500</td>
                <td>{"status":"error","message":"Internal Server Error"}</td>
            </tr>
        </table><br>
    </body>
    `);
});

module.exports = router;
var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');

const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "172.18.0.2",
    user: "root",
    database: "store",
    password: "3313"
}).promise();

router.post('/add', async function(req, res, next) {
    const token = req.body.token,
        game_id = req.body.game_id;

    if (token === undefined || game_id === undefined) {
        res.send("404");
    } else {
        let user_id = await connection.execute(`SELECT user_id FROM user_sessions WHERE uuid = ?`, [token])

        connection.execute(`SELECT * FROM cart WHERE user_id = ? AND game_id = ?`, [user_id[0][0].user_id, game_id])
            .then((response) => {
                if (response[0].length > 0) {
                    res.send("501");
                } else {
                    connection.execute(`INSERT INTO cart (user_id, game_id) VALUES (?,?)`, [user_id[0][0].user_id, game_id])
                        .then(() => {
                            res.send("200");
                        })
                }
            })
    }
})

router.post('/get', async function(req, res, next) {
    const token = req.body.token

    if (token === undefined) {
        res.send("404");
    } else {
        let user_id = await connection.execute(`SELECT user_id FROM user_sessions WHERE uuid = ?`, [token])

        await connection.execute(`SELECT * FROM cart WHERE user_id = ? `, [user_id[0][0].user_id])
            .then(async (response) => {
                res.send(response[0]);
            })
    }
})

router.post('/remove', async function(req, res, next) {
    const token = req.body.token,
        game_id = req.body.game_id

    if (token === undefined || game_id === undefined) {
        res.send("404");
    } else {
        let user_id = await connection.execute(`SELECT user_id FROM user_sessions WHERE uuid = ?`, [token])

        connection.execute(`DELETE FROM cart WHERE user_id = ? AND game_id = ?`, [user_id[0][0].user_id, game_id])
            .then((response) => {
                res.send("200");
            })
    }
})
module.exports = router;

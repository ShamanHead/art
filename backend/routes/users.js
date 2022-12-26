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

router.post('/login', function(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;

    if (email === undefined || password === undefined) {
        res.send("404");
    } else {
        connection.execute(
            `SELECT * FROM users WHERE email = ? AND password = ?`, [email, password]
        ).then(response => {
            if (response[0].length > 0) {
                let uuid = uuidv4();
                connection.execute(
                    `INSERT INTO user_sessions (user_id, timestamp, uuid) VALUES (?,?,?)`,
                    [response[0][0].id, Date.now(), uuid]
                ).then(response => res.send(uuid));
            } else {
                res.send("501")
            }
        })
    }
})

router.post('/logout', function(req, res, next) {

    let token = req.body.token;

    if (token === undefined) {
        res.send("404");
    } else {
        connection.execute(`DELETE FROM user_sessions WHERE uuid = ?`, [token])
            .then(() => {
                res.send("200")
            });
    }
})

router.post('/register', function(req, res, next) {

    let name = req.body.name,
        email = req.body.email,
        password = req.body.password;

    if (name === undefined || email === undefined || password === undefined) {
        res.send("404");
        console.log(req.body)

        return;
    }

    connection.execute(`SELECT * FROM users WHERE email = ? AND password = ?`, [email, password]).then(
        (response) => {
            if (response[0].length > 0) {
                res.send("501");
            } else {
                connection.execute(
                    `INSERT INTO users (name, password, email) VALUES (?,?,?)`,
                    [name, password, email])
                    .then((response) => {
                        uuid = uuidv4();
                        connection.execute(
                            `INSERT INTO user_sessions (user_id, timestamp, uuid) VALUES (?,?,?)`,
                            [response[0].insertId, Date.now(), uuid])
                            .then(response => res.send(uuid))
                    })
            }
        }
    )
})

router.post('/get', function(req, res, next) {

    let token = req.body.token;

    if (token === undefined) {
        res.send("404");
    } else {
        connection.execute(`SELECT user_id FROM user_sessions WHERE uuid = ?`, [token])
            .then((response) => {
                connection.execute(`SELECT * FROM users WHERE id = ?`, [response[0][0].user_id])
                    .then((response) => {
                        res.send(response[0][0]);
                    })
            });
    }
})
module.exports = router;

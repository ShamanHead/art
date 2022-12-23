var express = require('express');
var router = express.Router();

const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "172.18.0.2",
    user: "root",
    database: "store",
    password: "3313"
}).promise();
/* GET users listing. */
router.get('/', async function(req, res, next) {
    await connection.query(
        `SELECT id FROM games`,
    ).then(async (response) => {
        let result = [];

        for (let i = 0; i < response[0].length; i++) {
            let game = response[0][i]

            console.log(game);
            let gameData = await connection.execute(`
                SELECT *
                FROM games 
                WHERE games.id = ?`, [game.id]
            ).then(response => response[0][0])

            let sale = await connection.execute(`
                SELECT sale_price
                FROM sales
                WHERE game_id = ?`, [game.id]
            ).then(response => response[0]);

            if (sale[0] !== undefined) {
                gameData.sale_price = sale[0].sale_price;
            }

            let chars = await connection.execute(`
                SELECT * 
                FROM characteristics
                WHERE game_id = ?`, [gameData.id]
            ).then((response) => { return response[0] });

            let genre = await connection.execute(`
                SELECT * 
                FROM games_genre
                JOIN genres 
                ON genres.id = games_genre.genre_id
                WHERE game_id = ?`, [gameData.id]
            ).then(response => response[0])

            if (genre[0] !== undefined) {
                gameData.genre = genre[0].name;
            }

            result.push([gameData, chars]);
        }
        res.send(result);
    })
});

router.get('/:id', async function(req, res, next) {
    let gameData = await connection.execute(`
       SELECT *
       FROM games 
       WHERE games.id = ?`, [req.params.id]
    ).then(response => response[0][0])

    let sale = await connection.execute(`
       SELECT sale_price
       FROM sales
       WHERE game_id = ?`, [req.params.id]
    ).then(response => response[0]);

    if (sale[0] !== undefined) {
        gameData.sale_price = sale[0].sale_price;
    }

    let chars = await connection.execute(`
       SELECT * 
       FROM characteristics
       WHERE game_id = ?`, [req.params.id]
    ).then((response) => { return response[0] });

    let genre = await connection.execute(`
                SELECT * 
                FROM games_genre
                JOIN genres 
                ON genres.id = games_genre.genre_id
                WHERE game_id = ?`, [gameData.id]
    ).then(response => response[0])

    if (genre[0] !== undefined) {
        gameData.genre = genre[0].name;
    }

    res.send([gameData, chars]);
});
module.exports = router;

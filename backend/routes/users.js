var express = require('express');
var router = express.Router();

const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "172.18.0.2",
    user: "root",
    database: "store",
    password: "3313"
}).promise();

router.get('/', function(req, res, next) {
    // render to views/user/add.ejs
    res.render('auth/login', {
        title: 'Login',
        email: '',
        password: ''
    })
})


//authenticate user
router.post('/login', function(req, res, next) {

    var email = req.body.email;
    var password = req.body.password;

    connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], function(err, rows, fields) {
        if (err) throw err

        // if user not found
        if (rows.length <= 0) {
            req.flash('error', 'Please correct enter email and Password!')
            res.redirect('/login')
        }
        else { // if user found
            // render to views/user/edit.ejs template file
            req.session.loggedin = true;
            req.session.name = name;
            req.send(true)
        }
    })

})

router.post('/login', function(req, res, next) {

    var email = req.body.email;
    var password = req.body.password;

    connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], function(err, rows, fields) {
        if (err) throw err

        // if user not found
        if (rows.length <= 0) {
            req.flash('error', 'Please correct enter email and Password!')
            res.redirect('/login')
        }
        else { // if user found
            // render to views/user/edit.ejs template file
            req.session.loggedin = true;
            req.session.name = name;
            req.send(true)
        }
    })

})

// Logout user
router.get('/logout', function(req, res) {
    req.session.destroy();
    req.flash('success', 'Login Again Here');
    res.redirect('/login');
});
module.exports = router;

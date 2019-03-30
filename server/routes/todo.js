let express = require('express');
let router = express.Router();

let jwt = require('jsonwebtoken');

let passport = require('passport');

let todoController = require('../controllers/todo');

function requireAuth(req, res, next) {
    // check if the user is logged in
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

/* GET todo List page - READ Operation */
router.get('/', todoController.displayToDoList);

/* GET request - Display Add page */
router.get('/add', todoController.displayAddPage);

/* POST request - Add new todo in database */
router.post('/add', todoController.processAddPage);

/* GET request - Display Edit page */
router.get('/edit/:id', todoController.displayEditPage);

/* POST request - Update the database with data from the Edit Page */
router.post('/edit/:id', todoController.processEditPage);

/* GET request to perform the delete action */
router.get('/delete/:id', todoController.performDelete);

module.exports = router;
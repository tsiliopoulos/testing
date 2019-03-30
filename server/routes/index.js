let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
//router.get('/', indexController.displayHomePage);

/* GET about page. */
//router.get('/about', indexController.displayAboutPage);

/* GET projects page. */
//router.get('/projects', indexController.displayProjectsPage);

/* GET services page. */
//router.get('/services', indexController.displayServicesPage);

/* GET contact page. */
//router.get('/contact', indexController.displayContactPage);

/* POST - processes User Login */
router.post('/login', indexController.processLoginPage);

/* POST - processes User Register */
router.post('/register', indexController.processRegisterPage);

/* GET - perform User Logout */
router.get('/logout', indexController.performLogout);

module.exports = router;

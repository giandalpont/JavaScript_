const express = require("express");
const router = express.Router();

router.get('/', (request, response, next)=> {
    response.render('login', {
        menssgem: null,
        title: 'Login',
    });
});

module.exports = router;
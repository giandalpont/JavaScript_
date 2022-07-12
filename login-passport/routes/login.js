const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get('/', (request, response, next)=> {
    let menssgem = null;	
    
    if (request.query.fail) {
        menssgem = "Login failed";
    }

    response.render("login", {
        title: "Login",
        menssgem,
    });
});

router.post('/', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login?fail=true',
}))

module.exports = router;
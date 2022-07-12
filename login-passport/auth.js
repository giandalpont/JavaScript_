const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;

const users = [
  {
    id: 1,
    username: "admin",
    email: "john@gmail.com",
    // password: '123',
    password: "$2a$06$HT.EmXYUUhNo3UQMl9APmeC0SwoGsx7FtMoAWdzGicZJ4wR1J8alW",
  },
];

module.exports = function (passport) {
  console.log("auth.js");
  function findUser(username) {
    console.log("findUser", username);
    return users.find((user) => user.username === username);
  }

  function findUserById(id) {
    console.log("findUserById", id);
    return users.find((user) => user.id === id);
  }

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    try {
      const user = findUserById(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  });

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    try {
      const user = findUserById(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  });

  passport.use(
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
      },
      (username, password, done) => {
        try {
          const user = findUser(username);

          // usuário inexistente
          if (!user) {
            return done(null, false);
          }

          // comparando as senhas
          const isValid = bcrypt.compareSync(password, user.password);
          if (!isValid) return done(null, false);

          return done(null, user);
        } catch (err) {
          done(err, false);
        }
      },
    ),
);
};

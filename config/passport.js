const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;
const db = require("../models");
const tokens = require("../utils/tokens");

// this file contains two different methods of authentication: Local and Bearer Strategy
/**
 * Return a random int, used by `utils.getUid()`.
 *
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 * @api private
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Return a unique identifier with the given `len`.
 *
 * @param {Number} length
 * @return {String}
 * @api private
 */
function getUid(length) {
  let uid = '';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charsLength = chars.length;

  for (let i = 0; i < length; ++i) {
    uid += chars[getRandomInt(0, charsLength - 1)];
  }

  return uid;
}

// https://github.com/jaredhanson/oauth2orize
// https://github.com/awais786327/oauth2orize-examples
/**
 * LocalStrategy: passport will use ls when you login and it verifies the user 
 *
 * This strategy is used to authenticate users based on a username and password.
 * Anytime a request is made to authorize an application, we must ensure that
 * a user is logged in before asking them to approve the request.
 */
passport.use(new LocalStrategy(
  (username, password, done) => {
    // db.users.findByUsername(username, (error, user) => {
    //   if (error) return done(error);
    //   if (!user) return done(null, false);
    //   if (user.password !== password) return done(null, false);
    //   return done(null, user);
    // });

    console.log("CCCCC Trying to find user ...");
    db.Users.findOne({
      where: {
        userName: username
      }
    }).then(function(user) {
      // if (!user) return done(null, false);
      if (user.password !== password) return done(null, false);

      // Everything validated, return the token
      const token = getUid(256);
      // db.accessTokens.save(token, user.id, client.clientId, (error) => {
      tokens.save(token, user.id, null, (error) => {
        if (error) return done(error);
        // Call `done(err, accessToken, [refreshToken], [params])`, see oauth2orize.exchange.code
        // return done(null, token);
        user.dataValues.token = token; // Attach token to user object so we can access token in UI
        return done(null, user);
      });
    })
    .catch(function(error){
      console.log(error);
      return done(error);
    });
  }
));

passport.serializeUser((user, done) =>  done(null, user.id));

passport.deserializeUser((id, done) => {
  // db.users.findById(id, (error, user) => done(error, user));
  console.log("7777777");
  db.Users.findOne({
    where: {
      id: id
    }
  }).then(function(user) {
    return done(null, user);
  })
  .catch(function(error){
    console.log(error);
    return done(error);
  });
});

/**
 * BearerStrategy
 *
 * This strategy is used to authenticate either users or clients based on an access token
 * (aka a bearer token). If a user, they must have previously authorized a client
 * application, which is issued an access token to make requests on behalf of
 * the authorizing user.
 */
passport.use(new BearerStrategy(
  (accessToken, done) => {
    // db.accessTokens.find(accessToken, (error, token) => {
    // tokens from the tokens.js file is being used because it has been exported. 
    tokens.find(accessToken, (error, token) => {
      if (error) return done(error);
      if (!token) return done(null, false);
      if (token.userId) {
        // db.users.findById(token.userId, (error, user) => {
        //   if (error) return done(error);
        //   if (!user) return done(null, false);
          // To keep this example simple, restricted scopes are not implemented,
          // and this is just for illustrative purposes.
          // done(null, user, { scope: '*' });
        // });

        db.Users.findOne({
          where: {
            id: token.userId
          }
        }).then(function(user) {
          done(null, user, { scope: '*' });
        })
        .catch(function(error){
          console.log(error);
          return done(error);
        });
      }
    });
  }
));
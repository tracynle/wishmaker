let db = require("../models");
const path = require("path");
let etsyApi = require("../utils/etsyApi");
const passport = require('passport');

module.exports = function(app) {
  // ------- Login authentication -------
  app.post("/api/login", function(req, res, next) {
    // https://github.com/jwalton/passport-api-docs#passportauthenticatestrategyname-options-callback
    // passport.authenticate('local', { successReturnToOrRedirect: '/profile-page', failureRedirect: '/login-page' }, function(err, user, info) {
    
    // may not be the correct spot to authenticate here. need to work on it
    passport.authenticate('local', {}, function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.redirect('/login-page'); }

      console.log("DDDDD authenticated the user:")
      // console.log(user);

      // NEED TO CALL req.login()!!! ???
      // req.login(user, next);
      res.json(user);
    })(req, res, next);
  });

  // When user logs out, they will be redirected to the home page
  app.get("/api/logout", function(req, res, next) {
    req.logout();
    res.redirect('/');
  });

  // --------------- DB User Routes -----------
  // Get/findALL all users (READ)
  app.get("/api/user", function(req, res, next) {
    db.Users.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // ------- Create new user > Add to db (CREATE) -------
  app.post("/api/signup", function(req, res, next) {
    //db.tableName.create(req.body).then(function(dbName) {});
    db.Users.create(req.body).then(function(dbUser) {
      // console.log(res.body);
      console.log(dbUser);
      // console.log(res);
      res.json(dbUser);
    });
  });

  // -------------- DB userLikes Routes Bearer Strategy --------------------
  // ------- Get all likes from the user -------
  app.get("/api/userLikes/", function(req, res, next) {
    console.log("EEEEE Getting user likes");
    // console.log(req.headers);
  
    // may not be the correct spot to authenticate here. need to work on it
    passport.authenticate('bearer', {}, function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.redirect('/login-page'); }

      console.log("FFFFFF authenticated the user:")
      // console.log(user);

      db.UserLikes.findAll({
        where: {
          UserId: user.id
        }
      }).then(function(dbUserLikes) {
        res.json(dbUserLikes);
      });
    })(req, res, next);
  });

  // ------- Posts userlikes into the db -------
  app.post("/api/userLikes/", function(req, res, next) {
    console.log("USERLIKES POSTED IN DB");
    console.log(req.body);

    passport.authenticate('bearer', {}, function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.redirect('/login-page'); }

      console.log("FFFFFF authenticated the user:")

      let data = req.body;
      data.UserId = user.id;

      db.UserLikes.create(data).then(function(dbUserLikes) {
        // console.log(res.body);
        console.log(dbUserLikes);
        // console.log(res);
        res.json(dbUserLikes);
      });
    })(req, res, next);

  });

  // ---- Deletes userlikes in db ------
  app.delete("/api/userLikes/:id", function(req, res, next) {
    db.UserLikes.destroy({
      where: {
        id: req.params.id
      }
    })
  })

  // ----- Finds all userlikes in db -----
  app.get("/api/user/userLikes", function(req, res, next) {
    console.log("FIND ALL USERLIKES");
    console.log(req.query.UserId);
    db.UserLikes.findAll({
      where: {
        UserId: req.query.UserId // where the foreign key is
      }
    }).then(function(dbUserLikes) {
      res.json(dbUserLikes);
    });
  });
  
  // =============================================== //
  // ---- Create new friendship > Add to db (CREATE)
  app.post("/api/friends", function(req, res, next) {
    console.log("FRIENDSHIP MADE");
    // console.log(req.body);
    // console.log(Object.keys(db.Users));
    //db.tableName.create(req.body).then(function(dbName) {});
    db.Users.findOne({
      where: {
        id: req.body.UserId1
      }
    }).then(function(User1) {
      passport.authenticate('bearer', {}, function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.redirect('/login-page'); }
  
        console.log("FFFFFF authenticated the user:")
        // console.log(user);
        db.Users.findOne({
          where: {
            id: user.id
          }
        })
        .then(function(User2) {
          console.log("ADDING USERS ======")

          User1.addFriend2(User2);
          res.json({});
        })
      })(req, res, next);
    });
  });

  app.get("/api/getUserInfo", function(req, res, next) {
    db.Users.findOne({
      where: {
        id: req.query.id
      }
    }).then(function(User1) {
      User1.getFriend1().then(function(friends){
        let friendsNoPassword = friends.map(friend => {
          delete friend.dataValues.password;
          return friend;
        });
        // console.log("These are my friends: ", friendsNoPassword);
        User1.dataValues.friends = friendsNoPassword;
        
        User1.getUserLikes().then(function(wishes){
          User1.dataValues.wishes = wishes;
          console.log("zzzzzz",User1.getUserLikes());
          res.json(User1);

        })
      })
    });
  })


  // =============================================== //
  // ------ Etsy Api Results route -------
  app.get("/api/search/", function(req, res, next){
    console.log("Search results:");
    etsyApi.search(req.query.item).then(function(response) {
      // Make an API call to Etsy's api to do search and return user's search
      res.json(response.data);
    })
    .catch(function(error){
      console.log(error);
    })
  });

  // ------ Etsy Api Images route -------
  app.get("/api/images/", function(req, res, next){
    console.log("Image results:");
    etsyApi.images(req.query.item).then(function(response) {
      // Make an API call to Etsy's api to do search and return user's search
      res.json(response.data);
    })
    .catch(function(error){
      console.log("====== Image error =====", error);
    })
  });
};

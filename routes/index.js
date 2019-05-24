let db = require("../models");
const path = require("path");
let etsyApi = require("../utils/etsyApi");

module.exports = function(app) {
  // --------------- DB User Routes ----------------------------
  // Get/findALL all users (READ)
  app.get("/api/user", function(req, res) {
    db.Users.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });
  // Create new user > Add to db (CREATE)
  app.post("/api/user", function(req, res) {
    //db.tableName.create(req.body).then(function(dbName) {});
    db.Users.create(req.body).then(function(dbUser) {
      // console.log(res.body);
      console.log(dbUser);
      // console.log(res);
      res.json(dbUser);
    });
  });

  // -------------- DB userLikes Routes --------------------
  // Get all likes from the user
  app.get("/api/userLikes/", function(req, res) {
    db.UserLikes.findAll({
      where: {
        UserId: req.query.userId
      }
    }).then(function(dbUserLikes) {
      res.json(dbUserLikes);
    });
  });

  // Create new user > Add to db (CREATE)
  app.post("/api/userLikes/", function(req, res) {
    console.log("=================== ZZZZZZZZZ ===============");
    console.log(req.body);
    //db.tableName.create(req.body).then(function(dbName) {});
    db.UserLikes.create(req.body).then(function(dbUserLikes) {
      // console.log(res.body);
      console.log(dbUserLikes);
      // console.log(res);
      res.json(dbUserLikes);
    });
  });

  app.delete("/api/userLikes/:id", function(req, res) {
    db.UserLikes.destroy({
      where: {
        id: req.params.id
      }
    })
  })

  // -------------- DB user info with likes --------------------
  app.get("/api/user/userLikes", function(req, res) {
    console.log("PRINT TEST");
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
  // Create new friendship > Add to db (CREATE)
  app.post("/api/friends", function(req, res) {
    console.log("ZZZZZZZZZ");
    console.log(req.body);
    console.log(Object.keys(db.Users));
    //db.tableName.create(req.body).then(function(dbName) {});
    db.Users.findOne({
      where: {
        id: req.body.UserId1
      }
    }).then(function(User1) {
      db.Users.findOne({
        where: {
          id: req.body.UserId2
        }
      })
      .then(function(User2) {
        console.log("ADDING USERS========")
        console.log(User1.addFriend1);
        console.log(User1.addFriend2);
        User1.addFriend1(User2);
        res.json({});
      })
    });
  });

  // =============================================== //
  // ------ Etsy Api Results route -------
  app.get("/api/search/", function(req, res){
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
  app.get("/api/images/", function(req, res){
    console.log("====== Image results:");
    etsyApi.images(req.query.item).then(function(response) {
      // Make an API call to Etsy's api to do search and return user's search
      res.json(response.data);
    })
    .catch(function(error){
      console.log("====== Image error =====", error);
    })
  });
};

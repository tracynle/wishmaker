const tokens = {};

module.exports.find = (key, done) => {
  if (tokens[key]) return done(null, tokens[key]);
  return done(new Error('Token Not Found'));
};

module.exports.findByUserIdAndClientId = (userId, clientId, done) => {
  for (const token in tokens) {
    if (tokens[token].userId === userId && tokens[token].clientId === clientId) return done(null, token);
  }
  return done(new Error('Token Not Found'));
};

// saves the users token once they login and it has been authenticated
module.exports.save = (token, userId, clientId, done) => {
  tokens[token] = { userId, clientId };
  console.log("MMMMM saved token: " + token);
  done();
};
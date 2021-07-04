const createUserRepo = require('../users/repositories');

function loadRepositories(db) {
  return (req, res, next) => {
    const repos = {
      User: createUserRepo(db)
    };

    req.repos = repos;

    next();
  };
}

exports.loadRepositories = loadRepositories;

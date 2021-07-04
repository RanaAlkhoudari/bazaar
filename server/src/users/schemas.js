function createUserModel(db) {
  const userSchema = new db.Schema({});

  return db.model('User', userSchema);
}

module.exports = createUserModel;

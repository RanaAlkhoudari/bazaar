function createUserRepo(db) {
  const UserModel = db.models.User;

  async function remove(userId) {
  }

  return {
    remove,
  };
}

module.exports = createUserRepo;

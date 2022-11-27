module.exports = {
  async up(db, client) {

    const doc = {
      "name": "Damon",
      "email": "user@example.lk",
      "password": "21232f297a57a5a743894a0e4a801fc3", //admin 
      "is_verified": true,
    }
    await db.collection('users').insertOne(doc);
  },

  async down(db, client) {


    const query = { email: "user@example.lk" }
    await db.collection('users').deleteOne(query)
  }
};

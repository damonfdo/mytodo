module.exports = {
  async up(db, client) {
    const doc = [
      {
        name: "To Do",
        created_at: new Date()
      },
      {
        name: "In Progress",
        created_at: new Date()
      },
      {
        name: "Done",
        created_at: new Date()
      },
    ]
    // this option prevents additional documents from being inserted if one fails
    const options = { ordered: true };

    await db.collection('status').insertMany(doc, options)
  },

  async down(db, client) {
    //Not Required since the system needs status to function
  }
};

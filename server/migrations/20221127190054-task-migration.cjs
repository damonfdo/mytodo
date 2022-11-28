module.exports = {
  async up(db, client) {
    const user = await db.collection('users').findOne({ email: "user@example.lk" })
    const statCompleted = await db.collection('status').findOne({ name: "Done" })
    const doc = [
      {
        "name": "My First Task",
        "desc": "Dummy to Delete",
        "attachment": "image.png",
        "status": { "$oid": statCompleted._id },
        "user": { "$oid": user._id },
      },
      {
        "name": "My Second Task",
        "desc": "Dummy to Delete",
        "attachment": "image.png",
        "status": { "$oid": statCompleted._id },
        "user": { "$oid": user._id },
      },
      {
        "name": "My Third Task",
        "desc": "Dummy to Delete",
        "attachment": "image.png",
        "status": { "$oid": statCompleted._id },
        "user": { "$oid": user._id },
      },
    ]
    // this option prevents additional documents from being inserted if one fails
    const options = { ordered: true };

    await db.collection('tasks').insertMany(doc, options)
  },

  async down(db, client) {
    // TODO:: Write Down query 
    const query = { desc: { $regex: "Delete" } }
    await db.collection('tasks').deleteMany(query)

  }
};

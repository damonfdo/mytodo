module.exports = {
  async up(db, client) {
    const doc = [
      {
        "name": "My First Task",
        "desc": "Quick Lazy brown fox jumps over is cool!",
        "attachment": "image.png",
        "status": { "$oid": "6382296dddf8b67910552537" }, // Fetch Dynamically
        "user": { "$oid": "63821db3efd4fef41da92c4c" }, // Fetch Dynamically
      },
      {
        "name": "My Second Task",
        "desc": "Quick Lazy brown fox jumps over is cool!",
        "attachment": "image.png",
        "status": { "$oid": "6382296dddf8b67910552537" }, // Fetch Dynamically
        "user": { "$oid": "63821db3efd4fef41da92c4c" }, // Fetch Dynamically
      },
      {
        "name": "My Third Task",
        "desc": "Quick Lazy brown fox jumps over is cool!",
        "attachment": "image.png",
        "status": { "$oid": "6382296dddf8b67910552537" }, // Fetch Dynamically
        "user": { "$oid": "63821db3efd4fef41da92c4c" }, // Fetch Dynamically
      },
    ]
    // this option prevents additional documents from being inserted if one fails
    const options = { ordered: true };

    await db.collection('tasks').insertMany(doc, options)
  },

  async down(db, client) {
    // TODO:: Write Down query 

  }
};

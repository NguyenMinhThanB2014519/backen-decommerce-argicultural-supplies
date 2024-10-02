const db = require("../data/connecttion");

function makeUsersServices() {
  async function readUser() {
    try {
      const [results] = await db.promise().query("SELECT * FROM account");
      return { status: "success", results   };
      // console.log("ascasc");
    } catch (err) {
      console.error("Lỗi truy vấn:", err);
      throw err;
    }
  }

  return { readUser };
}

module.exports = makeUsersServices;

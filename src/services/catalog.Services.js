const db = require("../data/connecttion");

function makeCatalogServices() {
  async function getCatalogs() {
    try {
      const [catalog] = await db.promise().query("SELECT * FROM list");
      return catalog;
    } catch (error) {
      console.error("Error fetching catalog:", error);
      throw error;
    }
  }
  async function getCatalog(id) {
    try {
      const [catalog] = await db
        .promise()
        .query("SELECT * FROM list WHERE listid = ?", [id]);
      return catalog[0];
    } catch (error) {
      console.error("Error fetching catalog:", error);
      throw error;
    }
  }
  return {
    getCatalogs,
    getCatalog,
  };
}

module.exports = makeCatalogServices;

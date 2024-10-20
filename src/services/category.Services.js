const db = require("../data/connecttion");

function makeCatalogServices() {
  async function getCatagories() {
    try {
      const [catalog] = await db.promise().query("SELECT * FROM categories");
      return catalog;
    } catch (error) {
      console.error("Error fetching catalog:", error);
      throw error;
    }
  }
  async function getCatagory(id) {
    try {
      const [catalog] = await db
        .promise()
        .query("SELECT * FROM products WHERE category_id = ?", [id]);
      return catalog[0];
    } catch (error) {
      console.error("Error fetching catalog:", error);
      throw error;
    }
  }
  return {
    getCatagory,
    getCatagories,
  };
}

module.exports = makeCatalogServices;

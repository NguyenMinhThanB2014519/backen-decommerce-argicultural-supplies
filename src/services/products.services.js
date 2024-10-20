const db = require("../data/connecttion");

function makeProductsServices() {
  async function getAllProducts() {
    try {
      const [products] = await db
        .promise()
        .query("CALL getProductsAndCategoryName()");
      return products;
    } catch (error) {
      console.error("error fetching products", error);
      throw error;
    }
  }

  async function getProductsByCategoryId(id) {
    try {
      const [products] = await db
        .promise()
        .query(`CALL LaySanPhamTheoDanhMuc(${id})`);
      return products[0];
    } catch (error) {
      console.error("Error fetching products by category:", error);
      throw error;
    }
  }

  return {
    getAllProducts,
    getProductsByCategoryId,
  };
}

// Xuất makeProductsServices
module.exports = makeProductsServices;

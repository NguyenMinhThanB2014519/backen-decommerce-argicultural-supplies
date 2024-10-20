const makeProductsServices = require("../services/products.services");

async function getProducts(req, res) {
  let products = [];
  try {
    // Gọi hàm factory để tạo đối tượng services
    const productsServices = makeProductsServices();

    // Sử dụng phương thức getAllProducts từ đối tượng services
    products = await productsServices.getAllProducts();

    if (!products || products.length === 0) {
      return res.status(404).json({
        message: "No products found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error: " + error,
    });
  }
  return res.status(200).json(products);
}

async function getProductsByCaterogyId(req, res) {
  try {
    const productsServices = makeProductsServices();
    const productsNameByCategoryId =
      await productsServices.getProductsByCategoryId(req.params.id);
    if (!productsNameByCategoryId) {
      return res.status(404).json({
        message: "prducts is null",
      });
    }
    return res.send(productsNameByCategoryId);
  } catch (error) {
    return res.status(500).json({
      message: "internal server error" + error,
    });
  }
}

module.exports = {
  getProducts,
  getProductsByCaterogyId,
};

const makeCategoryServices = require("../services/category.Services");

async function readCategories(req, res) {
  let category = [];
  try {
    const categoryServices = makeCategoryServices();
    category = await categoryServices.getCatagories();
    if (!category) {
      return res.status(404).json({
        message: "catalog is null",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
  return res.status(200).json(category);
}

async function getCategoryById(req, res, next) {
  try {
    const categoryServices = makeCategoryServices();
    const categoryNameByid = await categoryServices.getCatagory(req.params.id);
    if (!categoryNameByid)
      return res.status(404).json({
        message: "catalog is null",
      });
    return res.send(categoryNameByid);
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
}

module.exports = {
  readCategories,
  getCategoryById,
};

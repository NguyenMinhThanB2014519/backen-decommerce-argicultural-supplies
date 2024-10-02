const makeCatalogServices = require("../services/catalog.Services");

async function readCatalogs(req, res) {
  let catalogs = [];
  try {
    const catalogService = makeCatalogServices();
    catalogs = await catalogService.getCatalogs();
    if (!catalogs) {
      return res.status(404).json({
        message: "catalog is null",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
  return res.status(200).json(catalogs);
}

async function getCatalogById(req, res, next) {
  try {
    const catalogService = makeCatalogServices();
    const catalogId = await catalogService.getCatalog(req.params.id);
    if (!catalogId)
      return res.status(404).json({
        message: "catalog is null",
      });
    return res.send(catalogId);
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
}

module.exports = {
  readCatalogs,
  getCatalogById,
};

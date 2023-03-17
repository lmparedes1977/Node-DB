import saleService from "../services/sale.service.js";

async function createSale(req, res, next) {
  let sale = req.body;
  try {
    if (!sale.value || !sale.date || !sale.clientId || !sale.productId) {
      throw new Error("Valor, data, cliente_id e product_id são obrigatórios");
    }
    //saleService
    sale = await saleService.createSale(sale);
    res.send(sale);
    logger.info(`POST /sale - ${JSON.stringify(sale)}`);
  } catch (err) {
    next(err);
  }
}

async function getSales(req, res, next) {
  try {
    res.send(await saleService.getSales(req.query.productId, req.query.supplierId));
    logger.info("GET /sales");
  } catch (err) {
    next(err);
  }
}

async function getSale(req, res, next) {
  try {
    res.send(await saleService.getSale(req.params.id));
    logger.info("GET /sale");
  } catch (err) {
    next(err);
  }
}

async function updateSale(req, res, next) {
  let sale = req.body;
  try {
    if (
      !sale.value ||
      !sale.date ||
      !sale.clientId ||
      !sale.productId ||
      !sale.saleId
    ) {
      throw new Error("Valor, data, cliente_id e product_id são obrigatórios");
    }
    sale = await saleService.updateSale(sale);
    res.send(sale);
    logger.info(`PUT /sale - ${JSON.stringify(sale)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteSale(req, res, next) {
  try {
    res.send(await saleService.deleteSale(req.params.id));
    res.end();
    logger.info("DELETE /sale");
  } catch (err) {
    next(err);
  }
}

export default {
  createSale,
  getSales,
  getSale,
  deleteSale,
  updateSale,
};

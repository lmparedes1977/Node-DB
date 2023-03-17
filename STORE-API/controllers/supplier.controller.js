import supplierService from "../services/supplier.service.js";

async function createSupplier(req, res, next) {
  let supplier = req.body;
  try {
    if (
      !supplier.name ||
      !supplier.cnpj ||
      !supplier.email ||
      !supplier.phone ||
      !supplier.address
    ) {
      throw new Error(
        "Nome, cnpj, email, telefone e endereço são obrigatórios"
      );
    }
    //supplierService
    supplier = await supplierService.createSupplier(supplier);
    res.send(supplier);
    logger.info(`POST /supplier - ${JSON.stringify(supplier)}`);
  } catch (err) {
    next(err);
  }
}

async function getSuppliers(req, res, next) {
  try {
    res.send(await supplierService.getSuppliers());
    logger.info("GET /suppliers");
  } catch (err) {
    next(err);
  }
}

async function getSupplier(req, res, next) {
  try {
    res.send(await supplierService.getSupplier(req.params.id));
    logger.info("GET /supplier");
  } catch (err) {
    next(err);
  }
}

async function updateSupplier(req, res, next) {
  let supplier = req.body;
  try {
    if (
      !supplier.name ||
      !supplier.cnpj ||
      !supplier.email ||
      !supplier.phone ||
      !supplier.address ||
      !supplier.supplierId
    ) {
      throw new Error(
        "Nome, cnpj, email, telefone, endereço e supplier_id são obrigatórios"
      );
    }
    supplier = await supplierService.updateSupplier(supplier);
    res.send(supplier);
    logger.info(`PUT /supplier - ${JSON.stringify(supplier)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteSupplier(req, res, next) {
  try {
    res.send(await supplierService.deleteSupplier(req.params.id));
    res.end();
    logger.info("DELETE /supplier");
  } catch (err) {
    next(err);
  }
}

export default {
  createSupplier,
  getSuppliers,
  getSupplier,
  deleteSupplier,
  updateSupplier,
};

import supplierRepository from "../repositories/supplier.repository.js";

async function createSupplier(supplier) {
  return await supplierRepository.insertSupplier(supplier);
}

async function getSuppliers() {
  return await supplierRepository.getSuppliers();
}

async function getSupplier(id) {
  return await supplierRepository.getSupplier(id);
}

async function updateSupplier(supplier) {
  return await supplierRepository.updateSupplier(supplier);
}

async function deleteSupplier(id) {
  supplierRepository.deleteSupplier(id);
}

export default {
  createSupplier,
  getSuppliers,
  getSupplier,
  deleteSupplier,
  updateSupplier,
};

import productRepository from "../repositories/product.repository.js";
import supplierRepository from "../repositories/supplier.repository.js";
import productInfoRepository from "../repositories/productInfo.repository.js";

async function createProduct(product) {
  if (await supplierRepository.getSupplier(product.supplierId)) {
    return await productRepository.insertProduct(product);
  }
  throw new Error("Supplier não identificado");
}

async function getProducts() {
  return await productRepository.getProducts();
}

async function getProduct(id) {
  const product = await productRepository.getProduct(id);
  product.info = await productInfoRepository.getProductInfo(parseInt(id));
  return product;
}

async function updateProduct(product) {
  if (await supplierRepository.getSupplier(product.supplierId)) {
    return await productRepository.updateProduct(product);
  }
  throw new Error("Supplier não identificado");
}

async function deleteProduct(id) {
  productRepository.deleteProduct(id);
}

async function createProductInfo(procuctInfo){
  return await productInfoRepository.createProductInfo(procuctInfo);
}

async function updateProductInfo(procuctInfo){
  return await productInfoRepository.updateProductInfo(procuctInfo);
}

async function createReview(review, productId){
  return await productInfoRepository.createReview(review, productId);
}

async function deleteReview(productId, index){
  return await productInfoRepository.deleteReview(productId, index);
}

async function getAllProductsInfo(){
  return await productInfoRepository.getAllProductsInfo();
}

export default {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  createProductInfo,
  updateProductInfo,
  createReview,
  deleteReview,
  getAllProductsInfo
};

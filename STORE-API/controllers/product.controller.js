import productInfoRepository from "../repositories/productInfo.repository.js";
import productService from "../services/product.service.js";

async function createProduct(req, res, next) {
  let product = req.body;
  try {
    if (
      !product.name ||
      !product.description ||
      !product.value ||
      !product.stock ||
      !product.supplierId
    ) {
      throw new Error(
        "Nome, descripion, valeu, stock e supplier_id são obrigatórios"
      );
    }
    //productService
    product = await productService.createProduct(product);
    res.send(product);
    logger.info(`POST /product - ${JSON.stringify(product)}`);
  } catch (err) {
    next(err);
  }
}

async function getProducts(req, res, next) {
  try {
    res.send(await productService.getProducts());
    logger.info("GET /products");
  } catch (err) {
    next(err);
  }
}

async function getProduct(req, res, next) {
  try {
    res.send(await productService.getProduct(req.params.id));
    logger.info("GET /product");
  } catch (err) {
    next(err);
  }
}

async function updateProduct(req, res, next) {
  let product = req.body;
  try {
    if (
      !product.name ||
      !product.description ||
      !product.value ||
      !product.stock ||
      !product.supplierId ||
      !product.productId
    ) {
      throw new Error(
        "Nome, descirpion, value, stock, supplier_id e product_id são obrigatórios"
      );
    }
    product = await productService.updateProduct(product);
    res.send(product);
    logger.info(`PUT /product - ${JSON.stringify(product)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteProduct(req, res, next) {
  try {
    res.send(await productService.deleteProduct(req.params.id));
    res.end();
    logger.info("DELETE /product");
  } catch (err) {
    next(err);
  }
}

async function createProductInfo(req, res, next){
  try{
    const productInfo = req.body;
    if (!productInfo.productId){
      throw new Error("Product_id é obrigatório");
    }
    await productService.createProductInfo(productInfo);
    res.end();
    logger.info(`POST /product/info ${JSON.stringify(productInfo)}`);
  }catch(err){
    next(err);
  }
}

async function updateProductInfo(req, res, next){
  try{
    const productInfo = req.body;
    if (!productInfo.productId){
      throw new Error("Product_id é obrigatório");
    }
    await productService.updateProductInfo(productInfo);
    res.end();
    logger.info(`POST /product/info ${JSON.stringify(productInfo)}`);
  }catch(err){
    next(err);
  }
}

async function createReview(req, res, next){
  try{
    const params = req.body;
    if (!params.review || !params.productId){
      throw new Error("Review e productId são obrigatórios");
    }
    await productService.createReview(params.review, params.productId);
    res.end();
    logger.info(`POST /product/review`);
  }catch(err){
    next(err);
  }
}

async function deleteReview(req, res, next){
  try{
    await productService.deleteReview(req.params.id, req.params.index);
    res.end();
    logger.info(`Delete /product/review`);
  }catch(err){
    next(err);
  }
}

async function getAllProductsInfo(req, res, next){
  try{
    res.send(await productService.getAllProductsInfo());
    logger.info(`GET /productsAll`);
  }catch(err){
    next(err);
  }
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
  getAllProductsInfo,
};

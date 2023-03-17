import saleRepository from "../repositories/sale.repository.js";
import clientRepository from "../repositories/client.repository.js";
import productRepository from "../repositories/product.repository.js";

async function createSale(sale) {
  const product = await productRepository.getProduct(sale.productId);

  if (!(await clientRepository.getClient(sale.clientId)) && !product) {
    throw new Error("Cliente ou Produto não identificado");
  }

  if (product.stock > 0) {
    sale = await saleRepository.insertSale(sale);
    product.stock--;
    await productRepository.updateProduct(product);
    return sale;
  } else {
    throw new Error("Produto fora de estoque");
  }
}

async function getSales(product_id, supplier_id) {
  if (product_id) {
    return await saleRepository.getSalesByProductId(product_id);
  }
  if (supplier_id) {
    return await saleRepository.getSalesBySupplierId(supplier_id);
  }

  return await saleRepository.getSales();
}

async function getSale(id) {
  return await saleRepository.getSale(id);
}

async function updateSale(sale) {
  if (
    (await clientRepository.getClient(sale.clientId)) &&
    (await productRepository.getProduct(sale.productId))
  ) {
    return await saleRepository.updateSale(sale);
  }
  throw new Error("Cliente ou Produto não identificado");
}

async function deleteSale(id) {
  const sale = await saleRepository.getSale(id);
  console.log(sale);
  if (sale) {
    const product = await productRepository.getProduct(sale.productId);
    saleRepository.deleteSale(id);
    product.stock++;
    await productRepository.updateProduct(product);
  } else {
    throw new Error("Venda inexistente.");
  }
}

export default {
  createSale,
  getSales,
  getSale,
  deleteSale,
  updateSale,
};

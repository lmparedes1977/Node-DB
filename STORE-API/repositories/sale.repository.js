import Sale from "../models/sale.model.js";
import Product from "../models/product.model.js";
import Client from "../models/client.model.js";

async function insertSale(sale) {
  try {
    return await Sale.create(sale);
  } catch (err) {
    throw err;
  }
}

async function getSales() {
  try {
    return await Sale.findAll({
      include: [
        {
          model: Product,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

async function getSalesByProductId(product_id) {
  try {
    return await Sale.findAll({
      where: {
        productId: product_id,
      },
      include: [{
        model: Client,
      }],
    });
  } catch (err) {
    throw err;
  }
}

async function getSalesBySupplierId(supplier_id){
  try{
    return await Sale.findAll({
      include: [
        {
          model: Product,
          where: {
            supplierId: supplier_id,
          },
        }
      ]
    });
  }catch(err){
    throw err;
  }
}

async function getSale(id) {
  try {
    return await Sale.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function updateSale(sale) {
  try {
    await Sale.update(sale, {
      where: {
        saleId: sale.saleId,
      },
    });
    return await getSale(sale.saleId);
  } catch (err) {
    throw err;
  }
}

async function deleteSale(id) {
  try {
    return await Sale.destroy({
      where: {
        saleId: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

export default {
  insertSale,
  getSales,
  getSale,
  updateSale,
  deleteSale,
  getSalesByProductId,
  getSalesBySupplierId,
};

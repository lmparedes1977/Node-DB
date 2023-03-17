import db from "../repositories/db.js";
import { Sequelize } from "sequelize";
import Supplier from "./supplier.model.js";

const Product = db.define(
  "products",
  {
    productId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
    },
    value: {
      type: Sequelize.DOUBLE,
    },
    stock: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { underscored: true }
);

Product.belongsTo(Supplier, { foreignKey: "supplierId" });

export default Product;

// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  // DONE: define columns
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false,
      validate: {
        isFloat: true,
      },
    },
    stock: {
      // type: DataTypes.BIGINT, // BIGINT for up to 10-digit integers
      type: DataTypes.INTEGER(10), 
      allowNull: false,
      validate: {
        isNumeric: true,
        len: [1, 10] // Ensure the length is within 10 digits
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        // This references to the `category` model, which has `id`
        model: 'category',
        key: 'id',
    },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;

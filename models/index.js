// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// source of code: https://www.youtube.com/watch?v=HJGWu0cZUe8 (52min 46sec)
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
});

// Tags have many Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

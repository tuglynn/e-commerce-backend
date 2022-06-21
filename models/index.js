// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_ids'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product_tagg'
});
// Tags belongToMany Products (through ProductTag)
Tag.hasMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product_tagging'
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
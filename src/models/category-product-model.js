class CategoryProduct {
  /**
   * @constructor
   * @param {number} categoryId
   * @param {number} productId
   * @param {Date} createdAt
   * @param {Date} updatedAt
   */

  constructor (categoryId, productId, createdAt, updatedAt) {
    this.categoryId = categoryId
    this.productId = productId
    this.createdAt = createdAt || new Date()
    this.updatedAt = updatedAt || new Date()
  }
}

module.exports = CategoryProduct

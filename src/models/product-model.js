class Product {
  /**
   * @constructor
   * @param {number} productId
   * @param {string} name
   * @param {string} description
   * @param {string} sku
   * @param {number} price
   * @param {number} quantity
   * @param {string} image
   * @param {Date} createdAt
   * @param {Date} updatedAt
   * @param {number} isActived
   */

  constructor (
    productId,
    name,
    description,
    sku,
    price,
    quantity,
    image,
    createdAt,
    updatedAt,
    isActived
  ) {
    this.productId = productId
    this.name = name
    this.description = description
    this.sku = sku
    this.price = price
    this.quantity = quantity
    this.image = image
    this.createdAt = createdAt || new Date()
    this.updatedAt = updatedAt || new Date()
    this.isActived = isActived || 1
  }
}

module.exports = Product

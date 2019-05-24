class Category {
  /**
   * @constructor
   * @param {number} categoryId
   * @param {string} name
   * @param {string} description
   * @param {string} image
   * @param {Date} createdAt
   * @param {Date} updatedAt
   * @param {number} isActived
   */

  constructor (categoryId, name, description, image, createdAt, updatedAt, isActived) {
    this.categoryId = categoryId
    this.name = name
    this.description = description
    this.image = image
    this.createdAt = createdAt || new Date()
    this.updatedAt = updatedAt || new Date()
    this.isActived = isActived || 1
  }
}

module.exports = Category

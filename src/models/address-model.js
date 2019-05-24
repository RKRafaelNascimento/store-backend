class Address {
  /**
   * @constructor
   * @param {number} addressId
   * @param {string} street
   * @param {string} number
   * @param {string} complement
   * @param {string} state
   * @param {string} city
   * @param {Date} createdAt
   * @param {Date} updatedAt
   * @param {number} isActived
   */

  constructor (addressId, street, number, complement, state, city, createdAt, updatedAt, isActived) {
    this.addressId = addressId
    this.street = street
    this.number = number
    this.complement = complement
    this.state = state
    this.city = city
    this.createdAt = createdAt || new Date()
    this.updatedAt = updatedAt || new Date()
    this.isActived = isActived || 1
  }
}

module.exports = Address

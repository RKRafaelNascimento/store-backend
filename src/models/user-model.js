class User {
  /**
   * @constructor
   * @param {number} userId
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} password
   * @param {string} email
   * @param {number} addressId
   * @param {Date} createdAt
   * @param {Date} updatedAt
   * @param {number} isActived
   */

  constructor (
    userId,
    firstName,
    lastName,
    password,
    email,
    addressId,
    createdAt,
    updatedAt,
    isActived
  ) {
    this.userId = userId
    this.firstName = firstName
    this.lastName = lastName
    this.password = password
    this.email = email
    this.addressId = addressId
    this.createdAt = createdAt || new Date()
    this.updatedAt = updatedAt || new Date()
    this.isActived = isActived || 1
  }
}

module.exports = User

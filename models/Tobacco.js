/**
 * Creates an instance of Brand.
 *
 * @constructor
 * @param {number} id The unique identifier for the [Brand] object.
 * @param {string} name The name of the [Brand].
 */
module.exports = class Tobacco {
  constructor(id, name, brand, category, subCategory, taste) {
    this.id = id
    this.name = name
    this.brand = brand
    this.category = category
    this.subCategory = subCategory
    this.taste = taste
  }

  getId() {
    return this.id;
  }
}

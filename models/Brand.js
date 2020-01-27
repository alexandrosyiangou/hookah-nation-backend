/**
 * Creates an instance of Brand.
 *
 * @constructor
 * @param {number} id The unique identifier for the [Brand] object.
 * @param {string} name The name of the [Brand].
 */
module.exports = class Brand {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  getId() {
    return this.id;
  }
}

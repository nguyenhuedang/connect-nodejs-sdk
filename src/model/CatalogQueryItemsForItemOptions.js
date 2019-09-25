/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');




/**
 * The CatalogQueryItemsForItemOptions model module.
 * @module model/CatalogQueryItemsForItemOptions
 */

/**
 * Constructs a new <code>CatalogQueryItemsForItemOptions</code>.
 * 
 * @alias module:model/CatalogQueryItemsForItemOptions
 * @class
 */
var exports = function() {
  var _this = this;


};

/**
 * Constructs a <code>CatalogQueryItemsForItemOptions</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CatalogQueryItemsForItemOptions} obj Optional instance to populate.
 * @return {module:model/CatalogQueryItemsForItemOptions} The populated <code>CatalogQueryItemsForItemOptions</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('item_option_ids')) {
      obj['item_option_ids'] = ApiClient.convertToType(data['item_option_ids'], ['String']);
    }
    }
  return obj;
}

/**
 * A set of `CatalogItemOption` IDs to be used to find associated `CatalogItem` will be returned.
 * @member {Array.<String>} item_option_ids
 */
exports.prototype['item_option_ids'] = undefined;



module.exports = exports;




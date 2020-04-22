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
var TerminalCheckoutQueryFilter = require('./TerminalCheckoutQueryFilter');
var TerminalCheckoutQuerySort = require('./TerminalCheckoutQuerySort');




/**
 * The TerminalCheckoutQuery model module.
 * Note: This model is in beta.
 * @module model/TerminalCheckoutQuery
 */

/**
 * Constructs a new <code>TerminalCheckoutQuery</code>.
 * 
 * @alias module:model/TerminalCheckoutQuery
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>TerminalCheckoutQuery</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/TerminalCheckoutQuery} obj Optional instance to populate.
 * @return {module:model/TerminalCheckoutQuery} The populated <code>TerminalCheckoutQuery</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('filter')) {
      obj['filter'] = TerminalCheckoutQueryFilter.constructFromObject(data['filter']);
    }
      if (data.hasOwnProperty('sort')) {
      obj['sort'] = TerminalCheckoutQuerySort.constructFromObject(data['sort']);
    }
    }
  return obj;
}

/**
 * Options for filtering returned `TerminalCheckout`s
 * @member {module:model/TerminalCheckoutQueryFilter} filter
 */
exports.prototype['filter'] = undefined;
/**
 * Option for sorting returned `TerminalCheckout`s
 * @member {module:model/TerminalCheckoutQuerySort} sort
 */
exports.prototype['sort'] = undefined;



module.exports = exports;




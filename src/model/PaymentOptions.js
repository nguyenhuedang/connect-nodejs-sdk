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
 * The PaymentOptions model module.
 * Note: This model is in beta.
 * @module model/PaymentOptions
 */

/**
 * Constructs a new <code>PaymentOptions</code>.
 * 
 * @alias module:model/PaymentOptions
 * @class
 */
var exports = function() {
  var _this = this;


};

/**
 * Constructs a <code>PaymentOptions</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/PaymentOptions} obj Optional instance to populate.
 * @return {module:model/PaymentOptions} The populated <code>PaymentOptions</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('autocomplete')) {
      obj['autocomplete'] = ApiClient.convertToType(data['autocomplete'], 'Boolean');
    }
    }
  return obj;
}

/**
 * Indicates whether the Payment objects created from this `TerminalCheckout` will automatically be COMPLETED or left in an APPROVED state for later modification.
 * @member {Boolean} autocomplete
 */
exports.prototype['autocomplete'] = undefined;



module.exports = exports;




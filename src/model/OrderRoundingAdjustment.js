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
var Money = require('./Money');




/**
 * The OrderRoundingAdjustment model module.
 * @module model/OrderRoundingAdjustment
 */

/**
 * Constructs a new <code>OrderRoundingAdjustment</code>.
 * A rounding adjustment of the money being returned. Commonly used to apply Cash Rounding when the minimum unit of account is smaller than the lowest physical denomination of currency.
 * @alias module:model/OrderRoundingAdjustment
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>OrderRoundingAdjustment</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/OrderRoundingAdjustment} obj Optional instance to populate.
 * @return {module:model/OrderRoundingAdjustment} The populated <code>OrderRoundingAdjustment</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('uid')) {
      obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
    }
      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('amount_money')) {
      obj['amount_money'] = Money.constructFromObject(data['amount_money']);
    }
    }
  return obj;
}

/**
 * Unique ID that identifies the rounding adjustment only within this order.
 * @member {String} uid
 */
exports.prototype['uid'] = undefined;
/**
 * The name of the rounding adjustment from the original sale Order.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * Actual rounding adjustment amount.
 * @member {module:model/Money} amount_money
 */
exports.prototype['amount_money'] = undefined;



module.exports = exports;



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
 * The SearchOrdersFulfillmentFilter model module.
 * @module model/SearchOrdersFulfillmentFilter
 */

/**
 * Constructs a new <code>SearchOrdersFulfillmentFilter</code>.
 * Filter based on [Order Fulfillment](#type-orderfulfillment) information.
 * @alias module:model/SearchOrdersFulfillmentFilter
 * @class
 * @param fulfillmentTypes {Array.<String>} List of `fulfillment types` to filter for. Will return orders if any of its fulfillments match any of the fulfillment types listed in this field. See [OrderFulfillmentType](#type-orderfulfillmenttype) for possible values
 */
var exports = function(fulfillmentTypes) {
  var _this = this;

  _this['fulfillment_types'] = fulfillmentTypes;

};

/**
 * Constructs a <code>SearchOrdersFulfillmentFilter</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/SearchOrdersFulfillmentFilter} obj Optional instance to populate.
 * @return {module:model/SearchOrdersFulfillmentFilter} The populated <code>SearchOrdersFulfillmentFilter</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('fulfillment_types')) {
      obj['fulfillment_types'] = ApiClient.convertToType(data['fulfillment_types'], ['String']);
    }
      if (data.hasOwnProperty('fulfillment_states')) {
      obj['fulfillment_states'] = ApiClient.convertToType(data['fulfillment_states'], ['String']);
    }
    }
  return obj;
}

/**
 * List of `fulfillment types` to filter for. Will return orders if any of its fulfillments match any of the fulfillment types listed in this field. See [OrderFulfillmentType](#type-orderfulfillmenttype) for possible values
 * @member {Array.<String>} fulfillment_types
 */
exports.prototype['fulfillment_types'] = undefined;
/**
 * List of `fulfillment states` to filter for. Will return orders if any of its fulfillments match any of the fulfillment states listed in this field. See [OrderFulfillmentState](#type-orderfulfillmentstate) for possible values
 * @member {Array.<String>} fulfillment_states
 */
exports.prototype['fulfillment_states'] = undefined;



module.exports = exports;




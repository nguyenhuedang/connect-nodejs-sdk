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
var CashDrawerShiftEvent = require('./CashDrawerShiftEvent');
var Error = require('./Error');




/**
 * The ListCashDrawerShiftEventsResponse model module.
 * Note: This model is in beta.
 * @module model/ListCashDrawerShiftEventsResponse
 */

/**
 * Constructs a new <code>ListCashDrawerShiftEventsResponse</code>.
 *
 * @alias module:model/ListCashDrawerShiftEventsResponse
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>ListCashDrawerShiftEventsResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ListCashDrawerShiftEventsResponse} obj Optional instance to populate.
 * @return {module:model/ListCashDrawerShiftEventsResponse} The populated <code>ListCashDrawerShiftEventsResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('events')) {
      obj['events'] = ApiClient.convertToType(data['events'], [CashDrawerShiftEvent]);
    }
      if (data.hasOwnProperty('cursor')) {
      obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
    }
      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
    }
  return obj;
}

/**
 * All of the events (payments, refunds, etc.) for a cash drawer during the shift.
 * @member {Array.<module:model/CashDrawerShiftEvent>} events
 */
exports.prototype['events'] = undefined;
/**
 * Opaque cursor for fetching the next page. Cursor is not present in the last page of results.
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;
/**
 * Any errors that occurred during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;



module.exports = exports;



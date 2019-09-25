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
var Error = require('./Error');
var Location = require('./Location');




/**
 * The RetrieveLocationResponse model module.
 * @module model/RetrieveLocationResponse
 */

/**
 * Constructs a new <code>RetrieveLocationResponse</code>.
 * Defines the fields that the  [RetrieveLocation](#endpoint-retrievelocation) endpoint returns  in a response.
 * @alias module:model/RetrieveLocationResponse
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>RetrieveLocationResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/RetrieveLocationResponse} obj Optional instance to populate.
 * @return {module:model/RetrieveLocationResponse} The populated <code>RetrieveLocationResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('location')) {
      obj['location'] = Location.constructFromObject(data['location']);
    }
    }
  return obj;
}

/**
 * Information on errors encountered during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;
/**
 * The requested location.
 * @member {module:model/Location} location
 */
exports.prototype['location'] = undefined;



module.exports = exports;




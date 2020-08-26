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
var TeamMemberWage = require('./TeamMemberWage');




/**
 * The GetTeamMemberWageResponse model module.
 * @module model/GetTeamMemberWageResponse
 */

/**
 * Constructs a new <code>GetTeamMemberWageResponse</code>.
 * A response to a request to get a &#x60;TeamMemberWage&#x60;. Contains the requested &#x60;TeamMemberWage&#x60; objects. May contain a set of &#x60;Error&#x60; objects if the request resulted in errors.
 * @alias module:model/GetTeamMemberWageResponse
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>GetTeamMemberWageResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/GetTeamMemberWageResponse} obj Optional instance to populate.
 * @return {module:model/GetTeamMemberWageResponse} The populated <code>GetTeamMemberWageResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('team_member_wage')) {
      obj['team_member_wage'] = TeamMemberWage.constructFromObject(data['team_member_wage']);
    }
      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
    }
  return obj;
}

/**
 * The requested `TeamMemberWage` object.
 * @member {module:model/TeamMemberWage} team_member_wage
 */
exports.prototype['team_member_wage'] = undefined;
/**
 * Any errors that occurred during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;



module.exports = exports;



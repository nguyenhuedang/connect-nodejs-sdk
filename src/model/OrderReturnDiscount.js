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
 * The OrderReturnDiscount model module.
 * @module model/OrderReturnDiscount
 */

/**
 * Constructs a new <code>OrderReturnDiscount</code>.
 * Represents a discount being returned that applies to one or more return line items in an order.  Fixed-amount, order-scoped discounts are distributed across all non-zero return line item totals. The amount distributed to each return line item is relative to that item’s contribution to the order subtotal.
 * @alias module:model/OrderReturnDiscount
 * @class
 */
var exports = function() {
  var _this = this;










};

/**
 * Constructs a <code>OrderReturnDiscount</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/OrderReturnDiscount} obj Optional instance to populate.
 * @return {module:model/OrderReturnDiscount} The populated <code>OrderReturnDiscount</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('uid')) {
      obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
    }
      if (data.hasOwnProperty('source_discount_uid')) {
      obj['source_discount_uid'] = ApiClient.convertToType(data['source_discount_uid'], 'String');
    }
      if (data.hasOwnProperty('catalog_object_id')) {
      obj['catalog_object_id'] = ApiClient.convertToType(data['catalog_object_id'], 'String');
    }
      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('type')) {
      obj['type'] = ApiClient.convertToType(data['type'], 'String');
    }
      if (data.hasOwnProperty('percentage')) {
      obj['percentage'] = ApiClient.convertToType(data['percentage'], 'String');
    }
      if (data.hasOwnProperty('amount_money')) {
      obj['amount_money'] = Money.constructFromObject(data['amount_money']);
    }
      if (data.hasOwnProperty('applied_money')) {
      obj['applied_money'] = Money.constructFromObject(data['applied_money']);
    }
      if (data.hasOwnProperty('scope')) {
      obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
    }
    }
  return obj;
}

/**
 * Unique ID that identifies the return discount only within this order.
 * @member {String} uid
 */
exports.prototype['uid'] = undefined;
/**
 * `uid` of the Discount from the Order which contains the original application of this discount.
 * @member {String} source_discount_uid
 */
exports.prototype['source_discount_uid'] = undefined;
/**
 * The catalog object id referencing `CatalogDiscount`.
 * @member {String} catalog_object_id
 */
exports.prototype['catalog_object_id'] = undefined;
/**
 * The discount's name.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * The type of the discount. If it is created by API, it would be either `FIXED_PERCENTAGE` or `FIXED_AMOUNT`.  Discounts that don't reference a catalog object ID must have a type of `FIXED_PERCENTAGE` or `FIXED_AMOUNT`. See [OrderLineItemDiscountType](#type-orderlineitemdiscounttype) for possible values
 * @member {String} type
 */
exports.prototype['type'] = undefined;
/**
 * The percentage of the tax, as a string representation of a decimal number. A value of `7.25` corresponds to a percentage of 7.25%.  `percentage` is not set for amount-based discounts.
 * @member {String} percentage
 */
exports.prototype['percentage'] = undefined;
/**
 * The total declared monetary amount of the discount.  `amount_money` is not set for percentage-based discounts.
 * @member {module:model/Money} amount_money
 */
exports.prototype['amount_money'] = undefined;
/**
 * The amount of discount actually applied to this line item. When an amount-based discount is at order-level, this value is different from `amount_money` because the discount is distributed across the line items.
 * @member {module:model/Money} applied_money
 */
exports.prototype['applied_money'] = undefined;
/**
 * Indicates the level at which the `OrderReturnDiscount` applies. For `ORDER` scoped discounts, the server will generate references in `applied_discounts` on all `OrderReturnLineItem`s. For `LINE_ITEM` scoped discounts, the discount will only apply to `OrderReturnLineItem`s with references in their `applied_discounts` field. See [OrderLineItemDiscountScope](#type-orderlineitemdiscountscope) for possible values
 * @member {String} scope
 */
exports.prototype['scope'] = undefined;



module.exports = exports;




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
var CatalogItemModifierListInfo = require('./CatalogItemModifierListInfo');
var CatalogItemOptionForItem = require('./CatalogItemOptionForItem');
var CatalogObject = require('./CatalogObject');




/**
 * The CatalogItem model module.
 * @module model/CatalogItem
 */

/**
 * Constructs a new <code>CatalogItem</code>.
 * An item (i.e., product family) in the Catalog object model.
 * @alias module:model/CatalogItem
 * @class
 */
var exports = function() {
  var _this = this;















};

/**
 * Constructs a <code>CatalogItem</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CatalogItem} obj Optional instance to populate.
 * @return {module:model/CatalogItem} The populated <code>CatalogItem</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('description')) {
      obj['description'] = ApiClient.convertToType(data['description'], 'String');
    }
      if (data.hasOwnProperty('abbreviation')) {
      obj['abbreviation'] = ApiClient.convertToType(data['abbreviation'], 'String');
    }
      if (data.hasOwnProperty('label_color')) {
      obj['label_color'] = ApiClient.convertToType(data['label_color'], 'String');
    }
      if (data.hasOwnProperty('available_online')) {
      obj['available_online'] = ApiClient.convertToType(data['available_online'], 'Boolean');
    }
      if (data.hasOwnProperty('available_for_pickup')) {
      obj['available_for_pickup'] = ApiClient.convertToType(data['available_for_pickup'], 'Boolean');
    }
      if (data.hasOwnProperty('available_electronically')) {
      obj['available_electronically'] = ApiClient.convertToType(data['available_electronically'], 'Boolean');
    }
      if (data.hasOwnProperty('category_id')) {
      obj['category_id'] = ApiClient.convertToType(data['category_id'], 'String');
    }
      if (data.hasOwnProperty('tax_ids')) {
      obj['tax_ids'] = ApiClient.convertToType(data['tax_ids'], ['String']);
    }
      if (data.hasOwnProperty('modifier_list_info')) {
      obj['modifier_list_info'] = ApiClient.convertToType(data['modifier_list_info'], [CatalogItemModifierListInfo]);
    }
      if (data.hasOwnProperty('variations')) {
      obj['variations'] = ApiClient.convertToType(data['variations'], [CatalogObject]);
    }
      if (data.hasOwnProperty('product_type')) {
      obj['product_type'] = ApiClient.convertToType(data['product_type'], 'String');
    }
      if (data.hasOwnProperty('skip_modifier_screen')) {
      obj['skip_modifier_screen'] = ApiClient.convertToType(data['skip_modifier_screen'], 'Boolean');
    }
      if (data.hasOwnProperty('item_options')) {
      obj['item_options'] = ApiClient.convertToType(data['item_options'], [CatalogItemOptionForItem]);
    }
    }
  return obj;
}

/**
 * The item's name. Searchable. This field must not be empty. This field has max length of 512 Unicode code points.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * The item's description. Searchable. This field has max length of 4096 Unicode code points.
 * @member {String} description
 */
exports.prototype['description'] = undefined;
/**
 * The text of the item's display label in the Square Point of Sale app. Only up to the first five characters of the string are used. Searchable. This field has max length of 24 Unicode code points.
 * @member {String} abbreviation
 */
exports.prototype['abbreviation'] = undefined;
/**
 * The color of the item's display label in the Square Point of Sale app. This must be a valid hex color code.
 * @member {String} label_color
 */
exports.prototype['label_color'] = undefined;
/**
 * If `true`, the item can be added to shipping orders from the merchant's online store.
 * @member {Boolean} available_online
 */
exports.prototype['available_online'] = undefined;
/**
 * If `true`, the item can be added to pickup orders from the merchant's online store.
 * @member {Boolean} available_for_pickup
 */
exports.prototype['available_for_pickup'] = undefined;
/**
 * If `true`, the item can be added to electronically fulfilled orders from the merchant's online store.
 * @member {Boolean} available_electronically
 */
exports.prototype['available_electronically'] = undefined;
/**
 * The ID of the item's category, if any.
 * @member {String} category_id
 */
exports.prototype['category_id'] = undefined;
/**
 * A set of IDs indicating the `CatalogTax`es that are enabled for this item. When updating an item, any taxes listed here will be added to the item. `CatalogTax`es may also be added to or deleted from an item using `UpdateItemTaxes`.
 * @member {Array.<String>} tax_ids
 */
exports.prototype['tax_ids'] = undefined;
/**
 * A set of `CatalogItemModifierListInfo` objects representing the modifier lists that apply to this item, along with the overrides and min and max limits that are specific to this item. `CatalogModifierList`s may also be added to or deleted from an item using `UpdateItemModifierLists`.
 * @member {Array.<module:model/CatalogItemModifierListInfo>} modifier_list_info
 */
exports.prototype['modifier_list_info'] = undefined;
/**
 * A list of `CatalogObject`s containing the `CatalogItemVariation`s for this item.  Maximum: 250 item variations
 * @member {Array.<module:model/CatalogObject>} variations
 */
exports.prototype['variations'] = undefined;
/**
 * The product type of the item. May not be changed once an item has been created.  Only items of product type `REGULAR` or `APPOINTMENTS_SERVICE` may be created by this API; items with other product types are read-only. See [CatalogItemProductType](#type-catalogitemproducttype) for possible values
 * @member {String} product_type
 */
exports.prototype['product_type'] = undefined;
/**
 * If `false`, the Square Point of Sale app will present the `CatalogItem`'s details screen immediately, allowing the merchant to choose `CatalogModifier`s before adding the item to the cart.  This is the default behavior.  If `true`, the Square Point of Sale app will immediately add the item to the cart with the pre-selected modifiers, and merchants can edit modifiers by drilling down onto the item's details.  Third-party clients are encouraged to implement similar behaviors.
 * @member {Boolean} skip_modifier_screen
 */
exports.prototype['skip_modifier_screen'] = undefined;
/**
 * List of item options IDs for this item. Used to manage and group item variations in a specified order.  Maximum: 6 item options.
 * @member {Array.<module:model/CatalogItemOptionForItem>} item_options
 */
exports.prototype['item_options'] = undefined;



module.exports = exports;




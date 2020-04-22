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
 * Enum class ErrorCode.
 * @enum {}
 * @readonly
 */
var exports = {
  /**
   * value: "INTERNAL_SERVER_ERROR"
   * @const
   */
  "INTERNAL_SERVER_ERROR": "INTERNAL_SERVER_ERROR",
  /**
   * value: "UNAUTHORIZED"
   * @const
   */
  "UNAUTHORIZED": "UNAUTHORIZED",
  /**
   * value: "ACCESS_TOKEN_EXPIRED"
   * @const
   */
  "ACCESS_TOKEN_EXPIRED": "ACCESS_TOKEN_EXPIRED",
  /**
   * value: "ACCESS_TOKEN_REVOKED"
   * @const
   */
  "ACCESS_TOKEN_REVOKED": "ACCESS_TOKEN_REVOKED",
  /**
   * value: "CLIENT_DISABLED"
   * @const
   */
  "CLIENT_DISABLED": "CLIENT_DISABLED",
  /**
   * value: "FORBIDDEN"
   * @const
   */
  "FORBIDDEN": "FORBIDDEN",
  /**
   * value: "INSUFFICIENT_SCOPES"
   * @const
   */
  "INSUFFICIENT_SCOPES": "INSUFFICIENT_SCOPES",
  /**
   * value: "APPLICATION_DISABLED"
   * @const
   */
  "APPLICATION_DISABLED": "APPLICATION_DISABLED",
  /**
   * value: "V1_APPLICATION"
   * @const
   */
  "V1_APPLICATION": "V1_APPLICATION",
  /**
   * value: "V1_ACCESS_TOKEN"
   * @const
   */
  "V1_ACCESS_TOKEN": "V1_ACCESS_TOKEN",
  /**
   * value: "CARD_PROCESSING_NOT_ENABLED"
   * @const
   */
  "CARD_PROCESSING_NOT_ENABLED": "CARD_PROCESSING_NOT_ENABLED",
  /**
   * value: "BAD_REQUEST"
   * @const
   */
  "BAD_REQUEST": "BAD_REQUEST",
  /**
   * value: "MISSING_REQUIRED_PARAMETER"
   * @const
   */
  "MISSING_REQUIRED_PARAMETER": "MISSING_REQUIRED_PARAMETER",
  /**
   * value: "INCORRECT_TYPE"
   * @const
   */
  "INCORRECT_TYPE": "INCORRECT_TYPE",
  /**
   * value: "INVALID_TIME"
   * @const
   */
  "INVALID_TIME": "INVALID_TIME",
  /**
   * value: "INVALID_TIME_RANGE"
   * @const
   */
  "INVALID_TIME_RANGE": "INVALID_TIME_RANGE",
  /**
   * value: "INVALID_VALUE"
   * @const
   */
  "INVALID_VALUE": "INVALID_VALUE",
  /**
   * value: "INVALID_CURSOR"
   * @const
   */
  "INVALID_CURSOR": "INVALID_CURSOR",
  /**
   * value: "UNKNOWN_QUERY_PARAMETER"
   * @const
   */
  "UNKNOWN_QUERY_PARAMETER": "UNKNOWN_QUERY_PARAMETER",
  /**
   * value: "CONFLICTING_PARAMETERS"
   * @const
   */
  "CONFLICTING_PARAMETERS": "CONFLICTING_PARAMETERS",
  /**
   * value: "EXPECTED_JSON_BODY"
   * @const
   */
  "EXPECTED_JSON_BODY": "EXPECTED_JSON_BODY",
  /**
   * value: "INVALID_SORT_ORDER"
   * @const
   */
  "INVALID_SORT_ORDER": "INVALID_SORT_ORDER",
  /**
   * value: "VALUE_REGEX_MISMATCH"
   * @const
   */
  "VALUE_REGEX_MISMATCH": "VALUE_REGEX_MISMATCH",
  /**
   * value: "VALUE_TOO_SHORT"
   * @const
   */
  "VALUE_TOO_SHORT": "VALUE_TOO_SHORT",
  /**
   * value: "VALUE_TOO_LONG"
   * @const
   */
  "VALUE_TOO_LONG": "VALUE_TOO_LONG",
  /**
   * value: "VALUE_TOO_LOW"
   * @const
   */
  "VALUE_TOO_LOW": "VALUE_TOO_LOW",
  /**
   * value: "VALUE_TOO_HIGH"
   * @const
   */
  "VALUE_TOO_HIGH": "VALUE_TOO_HIGH",
  /**
   * value: "VALUE_EMPTY"
   * @const
   */
  "VALUE_EMPTY": "VALUE_EMPTY",
  /**
   * value: "ARRAY_LENGTH_TOO_LONG"
   * @const
   */
  "ARRAY_LENGTH_TOO_LONG": "ARRAY_LENGTH_TOO_LONG",
  /**
   * value: "ARRAY_LENGTH_TOO_SHORT"
   * @const
   */
  "ARRAY_LENGTH_TOO_SHORT": "ARRAY_LENGTH_TOO_SHORT",
  /**
   * value: "ARRAY_EMPTY"
   * @const
   */
  "ARRAY_EMPTY": "ARRAY_EMPTY",
  /**
   * value: "EXPECTED_BOOLEAN"
   * @const
   */
  "EXPECTED_BOOLEAN": "EXPECTED_BOOLEAN",
  /**
   * value: "EXPECTED_INTEGER"
   * @const
   */
  "EXPECTED_INTEGER": "EXPECTED_INTEGER",
  /**
   * value: "EXPECTED_FLOAT"
   * @const
   */
  "EXPECTED_FLOAT": "EXPECTED_FLOAT",
  /**
   * value: "EXPECTED_STRING"
   * @const
   */
  "EXPECTED_STRING": "EXPECTED_STRING",
  /**
   * value: "EXPECTED_OBJECT"
   * @const
   */
  "EXPECTED_OBJECT": "EXPECTED_OBJECT",
  /**
   * value: "EXPECTED_ARRAY"
   * @const
   */
  "EXPECTED_ARRAY": "EXPECTED_ARRAY",
  /**
   * value: "EXPECTED_MAP"
   * @const
   */
  "EXPECTED_MAP": "EXPECTED_MAP",
  /**
   * value: "EXPECTED_BASE64_ENCODED_BYTE_ARRAY"
   * @const
   */
  "EXPECTED_BASE64_ENCODED_BYTE_ARRAY": "EXPECTED_BASE64_ENCODED_BYTE_ARRAY",
  /**
   * value: "INVALID_ARRAY_VALUE"
   * @const
   */
  "INVALID_ARRAY_VALUE": "INVALID_ARRAY_VALUE",
  /**
   * value: "INVALID_ENUM_VALUE"
   * @const
   */
  "INVALID_ENUM_VALUE": "INVALID_ENUM_VALUE",
  /**
   * value: "INVALID_CONTENT_TYPE"
   * @const
   */
  "INVALID_CONTENT_TYPE": "INVALID_CONTENT_TYPE",
  /**
   * value: "INVALID_FORM_VALUE"
   * @const
   */
  "INVALID_FORM_VALUE": "INVALID_FORM_VALUE",
  /**
   * value: "ONE_INSTRUMENT_EXPECTED"
   * @const
   */
  "ONE_INSTRUMENT_EXPECTED": "ONE_INSTRUMENT_EXPECTED",
  /**
   * value: "NO_FIELDS_SET"
   * @const
   */
  "NO_FIELDS_SET": "NO_FIELDS_SET",
  /**
   * value: "CARD_EXPIRED"
   * @const
   */
  "CARD_EXPIRED": "CARD_EXPIRED",
  /**
   * value: "INVALID_EXPIRATION"
   * @const
   */
  "INVALID_EXPIRATION": "INVALID_EXPIRATION",
  /**
   * value: "INVALID_EXPIRATION_YEAR"
   * @const
   */
  "INVALID_EXPIRATION_YEAR": "INVALID_EXPIRATION_YEAR",
  /**
   * value: "INVALID_EXPIRATION_DATE"
   * @const
   */
  "INVALID_EXPIRATION_DATE": "INVALID_EXPIRATION_DATE",
  /**
   * value: "UNSUPPORTED_CARD_BRAND"
   * @const
   */
  "UNSUPPORTED_CARD_BRAND": "UNSUPPORTED_CARD_BRAND",
  /**
   * value: "UNSUPPORTED_ENTRY_METHOD"
   * @const
   */
  "UNSUPPORTED_ENTRY_METHOD": "UNSUPPORTED_ENTRY_METHOD",
  /**
   * value: "INVALID_ENCRYPTED_CARD"
   * @const
   */
  "INVALID_ENCRYPTED_CARD": "INVALID_ENCRYPTED_CARD",
  /**
   * value: "INVALID_CARD"
   * @const
   */
  "INVALID_CARD": "INVALID_CARD",
  /**
   * value: "GENERIC_DECLINE"
   * @const
   */
  "GENERIC_DECLINE": "GENERIC_DECLINE",
  /**
   * value: "CVV_FAILURE"
   * @const
   */
  "CVV_FAILURE": "CVV_FAILURE",
  /**
   * value: "ADDRESS_VERIFICATION_FAILURE"
   * @const
   */
  "ADDRESS_VERIFICATION_FAILURE": "ADDRESS_VERIFICATION_FAILURE",
  /**
   * value: "INVALID_ACCOUNT"
   * @const
   */
  "INVALID_ACCOUNT": "INVALID_ACCOUNT",
  /**
   * value: "CURRENCY_MISMATCH"
   * @const
   */
  "CURRENCY_MISMATCH": "CURRENCY_MISMATCH",
  /**
   * value: "INSUFFICIENT_FUNDS"
   * @const
   */
  "INSUFFICIENT_FUNDS": "INSUFFICIENT_FUNDS",
  /**
   * value: "INSUFFICIENT_PERMISSIONS"
   * @const
   */
  "INSUFFICIENT_PERMISSIONS": "INSUFFICIENT_PERMISSIONS",
  /**
   * value: "CARDHOLDER_INSUFFICIENT_PERMISSIONS"
   * @const
   */
  "CARDHOLDER_INSUFFICIENT_PERMISSIONS": "CARDHOLDER_INSUFFICIENT_PERMISSIONS",
  /**
   * value: "INVALID_LOCATION"
   * @const
   */
  "INVALID_LOCATION": "INVALID_LOCATION",
  /**
   * value: "TRANSACTION_LIMIT"
   * @const
   */
  "TRANSACTION_LIMIT": "TRANSACTION_LIMIT",
  /**
   * value: "VOICE_FAILURE"
   * @const
   */
  "VOICE_FAILURE": "VOICE_FAILURE",
  /**
   * value: "PAN_FAILURE"
   * @const
   */
  "PAN_FAILURE": "PAN_FAILURE",
  /**
   * value: "EXPIRATION_FAILURE"
   * @const
   */
  "EXPIRATION_FAILURE": "EXPIRATION_FAILURE",
  /**
   * value: "CARD_NOT_SUPPORTED"
   * @const
   */
  "CARD_NOT_SUPPORTED": "CARD_NOT_SUPPORTED",
  /**
   * value: "INVALID_PIN"
   * @const
   */
  "INVALID_PIN": "INVALID_PIN",
  /**
   * value: "INVALID_POSTAL_CODE"
   * @const
   */
  "INVALID_POSTAL_CODE": "INVALID_POSTAL_CODE",
  /**
   * value: "INVALID_FEES"
   * @const
   */
  "INVALID_FEES": "INVALID_FEES",
  /**
   * value: "MANUALLY_ENTERED_PAYMENT_NOT_SUPPORTED"
   * @const
   */
  "MANUALLY_ENTERED_PAYMENT_NOT_SUPPORTED": "MANUALLY_ENTERED_PAYMENT_NOT_SUPPORTED",
  /**
   * value: "PAYMENT_LIMIT_EXCEEDED"
   * @const
   */
  "PAYMENT_LIMIT_EXCEEDED": "PAYMENT_LIMIT_EXCEEDED",
  /**
   * value: "GIFT_CARD_AVAILABLE_AMOUNT"
   * @const
   */
  "GIFT_CARD_AVAILABLE_AMOUNT": "GIFT_CARD_AVAILABLE_AMOUNT",
  /**
   * value: "DELAYED_TRANSACTION_EXPIRED"
   * @const
   */
  "DELAYED_TRANSACTION_EXPIRED": "DELAYED_TRANSACTION_EXPIRED",
  /**
   * value: "DELAYED_TRANSACTION_CANCELED"
   * @const
   */
  "DELAYED_TRANSACTION_CANCELED": "DELAYED_TRANSACTION_CANCELED",
  /**
   * value: "DELAYED_TRANSACTION_CAPTURED"
   * @const
   */
  "DELAYED_TRANSACTION_CAPTURED": "DELAYED_TRANSACTION_CAPTURED",
  /**
   * value: "DELAYED_TRANSACTION_FAILED"
   * @const
   */
  "DELAYED_TRANSACTION_FAILED": "DELAYED_TRANSACTION_FAILED",
  /**
   * value: "CARD_TOKEN_EXPIRED"
   * @const
   */
  "CARD_TOKEN_EXPIRED": "CARD_TOKEN_EXPIRED",
  /**
   * value: "CARD_TOKEN_USED"
   * @const
   */
  "CARD_TOKEN_USED": "CARD_TOKEN_USED",
  /**
   * value: "AMOUNT_TOO_HIGH"
   * @const
   */
  "AMOUNT_TOO_HIGH": "AMOUNT_TOO_HIGH",
  /**
   * value: "UNSUPPORTED_INSTRUMENT_TYPE"
   * @const
   */
  "UNSUPPORTED_INSTRUMENT_TYPE": "UNSUPPORTED_INSTRUMENT_TYPE",
  /**
   * value: "REFUND_AMOUNT_INVALID"
   * @const
   */
  "REFUND_AMOUNT_INVALID": "REFUND_AMOUNT_INVALID",
  /**
   * value: "REFUND_ALREADY_PENDING"
   * @const
   */
  "REFUND_ALREADY_PENDING": "REFUND_ALREADY_PENDING",
  /**
   * value: "PAYMENT_NOT_REFUNDABLE"
   * @const
   */
  "PAYMENT_NOT_REFUNDABLE": "PAYMENT_NOT_REFUNDABLE",
  /**
   * value: "INVALID_CARD_DATA"
   * @const
   */
  "INVALID_CARD_DATA": "INVALID_CARD_DATA",
  /**
   * value: "LOCATION_MISMATCH"
   * @const
   */
  "LOCATION_MISMATCH": "LOCATION_MISMATCH",
  /**
   * value: "IDEMPOTENCY_KEY_REUSED"
   * @const
   */
  "IDEMPOTENCY_KEY_REUSED": "IDEMPOTENCY_KEY_REUSED",
  /**
   * value: "UNEXPECTED_VALUE"
   * @const
   */
  "UNEXPECTED_VALUE": "UNEXPECTED_VALUE",
  /**
   * value: "SANDBOX_NOT_SUPPORTED"
   * @const
   */
  "SANDBOX_NOT_SUPPORTED": "SANDBOX_NOT_SUPPORTED",
  /**
   * value: "INVALID_EMAIL_ADDRESS"
   * @const
   */
  "INVALID_EMAIL_ADDRESS": "INVALID_EMAIL_ADDRESS",
  /**
   * value: "INVALID_PHONE_NUMBER"
   * @const
   */
  "INVALID_PHONE_NUMBER": "INVALID_PHONE_NUMBER",
  /**
   * value: "CHECKOUT_EXPIRED"
   * @const
   */
  "CHECKOUT_EXPIRED": "CHECKOUT_EXPIRED",
  /**
   * value: "BAD_CERTIFICATE"
   * @const
   */
  "BAD_CERTIFICATE": "BAD_CERTIFICATE",
  /**
   * value: "INVALID_SQUARE_VERSION_FORMAT"
   * @const
   */
  "INVALID_SQUARE_VERSION_FORMAT": "INVALID_SQUARE_VERSION_FORMAT",
  /**
   * value: "API_VERSION_INCOMPATIBLE"
   * @const
   */
  "API_VERSION_INCOMPATIBLE": "API_VERSION_INCOMPATIBLE",
  /**
   * value: "CARD_DECLINED"
   * @const
   */
  "CARD_DECLINED": "CARD_DECLINED",
  /**
   * value: "VERIFY_CVV_FAILURE"
   * @const
   */
  "VERIFY_CVV_FAILURE": "VERIFY_CVV_FAILURE",
  /**
   * value: "VERIFY_AVS_FAILURE"
   * @const
   */
  "VERIFY_AVS_FAILURE": "VERIFY_AVS_FAILURE",
  /**
   * value: "CARD_DECLINED_CALL_ISSUER"
   * @const
   */
  "CARD_DECLINED_CALL_ISSUER": "CARD_DECLINED_CALL_ISSUER",
  /**
   * value: "CARD_DECLINED_VERIFICATION_REQUIRED"
   * @const
   */
  "CARD_DECLINED_VERIFICATION_REQUIRED": "CARD_DECLINED_VERIFICATION_REQUIRED",
  /**
   * value: "BAD_EXPIRATION"
   * @const
   */
  "BAD_EXPIRATION": "BAD_EXPIRATION",
  /**
   * value: "CHIP_INSERTION_REQUIRED"
   * @const
   */
  "CHIP_INSERTION_REQUIRED": "CHIP_INSERTION_REQUIRED",
  /**
   * value: "ALLOWABLE_PIN_TRIES_EXCEEDED"
   * @const
   */
  "ALLOWABLE_PIN_TRIES_EXCEEDED": "ALLOWABLE_PIN_TRIES_EXCEEDED",
  /**
   * value: "RESERVATION_DECLINED"
   * @const
   */
  "RESERVATION_DECLINED": "RESERVATION_DECLINED",
  /**
   * value: "NOT_FOUND"
   * @const
   */
  "NOT_FOUND": "NOT_FOUND",
  /**
   * value: "APPLE_PAYMENT_PROCESSING_CERTIFICATE_HASH_NOT_FOUND"
   * @const
   */
  "APPLE_PAYMENT_PROCESSING_CERTIFICATE_HASH_NOT_FOUND": "APPLE_PAYMENT_PROCESSING_CERTIFICATE_HASH_NOT_FOUND",
  /**
   * value: "METHOD_NOT_ALLOWED"
   * @const
   */
  "METHOD_NOT_ALLOWED": "METHOD_NOT_ALLOWED",
  /**
   * value: "NOT_ACCEPTABLE"
   * @const
   */
  "NOT_ACCEPTABLE": "NOT_ACCEPTABLE",
  /**
   * value: "REQUEST_TIMEOUT"
   * @const
   */
  "REQUEST_TIMEOUT": "REQUEST_TIMEOUT",
  /**
   * value: "CONFLICT"
   * @const
   */
  "CONFLICT": "CONFLICT",
  /**
   * value: "GONE"
   * @const
   */
  "GONE": "GONE",
  /**
   * value: "REQUEST_ENTITY_TOO_LARGE"
   * @const
   */
  "REQUEST_ENTITY_TOO_LARGE": "REQUEST_ENTITY_TOO_LARGE",
  /**
   * value: "UNSUPPORTED_MEDIA_TYPE"
   * @const
   */
  "UNSUPPORTED_MEDIA_TYPE": "UNSUPPORTED_MEDIA_TYPE",
  /**
   * value: "UNPROCESSABLE_ENTITY"
   * @const
   */
  "UNPROCESSABLE_ENTITY": "UNPROCESSABLE_ENTITY",
  /**
   * value: "RATE_LIMITED"
   * @const
   */
  "RATE_LIMITED": "RATE_LIMITED",
  /**
   * value: "NOT_IMPLEMENTED"
   * @const
   */
  "NOT_IMPLEMENTED": "NOT_IMPLEMENTED",
  /**
   * value: "BAD_GATEWAY"
   * @const
   */
  "BAD_GATEWAY": "BAD_GATEWAY",
  /**
   * value: "SERVICE_UNAVAILABLE"
   * @const
   */
  "SERVICE_UNAVAILABLE": "SERVICE_UNAVAILABLE",
  /**
   * value: "TEMPORARY_ERROR"
   * @const
   */
  "TEMPORARY_ERROR": "TEMPORARY_ERROR",
  /**
   * value: "GATEWAY_TIMEOUT"
   * @const
   */
  "GATEWAY_TIMEOUT": "GATEWAY_TIMEOUT"};

/**
 * Returns a <code>ErrorCode</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/ErrorCode} The enum <code>ErrorCode</code> value.
 */
exports.constructFromObject = function(object) {
  return object;
}

module.exports = exports;



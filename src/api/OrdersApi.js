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
var BatchRetrieveOrdersRequest = require('../model/BatchRetrieveOrdersRequest');
var BatchRetrieveOrdersResponse = require('../model/BatchRetrieveOrdersResponse');
var CalculateOrderRequest = require('../model/CalculateOrderRequest');
var CalculateOrderResponse = require('../model/CalculateOrderResponse');
var CreateOrderRequest = require('../model/CreateOrderRequest');
var CreateOrderResponse = require('../model/CreateOrderResponse');
var PayOrderRequest = require('../model/PayOrderRequest');
var PayOrderResponse = require('../model/PayOrderResponse');
var SearchOrdersRequest = require('../model/SearchOrdersRequest');
var SearchOrdersResponse = require('../model/SearchOrdersResponse');
var UpdateOrderRequest = require('../model/UpdateOrderRequest');
var UpdateOrderResponse = require('../model/UpdateOrderResponse');

/**
 * Orders service.
 * @module api/OrdersApi
 */

/**
 * Constructs a new OrdersApi. 
 * @alias module:api/OrdersApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;



  /**
   * BatchRetrieveOrders
   * Retrieves a set of [Order](#type-order)s by their IDs.  If a given Order ID does not exist, the ID is ignored instead of generating an error.
   * @param {module:model/BatchRetrieveOrdersRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BatchRetrieveOrdersResponse} and HTTP response
   */
  this.batchRetrieveOrdersWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling batchRetrieveOrders");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = BatchRetrieveOrdersResponse;

    return this.apiClient.callApi(
      '/v2/orders/batch-retrieve', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * BatchRetrieveOrders
   * Retrieves a set of [Order](#type-order)s by their IDs.  If a given Order ID does not exist, the ID is ignored instead of generating an error.
   * @param {module:model/BatchRetrieveOrdersRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BatchRetrieveOrdersResponse}
   */
  this.batchRetrieveOrders = function(body) {
    return this.batchRetrieveOrdersWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * CalculateOrder
   * Note: This endpoint is in beta.
   * Calculates an [Order](#type-order).
   * @param {module:model/CalculateOrderRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CalculateOrderResponse} and HTTP response
   */
  this.calculateOrderWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling calculateOrder");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = CalculateOrderResponse;

    return this.apiClient.callApi(
      '/v2/orders/calculate', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * CalculateOrder
   * Calculates an [Order](#type-order).
   * @param {module:model/CalculateOrderRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CalculateOrderResponse}
   */
  this.calculateOrder = function(body) {
    return this.calculateOrderWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * CreateOrder
   * Creates a new [Order](#type-order) which can include information on products for purchase and settings to apply to the purchase.  To pay for a created order, please refer to the [Pay for Orders](/orders-api/pay-for-orders) guide.  You can modify open orders using the [UpdateOrder](#endpoint-orders-updateorder) endpoint.  To learn more about the Orders API, see the [Orders API Overview](/orders-api/what-it-does).
   * @param {module:model/CreateOrderRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateOrderResponse} and HTTP response
   */
  this.createOrderWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling createOrder");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = CreateOrderResponse;

    return this.apiClient.callApi(
      '/v2/orders', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * CreateOrder
   * Creates a new [Order](#type-order) which can include information on products for purchase and settings to apply to the purchase.  To pay for a created order, please refer to the [Pay for Orders](/orders-api/pay-for-orders) guide.  You can modify open orders using the [UpdateOrder](#endpoint-orders-updateorder) endpoint.  To learn more about the Orders API, see the [Orders API Overview](/orders-api/what-it-does).
   * @param {module:model/CreateOrderRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateOrderResponse}
   */
  this.createOrder = function(body) {
    return this.createOrderWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * PayOrder
   * Note: This endpoint is in beta.
   * Pay for an [order](#type-order) using one or more approved [payments](#type-payment), or settle an order with a total of &#x60;0&#x60;.  The total of the &#x60;payment_ids&#x60; listed in the request must be equal to the order total. Orders with a total amount of &#x60;0&#x60; can be marked as paid by specifying an empty array of &#x60;payment_ids&#x60; in the request.  To be used with PayOrder, a payment must:  - Reference the order by specifying the &#x60;order_id&#x60; when [creating the payment](#endpoint-payments-createpayment). Any approved payments that reference the same &#x60;order_id&#x60; not specified in the &#x60;payment_ids&#x60; will be canceled. - Be approved with [delayed capture](/payments-api/take-payments#delayed-capture). Using a delayed capture payment with PayOrder will complete the approved payment.  Learn how to [pay for orders with a single payment using the Payments API](/orders-api/pay-for-orders).
   * @param {String} orderId The ID of the order being paid.
   * @param {module:model/PayOrderRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PayOrderResponse} and HTTP response
   */
  this.payOrderWithHttpInfo = function(orderId, body) {
    var postBody = body;

    // verify the required parameter 'orderId' is set
    if (orderId === undefined || orderId === null) {
      throw new Error("Missing the required parameter 'orderId' when calling payOrder");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling payOrder");
    }


    var pathParams = {
      'order_id': orderId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = PayOrderResponse;

    return this.apiClient.callApi(
      '/v2/orders/{order_id}/pay', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * PayOrder
   * Pay for an [order](#type-order) using one or more approved [payments](#type-payment), or settle an order with a total of &#x60;0&#x60;.  The total of the &#x60;payment_ids&#x60; listed in the request must be equal to the order total. Orders with a total amount of &#x60;0&#x60; can be marked as paid by specifying an empty array of &#x60;payment_ids&#x60; in the request.  To be used with PayOrder, a payment must:  - Reference the order by specifying the &#x60;order_id&#x60; when [creating the payment](#endpoint-payments-createpayment). Any approved payments that reference the same &#x60;order_id&#x60; not specified in the &#x60;payment_ids&#x60; will be canceled. - Be approved with [delayed capture](/payments-api/take-payments#delayed-capture). Using a delayed capture payment with PayOrder will complete the approved payment.  Learn how to [pay for orders with a single payment using the Payments API](/orders-api/pay-for-orders).
   * @param {String} orderId The ID of the order being paid.
   * @param {module:model/PayOrderRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PayOrderResponse}
   */
  this.payOrder = function(orderId, body) {
    return this.payOrderWithHttpInfo(orderId, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * SearchOrders
   * Search all orders for one or more locations. Orders include all sales, returns, and exchanges regardless of how or when they entered the Square Ecosystem (e.g. Point of Sale, Invoices, Connect APIs, etc).  SearchOrders requests need to specify which locations to search and define a [&#x60;SearchOrdersQuery&#x60;](#type-searchordersquery) object which controls how to sort or filter the results. Your SearchOrdersQuery can:    Set filter criteria.   Set sort order.   Determine whether to return results as complete Order objects, or as [OrderEntry](#type-orderentry) objects.  Note that details for orders processed with Square Point of Sale while in offline mode may not be transmitted to Square for up to 72 hours. Offline orders have a &#x60;created_at&#x60; value that reflects the time the order was created, not the time it was subsequently transmitted to Square.
   * @param {module:model/SearchOrdersRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SearchOrdersResponse} and HTTP response
   */
  this.searchOrdersWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling searchOrders");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = SearchOrdersResponse;

    return this.apiClient.callApi(
      '/v2/orders/search', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * SearchOrders
   * Search all orders for one or more locations. Orders include all sales, returns, and exchanges regardless of how or when they entered the Square Ecosystem (e.g. Point of Sale, Invoices, Connect APIs, etc).  SearchOrders requests need to specify which locations to search and define a [&#x60;SearchOrdersQuery&#x60;](#type-searchordersquery) object which controls how to sort or filter the results. Your SearchOrdersQuery can:    Set filter criteria.   Set sort order.   Determine whether to return results as complete Order objects, or as [OrderEntry](#type-orderentry) objects.  Note that details for orders processed with Square Point of Sale while in offline mode may not be transmitted to Square for up to 72 hours. Offline orders have a &#x60;created_at&#x60; value that reflects the time the order was created, not the time it was subsequently transmitted to Square.
   * @param {module:model/SearchOrdersRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SearchOrdersResponse}
   */
  this.searchOrders = function(body) {
    return this.searchOrdersWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * UpdateOrder
   * Note: This endpoint is in beta.
   * Updates an open [Order](#type-order) by adding, replacing, or deleting fields. Orders with a &#x60;COMPLETED&#x60; or &#x60;CANCELED&#x60; state cannot be updated.  An UpdateOrder request requires the following:  - The &#x60;order_id&#x60; in the endpoint path, identifying the order to update. - The latest &#x60;version&#x60; of the order to update. - The [sparse order](/orders-api/manage-orders#sparse-order-objects) containing only the fields to update and the version the update is being applied to. - If deleting fields, the [dot notation paths](/orders-api/manage-orders#on-dot-notation) identifying fields to clear.  To pay for an order, please refer to the [Pay for Orders](/orders-api/pay-for-orders) guide.  To learn more about the Orders API, see the [Orders API Overview](/orders-api/what-it-does).
   * @param {String} orderId The ID of the order to update.
   * @param {module:model/UpdateOrderRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateOrderResponse} and HTTP response
   */
  this.updateOrderWithHttpInfo = function(orderId, body) {
    var postBody = body;

    // verify the required parameter 'orderId' is set
    if (orderId === undefined || orderId === null) {
      throw new Error("Missing the required parameter 'orderId' when calling updateOrder");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling updateOrder");
    }


    var pathParams = {
      'order_id': orderId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = UpdateOrderResponse;

    return this.apiClient.callApi(
      '/v2/orders/{order_id}', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * UpdateOrder
   * Updates an open [Order](#type-order) by adding, replacing, or deleting fields. Orders with a &#x60;COMPLETED&#x60; or &#x60;CANCELED&#x60; state cannot be updated.  An UpdateOrder request requires the following:  - The &#x60;order_id&#x60; in the endpoint path, identifying the order to update. - The latest &#x60;version&#x60; of the order to update. - The [sparse order](/orders-api/manage-orders#sparse-order-objects) containing only the fields to update and the version the update is being applied to. - If deleting fields, the [dot notation paths](/orders-api/manage-orders#on-dot-notation) identifying fields to clear.  To pay for an order, please refer to the [Pay for Orders](/orders-api/pay-for-orders) guide.  To learn more about the Orders API, see the [Orders API Overview](/orders-api/what-it-does).
   * @param {String} orderId The ID of the order to update.
   * @param {module:model/UpdateOrderRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateOrderResponse}
   */
  this.updateOrder = function(orderId, body) {
    return this.updateOrderWithHttpInfo(orderId, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};

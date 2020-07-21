# SquareConnect.LoyaltyEvent

### Description
**Note: This model is in beta.**

Provides information about a loyalty event.  For more information, see [Loyalty events](/docs/loyalty-api/overview/#loyalty-events).

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The Square-assigned ID of the loyalty event. | 
**type** | **String** | The type of the loyalty event. See [LoyaltyEventType](#type-loyaltyeventtype) for possible values | 
**created_at** | **String** | The timestamp when the event was created, in RFC 3339 format. | 
**accumulate_points** | [**LoyaltyEventAccumulatePoints**](LoyaltyEventAccumulatePoints.md) | Provides metadata when the event &#x60;type&#x60; is &#x60;ACCUMULATE_POINTS&#x60;. | [optional] 
**create_reward** | [**LoyaltyEventCreateReward**](LoyaltyEventCreateReward.md) | Provides metadata when the event &#x60;type&#x60; is &#x60;CREATE_REWARD&#x60;. | [optional] 
**redeem_reward** | [**LoyaltyEventRedeemReward**](LoyaltyEventRedeemReward.md) | Provides metadata when the event &#x60;type&#x60; is &#x60;REDEEM_REWARD&#x60;. | [optional] 
**delete_reward** | [**LoyaltyEventDeleteReward**](LoyaltyEventDeleteReward.md) | Provides metadata when the event &#x60;type&#x60; is &#x60;DELETE_REWARD&#x60;. | [optional] 
**adjust_points** | [**LoyaltyEventAdjustPoints**](LoyaltyEventAdjustPoints.md) | Provides metadata when the event &#x60;type&#x60; is &#x60;ADJUST_POINTS&#x60;. | [optional] 
**loyalty_account_id** | **String** | The ID of the &#x60;loyalty account&#x60; in which the event occurred. | 
**location_id** | **String** | The ID of the &#x60;location&#x60; where the event occurred. | [optional] 
**source** | **String** | Defines whether the event was generated by the Square Point of Sale. See [LoyaltyEventSource](#type-loyaltyeventsource) for possible values | 
**expire_points** | [**LoyaltyEventExpirePoints**](LoyaltyEventExpirePoints.md) | Provides metadata when the event &#x60;type&#x60; is &#x60;EXPIRE_POINTS&#x60;. | [optional] 
**other_event** | [**LoyaltyEventOther**](LoyaltyEventOther.md) | Provides metadata when the event &#x60;type&#x60; is &#x60;OTHER&#x60;. | [optional] 


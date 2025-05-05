---
description: >-
  Our API allows you to retrieve the current status of an order or parcel in any
  kind of customer facing widget, like chatbots, with a single HTTPS call.
icon: message-bot
---

# Chatbots

## Request Definition

These requests allow you to get all updates with a single HTTPS request and are tailored to customer-facing widgets, like server-side chatbots (that is: access from trusted sources).

You can retrieve order information through these APIs using the order number, tracking number, and email address. Based on the request query parameters, the number of corresponding parcels included in the response can differ. Nonetheless, the response structure will always look identical. Each successful response body will have an order list (array), which always contains one or multiple orders. Each order has an order number attribute and a parcel list (array), which contains one or multiple parcel information objects.

{% hint style="info" %}
Requests to the following API endpoints are tailored towards access from trusted sources where you have access to authentication via your parcelLab `user_id` and `API token` (for example: the backend of your chatbot that runs on your server).
{% endhint %}

## Get Orders

Details of how the `orders/bot` endpoint can be used to retrieve orders in the parcelLab system are described below.

<details>

<summary><mark style="color:blue;">GET</mark> Order by Order Number</summary>

You can retrieve order information using the `orderNo` with the `orders/bot` endpoint. When retrieving an order by its order number, the order will contain all corresponding parcels.

The details of the Get an Order by Order Number API are described in the following section.

#### API Details

<mark style="color:blue;">`GET`</mark> `https://api.parcellab.com/orders/bot`

#### Query Parameters

| Name                                      | Type    | Description                                                                               |
| ----------------------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| lang                                      | string  | Language in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format, defaults to `en` |
| orderNo<mark style="color:red;">\*</mark> | string  | Order number transmitted to parcelLab                                                     |
| showReturns                               | boolean | Includes or removes return trackings in the response, if available.                       |

#### Header

| Name                                    | Type   | Description         |
| --------------------------------------- | ------ | ------------------- |
| user<mark style="color:red;">\*</mark>  | number | parcelLab user ID   |
| token<mark style="color:red;">\*</mark> | string | parcelLab API token |

#### Responses

* 200 - accepted

An example successful response is displayed below to show the format for retrieving orders.&#x20;

```javascript
{
  "orders": [
    {
      "orderNo": "123456789",
      "parcels": [
        {
          "id": "5ecf2a7aaa9508292f83e282",
          "tracking_number": "003401613862061219000",
          "actionBox": {
            "type": "pickup-location",
            "address": "Kurfürstenplatz 8, 80796 München",
            "openingHours": [
              {
                "close": {
                  "day": 1,
                  "time": "1800"
                },
                "open": {
                  "day": 1,
                  "time": "0800"
                }
              },
              ...
              "servicePluginLabel": "Ready for pickup at location Kurfürstenplatz 8, 80796 München",
              "color": "#16c922"
              "colorPriority": 3
            ]
          },
          "courier": {
            "name": "dhl-germany",
            "prettyname": "DHL",
            "trackingurl": "https://nolp.dhl.de/nextt-online-public/de/set_identcodes.do?idc=003401613862061219000",
            "hide_trackingurl": false,
            "trackingurl_label": "Weitere Informationen zur Lieferung über DHL",
            "rerouteurl": null,
            "rerouteurl_label_short": null,
            "rerouteurl_label_long": null,
            "rerouteurl_label_info": null,
            "destinationCourier_name": "DHL"
          },
          "last_delivery_status": {
            "code": "PickupReadyToday",
            "status": "Bereit zur Abholung",
            "status_details": "Die Lieferung liegt in der Packstation Packstation 252, Kurfürstenplatz 8, 80796 München zur Abholung bereit."
          },
          "delivery_location": null,
          "delay": false,
          "exception": false,
          "isReturn": false,
          "reporting": {
                "invalid": false,
                "forgotten": true,
                "delayed": true,
                "failedAttempt": false,
                "dispatchDelayed": true,
                "leadTimeExceeded": false,
                "timeWindowMissed": false,
                "escalated": false,
                "returned": false,
                "customerPromiseExceeded": false,
                "contacted": true,
                "contactedWithMessages": [],
                "contactedAndBounce": true,
                "exception_messages": []
                },
          "delivery_info": {
            "street": "Packstation 252",
            "zip_code": "80336",
            "city": "München",
            "destination_country_iso3": "DEU",
            "articles": [
             {
                "quantity": 1,
                "discountedPrice": 90.00,
                "totalPrice": 90.00,
                "price": 90.00,
                "totalValue": 90.00,
                "hasDiscount": false,
                "discount": 0,
                "totalDiscount": 0,
                "weight": 0.22,
                "articleNo": "57",
                "articleBrand": "Parkers",
                "articleName": "Trendy White Cotton Sneakers",
                "articleImageUrl": "https://weareparkers.com/cdn/shop/products/trendy-white-cotton-sneakers-01.png?v=1704374674&width=1100",
                "articleUrl": "https://weareparkers.com/products/trendy-white-cotton-sneakers",
                "articleColor": "White",
                "articleSize": "9",
               }
            ],
            "articlesOpen": [
              {
                "quantity": 1,
                "discountedPrice": 90.00,
                "totalPrice": 90.00,
                "price": 90.00,
                "totalValue": 90.00,
                "hasDiscount": false,
                "discount": 0,
                "totalDiscount": 0,
                "weight": 0.22,
                "articleNo": "57",
                "articleBrand": "Parkers",
                "articleName": "Trendy White Cotton Sneakers",
                "articleImageUrl": "https://weareparkers.com/cdn/shop/products/trendy-white-cotton-sneakers-01.png?v=1704374674&width=1100",
                "articleUrl": "https://weareparkers.com/products/trendy-white-cotton-sneakers",
                "articleColor": "White",
                "articleSize": "9",
               }
            ],
            "articlesOrder": [
              {
                "quantity": 1,
                "discountedPrice": 90.00,
                "totalPrice": 90.00,
                "price": 90.00,
                "totalValue": 90.00,
                "hasDiscount": false,
                "discount": 0,
                "totalDiscount": 0,
                "weight": 0.22,
                "articleNo": "57",
                "articleBrand": "Parkers",
                "articleName": "Trendy White Cotton Sneakers",
                "articleImageUrl": "https://weareparkers.com/cdn/shop/products/trendy-white-cotton-sneakers-01.png?v=1704374674&width=1100",
                "articleUrl": "https://weareparkers.com/products/trendy-white-cotton-sneakers",
                "articleColor": "White",
                "articleSize": "9",
              }
            ],
            "consignmentNo": "62be3179o2i99983837"
          },
          "checkpoints": [
            ...
            {
              "shown": true,
              "location": "München",
              "timestamp": "2020-05-29T08:25:00.000Z",
              "status": "PickupReadyToday",
              "status_text": "Bereit zur Abholung",
              "status_details": "Die Lieferung liegt in der Packstation Packstation 252, Kurfürstenplatz 8, 80796 München zur Abholung bereit.",
              "created": "2020-05-29T09:04:10.497Z",
              "Specifics": "Kurfürstenplatz 8, 80796 München"
            }
          ]
        },
        ...
      ]
    }
  ]
}
```

</details>

<details>

<summary><mark style="color:blue;">GET</mark> Order by Tracking Number</summary>

You can retrieve order information using the `trackingNo` with the `orders/bot` endpoint. When retrieving an order by a tracking number of a corresponding parcel, the order will only contain the corresponding parcel that matches this tracking number.

The details of the Get an Order by Tracking Number API are described in the following section.

#### API Details

<mark style="color:blue;">`GET`</mark> `https://api.parcellab.com/orders/bot`

#### Query Parameters

| Name                                      | Type   | Description                                                                               |
| ----------------------------------------- | ------ | ----------------------------------------------------------------------------------------- |
| lang                                      | string | Language in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format, defaults to `en` |
| courier<mark style="color:red;">\*</mark> | string | Courier code of the tracking                                                              |
| tno<mark style="color:red;">\*</mark>     | string | Tracking number transmitted to parcelLab                                                  |

#### Header

| Name                                    | Type   | Description         |
| --------------------------------------- | ------ | ------------------- |
| user<mark style="color:red;">\*</mark>  | number | parcelLab user ID   |
| token<mark style="color:red;">\*</mark> | string | parcelLab API token |

#### Responses

* 200 - accepted

An example successful response is displayed below to show the format for retrieving orders.&#x20;

```javascript
{
  "orders": [
    {
      "orderNo": "123456789",
      "parcels": [
        {
          "id": "5ecf2a7aaa9508292f83e282",
          "tracking_number": "003401613862061219000",
          "actionBox": {
            "type": "pickup-location",
            "address": "Kurfürstenplatz 8, 80796 München",
            "openingHours": [
              {
                "close": {
                  "day": 1,
                  "time": "1800"
                },
                "open": {
                  "day": 1,
                  "time": "0800"
                }
              },
              ...
              "servicePluginLabel": "Ready for pickup at location Kurfürstenplatz 8, 80796 München",
              "color": "#16c922",
              "colorPriority": 3
            ]
          },
          "courier": {
            "name": "dhl-germany",
            "prettyname": "DHL",
            "trackingurl": "https://nolp.dhl.de/nextt-online-public/de/set_identcodes.do?idc=003401613862061219000",
            "hide_trackingurl": false,
            "trackingurl_label": "Weitere Informationen zur Lieferung über DHL",
            "rerouteurl": null,
            "rerouteurl_label_short": null,
            "rerouteurl_label_long": null,
            "rerouteurl_label_info": null,
            "destinationCourier_name": "DHL"
          },
          "last_delivery_status": {
            "code": "PickupReadyToday",
            "status": "Bereit zur Abholung",
            "status_details": "Die Lieferung liegt in der Packstation Packstation 252, Kurfürstenplatz 8, 80796 München zur Abholung bereit."
          },
          "delivery_location": null,
          "delay": false,
          "exception": false,
          "isReturn": false,
          "reporting": {
                "invalid": false,
                "forgotten": true,
                "delayed": true,
                "failedAttempt": false,
                "dispatchDelayed": true,
                "leadTimeExceeded": false,
                "timeWindowMissed": false,
                "escalated": false,
                "returned": false,
                "customerPromiseExceeded": false,
                "contacted": true,
                "contactedWithMessages": [],
                "contactedAndBounce": true,
                "exception_messages": []
                },
          "delivery_info": {
            "street": "Packstation 252",
            "zip_code": "80336",
            "city": "München",
            "destination_country_iso3": "DEU",
            "articles": [
              {
                "quantity": 1,
                "discountedPrice": 90.00,
                "totalPrice": 90.00,
                "price": 90.00,
                "totalValue": 90.00,
                "hasDiscount": false,
                "discount": 0,
                "totalDiscount": 0,
                "weight": 0.22,
                "articleNo": "57",
                "articleBrand": "Parkers",
                "articleName": "Trendy White Cotton Sneakers",
                "articleImageUrl": "https://weareparkers.com/cdn/shop/products/trendy-white-cotton-sneakers-01.png?v=1704374674&width=1100",
                "articleUrl": "https://weareparkers.com/products/trendy-white-cotton-sneakers",
                "articleColor": "White",
                "articleSize": "9",
               }
            ],
            "articlesOpen": [
              {
                "quantity": 1,
                "discountedPrice": 90.00,
                "totalPrice": 90.00,
                "price": 90.00,
                "totalValue": 90.00,
                "hasDiscount": false,
                "discount": 0,
                "totalDiscount": 0,
                "weight": 0.22,
                "articleNo": "57",
                "articleBrand": "Parkers",
                "articleName": "Trendy White Cotton Sneakers",
                "articleImageUrl": "https://weareparkers.com/cdn/shop/products/trendy-white-cotton-sneakers-01.png?v=1704374674&width=1100",
                "articleUrl": "https://weareparkers.com/products/trendy-white-cotton-sneakers",
                "articleColor": "White",
                "articleSize": "9",
               }
            ],
            "articlesOrder": [
              {
                "quantity": 1,
                "discountedPrice": 90.00,
                "totalPrice": 90.00,
                "price": 90.00,
                "totalValue": 90.00,
                "hasDiscount": false,
                "discount": 0,
                "totalDiscount": 0,
                "weight": 0.22,
                "articleNo": "57",
                "articleBrand": "Parkers",
                "articleName": "Trendy White Cotton Sneakers",
                "articleImageUrl": "https://weareparkers.com/cdn/shop/products/trendy-white-cotton-sneakers-01.png?v=1704374674&width=1100",
                "articleUrl": "https://weareparkers.com/products/trendy-white-cotton-sneakers",
                "articleColor": "White",
                "articleSize": "9",
              }
            ],
            "consignmentNo": "62be3179o2i99983837"
          },
          "checkpoints": [
            ...
            {
              "shown": true,
              "location": "München",
              "timestamp": "2020-05-29T08:25:00.000Z",
              "status": "PickupReadyToday",
              "status_text": "Bereit zur Abholung",
              "status_details": "Die Lieferung liegt in der Packstation Packstation 252, Kurfürstenplatz 8, 80796 München zur Abholung bereit.",
              "created": "2020-05-29T09:04:10.497Z",
              "Specifics": "Kurfürstenplatz 8, 80796 München"
            }
          ]
        },
        ...
      ]
    }
  ]
}
```

</details>

<details>

<summary><mark style="color:blue;">GET</mark> Recent Orders by Email Address</summary>

You can retrieve recent orders for a customer using their email address with the `orders/bot` endpoint. When retrieving a list of the recent orders for a given customer by their email address, the orders will contain all corresponding parcels.

The details of the Get Recent Orders by Email Address API are described in the following section.

#### API Details

<mark style="color:blue;">`GET`</mark> `https://api.parcellab.com/orders/bot`

#### Query Parameters

| Name                                            | Type   | Description                                                                               |
| ----------------------------------------------- | ------ | ----------------------------------------------------------------------------------------- |
| lang                                            | string | Language in [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) format, defaults to `en` |
| recipient\_id<mark style="color:red;">\*</mark> | string | Email address of the customer                                                             |

#### Header

| Name                                    | Type   | Description         |
| --------------------------------------- | ------ | ------------------- |
| user<mark style="color:red;">\*</mark>  | number | parcelLab user ID   |
| token<mark style="color:red;">\*</mark> | string | parcelLab API token |

#### Responses

* 200 - accepted

An example successful response is displayed below to show the format for retrieving orders. The response contains a list of orders, where each order contains a list of its affiliated parcels. Every parcel object is prefilled with actionBox, checkpoints, articles and further tracking meta data. The actionBox already contains information like pickup location or prediction so additional API calls are not necessary.

```javascript
{
  "orders": [
    {
      "orderNo": "123456789",
      "parcels": [
        {
          "id": "5ecf2a7aaa9508292f83e282",
          "tracking_number": "003401613862061219000",
          "actionBox": {
            "type": "pickup-location",
            "address": "Kurfürstenplatz 8, 80796 München",
            "openingHours": [
              {
                "close": {
                  "day": 1,
                  "time": "1800"
                },
                "open": {
                  "day": 1,
                  "time": "0800"
                }
              },
              ...
              "servicePluginLabel": "Ready for pickup at location Kurfürstenplatz 8, 80796 München",
              "color": "#16c922",
              "colorPriority": 3
            ]
          },
          "courier": {
            "name": "dhl-germany",
            "prettyname": "DHL",
            "trackingurl": "https://nolp.dhl.de/nextt-online-public/de/set_identcodes.do?idc=003401613862061219000",
            "hide_trackingurl": false,
            "trackingurl_label": "Weitere Informationen zur Lieferung über DHL",
            "rerouteurl": null,
            "rerouteurl_label_short": null,
            "rerouteurl_label_long": null,
            "rerouteurl_label_info": null,
            "destinationCourier_name": "DHL"
          },
          "last_delivery_status": {
            "code": "PickupReadyToday",
            "status": "Bereit zur Abholung",
            "status_details": "Die Lieferung liegt in der Packstation Packstation 252, Kurfürstenplatz 8, 80796 München zur Abholung bereit."
          },
          "delivery_location": null,
          "delay": false,
          "exception": false,
          "isReturn": false,
          "reporting": {
                "invalid": false,
                "forgotten": true,
                "delayed": true,
                "failedAttempt": false,
                "dispatchDelayed": true,
                "leadTimeExceeded": false,
                "timeWindowMissed": false,
                "escalated": false,
                "returned": false,
                "customerPromiseExceeded": false,
                "contacted": true,
                "contactedWithMessages": [],
                "contactedAndBounce": true,
                "exception_messages": []
                },
          "delivery_info": {
            "street": "Packstation 252",
            "zip_code": "80336",
            "city": "München",
            "destination_country_iso3": "DEU",
            "articles": [
             {
                "quantity": 1,
                "discountedPrice": 90.00,
                "totalPrice": 90.00,
                "price": 90.00,
                "totalValue": 90.00,
                "hasDiscount": false,
                "discount": 0,
                "totalDiscount": 0,
                "weight": 0.22,
                "articleNo": "57",
                "articleBrand": "Parkers",
                "articleName": "Trendy White Cotton Sneakers",
                "articleImageUrl": "https://weareparkers.com/cdn/shop/products/trendy-white-cotton-sneakers-01.png?v=1704374674&width=1100",
                "articleUrl": "https://weareparkers.com/products/trendy-white-cotton-sneakers",
                "articleColor": "White",
                "articleSize": "9",
               }
            ],
            "articlesOpen": [
             {
                "quantity": 1,
                "discountedPrice": 90.00,
                "totalPrice": 90.00,
                "price": 90.00,
                "totalValue": 90.00,
                "hasDiscount": false,
                "discount": 0,
                "totalDiscount": 0,
                "weight": 0.22,
                "articleNo": "57",
                "articleBrand": "Parkers",
                "articleName": "Trendy White Cotton Sneakers",
                "articleImageUrl": "https://weareparkers.com/cdn/shop/products/trendy-white-cotton-sneakers-01.png?v=1704374674&width=1100",
                "articleUrl": "https://weareparkers.com/products/trendy-white-cotton-sneakers",
                "articleColor": "White",
                "articleSize": "9",
               }
            ],
            "articlesOrder": [
              {
                "quantity": 1,
                "discountedPrice": 90.00,
                "totalPrice": 90.00,
                "price": 90.00,
                "totalValue": 90.00,
                "hasDiscount": false,
                "discount": 0,
                "totalDiscount": 0,
                "weight": 0.22,
                "articleNo": "57",
                "articleBrand": "Parkers",
                "articleName": "Trendy White Cotton Sneakers",
                "articleImageUrl": "https://weareparkers.com/cdn/shop/products/trendy-white-cotton-sneakers-01.png?v=1704374674&width=1100",
                "articleUrl": "https://weareparkers.com/products/trendy-white-cotton-sneakers",
                "articleColor": "White",
                "articleSize": "9",
              }
            ],
            "consignmentNo": "62be3179o2i99983837"
          },
          "checkpoints": [
            ...
            {
              "shown": true,
              "location": "München",
              "timestamp": "2020-05-29T08:25:00.000Z",
              "status": "PickupReadyToday",
              "status_text": "Bereit zur Abholung",
              "status_details": "Die Lieferung liegt in der Packstation Packstation 252, Kurfürstenplatz 8, 80796 München zur Abholung bereit.",
              "created": "2020-05-29T09:04:10.497Z",
              "Specifics": "Kurfürstenplatz 8, 80796 München"
            }
          ]
        },
        ...
      ]
    }
  ]
}
```

</details>

## Response Definition

The response definition for the APIs is described in the following sections.

### Orders

A successful response always returns a JSON object containing an order list. Each order list/order contains a list of parcels which can contain one or multiple parcels, depending on the [request type](./#type-prediction) (that is: order number or tracking number).

The following shows an example of the structure of a response.

```javascript
{
    "orders": [
        {
            "orderNo": "123456789",
            "parcels": [{...}]
        }
    ]
}
```

### Parcel Object

A parcel object contains information about the current status of a tracking.

The attributes for a parcel object are described in the following table.

| Key                    | Type    | Description                                                                                                                                                                                                |
| ---------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                     | String  | The internal parcelLab ID of the tracking.                                                                                                                                                                 |
| tracking\_number       | String  | The tracking number of the tracking.                                                                                                                                                                       |
| actionBox              | Object  | Information about the tracking that is specific to the [current status](./#action-box-object).                                                                                                             |
| courier                | Object  | Details about the [courier](./#courier-object).                                                                                                                                                            |
| last\_delivery\_status | Object  | Details about the [current status](./#last-delivery-status-object) of the tracking.                                                                                                                        |
| delay                  | Boolean | Whether a delay of this delivery has been detected by parcelLab.                                                                                                                                           |
| exception              | Boolean | Whether an escalated problem has been detected by parcelLab.                                                                                                                                               |
| isReturn               | Boolean | Whether the end-customer is returning the parcel.                                                                                                                                                          |
| reporting              | Object  | Details about deviation from [normal delivery](./#reporting-object).                                                                                                                                       |
| delivery\_info         | Object  | Basic details about the [order](./#delivery-information-object).                                                                                                                                           |
| checkpoints            | Array   | A list of [checkpoints](./#checkpoint-object) processed by the courier.                                                                                                                                    |
| delivery\_location     | String  | <p>The <a href="./#delivery-location-object">location</a> of the delivery.</p><p><strong>Note:</strong> This is set to <code>null</code> if  the tracking did not reach <code>Delivered</code> status.</p> |

### Action Box Object

The additional details in the action box object are type-specific (for example: if the `actionBox.type === 'pickup-location'`, the action box will also feature a new key with the `openingHours`).

The variations available are described in the following sections.

#### Type `prediction`

For a prediction, a sub document is included with the scheduled delivery date. This is displayed in the format below.

```javascript
"actionBox": {
    "type": "prediction",
    "label": "Estimated Delivery:",
    "info": {
        "dateOfMonth": "08",
        "dayOfWeek": "Saturday",
        "month": "January",
        "caption": "The delivery has been planned by IKEA."
    },
    "servicePluginLabel": "In transit, estimated delivery at 08 January",
    "color": "#fca103",
    "colorPriority": 2
}
```

#### Type `pickup-location`

For a delivery to be collected, a sub document is included with the opening hours. This is displayed in the format below.

{% hint style="info" %}
The format of the opening hours is the same as used by the [Google Maps API](https://developers.google.com/places/web-service/details#PlaceDetailsResults).
{% endhint %}

```javascript
 "actionBox": {
    "type": "pickup-location",
    "address": "Filiale Gneisenaustr. 40, 10961 Berlin",
    "info": {
    "openingHours": [
      {
        "close": {
            "day": 1,
            "time": "1830"
        },
        "open": {
            "day": 1,
            "time": "1000"
        }
      },
      ...
     ]
  },
  "servicePluginLabel": "Ready for pickup at location Filiale Gneisenaustr. 40, 10961 Berlin",
  "color": "#16c922",
  "colorPriority": 3
}
```

#### Type `pickup-location-unknown`

This type is for a delivery ready for pickup but where the pickup location could not be determined by parcelLab. This is displayed in the format below.

```javascript
"actionBox": {
    "type": "pickup-location-unknown",
    "label": "You can find details where to collect your package on DHLs website",
    "servicePluginLabel": "Ready for pickup"
    "color": "#16c922",
    "colorPriority": 3
}
```

#### Type `vote-courier`

This type is for parcels that have been delivered that show a voting option to the user. This is displayed in the format below.

{% hint style="info" %}
The voting itself must be implemented by your team.
{% endhint %}

{% code title="actionBox.json" %}
```javascript
"actionBox": {
    "type": "vote-courier",
    "label": "Were you satisfied with the performance of DHL?",
    "label_communication": "Were you satisfied with the communication during the shipment?"
    "servicePluginLabel": "Delivered to Doorstep"
    "color": "#16c922",
    "colorPriority": 3
}
```
{% endcode %}

#### Type `next-action`

This type is for parcels that could not be delivered where a next action can be provided based on the courier. This is displayed in the format below.

```javascript
"actionBox": {
    "type": "next-action",
    "label": "Unfortunately, the goods could not be delivered.",
    "caption": "The delivery agent will try again the next working day.",
    "servicePluginLabel": "Delivery unsuccessful, next attempt tomorrow"
    "color": "#fca103",
    "colorPriority": 2
}
```

#### Type `order-processed`

This type is for orders that have been sent to parcelLab via the `/order` ( or `/presage` ) endpoint but were still not updated with tracking number or courier data. This is displayed in the format below.

```javascript
"actionBox": {
    "type": "order-processed",
    "label": "Order is prepared for shipping and will be handed to DHL shortly.",
    "servicePluginLabel": "Order prepared for shipping",
    "color": "#fca103",
    "colorPriority": 2
  }
```

#### Type `returned`

The following return types are for parcels that have been returned, which can vary and include a return reason:

* #### `returned`
* #### `returned-AddressIssue`
* #### `returned-NotCollected`
* #### `returned-CustomerRefusal`

This is displayed in the format below.

```javascript
"actionBox": {
    "type": "returned",
    "label": "The package will be returned to the sender.",
    "servicePluginLabel": "Failed delivery: Not collected",
    "color": "#c91f16",
    "colorPriority": 1
  }
```

#### Type `live-tracking`

This type is for parcels that are out for delivery and have a link to a live tracking of the courier delivery. The link can be found in the tracking URL of the courier object. This is displayed in the format below.

```javascript
"actionBox": {
    "type": "live-tracking",
    "label": "Out for delivery",
    "caption": "The goods will be delivered today.",
    "info": {
        "city": "München",
        "destination_country_iso3": "GER"
    }
    "servicePluginLabel": "The goods will be delivered today.",
    "color": "#fca103",
    "colorPriority": 2
  }
```

#### Type `fallback`

This type is for special cases where the actionBox can be empty. This is displayed in the format below.

```javascript
"actionBox": {},
```

### **Courier Object**

The details of the courier object for each tracking are described in the following table.

| Key                      | Type    | Description                                                                          |
| ------------------------ | ------- | ------------------------------------------------------------------------------------ |
| name                     | String  | The courier code (for example: `dhl-germany`).                                       |
| prettyname               | String  | The display name of the courier to be displayed (for example: `DHL`).                |
| trackingurl              | String  | The URL of the courier's own tracking page.                                          |
| trackingurl\_label       | String  | The localized label of the`trackingurl`.                                             |
| hide\_trackingurl        | Boolean | Whether to hide the tracking URL.                                                    |
| rerouteurl               | String  | The URL of the courier's own tracking page in case the recipient reroutes the order. |
| rerouteurl\_label\_short | String  | The localized short label of the `rerouteurl`.                                       |
| rerouteurl\_label\_long  | String  | The localized long label of the `rerouteurl`.                                        |
| rerouteurl\_label\_info  | String  | The localized information regarding the `rerouteurl`.                                |
| destination\_courier     | Object  | Information regarding the final courier handling the parcel.                         |

### **Last Delivery Status Object**

The details of the last delivery status object for each tracking are described in the following table.

{% hint style="info" %}
For further information, see the complete list of [status codes](../../data-elements/status-model.md#status-codes) that can be used.
{% endhint %}

<table><thead><tr><th width="244.3564504728181">Key</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>status</td><td>String</td><td>A short description of the current status of the delivery.</td></tr><tr><td>status_details</td><td>String</td><td>A detailed description of the current status of the delivery.</td></tr><tr><td>code</td><td>String</td><td>The applicable parcelLab status code.</td></tr></tbody></table>

### **Reporting Object**

The reporting details are specific to the last delivery status (for example: if the `last_delivery_status === 'delivered'`, lead time details are visible, which would not be visible for other delivery status).

The details of the reporting object of the last delivery status are described in the following table.

| Key                              | Type          | Description                                                                                                                     |
| -------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| invalid                          | Boolean       | Whether the shipment has an invalid ID.                                                                                         |
| forgotten                        | Boolean       | Whether it was a forgotten delivery.                                                                                            |
| delayed                          | Boolean       | Whether the delivery was delayed.                                                                                               |
| failedAttempt                    | Boolean       | Whether there was a failed attempt to deliver the parcel.                                                                       |
| dispatchDelayed                  | Boolean       | Whether the dispatch has been delayed.                                                                                          |
| leadTimeExceeded                 | Boolean       | Whether the lead time has been exceeded.                                                                                        |
| timeWindowMissed                 | Boolean       | Whether the announced delivery time has been missed.                                                                            |
| escalated                        | Boolean       | Whether there was an exception as part of the delivery (for example: a problem in scanning the delivery address on the parcel). |
| returned                         | Boolean       | Whether the parcel has been returned to the customer because of a failed delivery.                                              |
| customerPromiseExceeded          | Boolean       | Whether the customer's requested delivery date at checkout has been exceeded.                                                   |
| contacted                        | Boolean       | Whether the customer was contacted.                                                                                             |
| contactedwithMessages            | Array         | A list of messages sent to the customer.                                                                                        |
| contactedAndBounce               | Boolean       | Whether any messages sent to the customer bounced.                                                                              |
| exception\_messages              | Array         | A list of exception messages.                                                                                                   |
| lead\_time                       | Int           | The lead time.                                                                                                                  |
| lead\_time\_first\_attempt       | Int           | The lead time at the first delivery attempt.                                                                                    |
| lead\_time\_door\_to\_door       | Int           | The lead time door to door.                                                                                                     |
| lead\_time\_dispatch\_delta      | Int           | The lead time from send date until in transit date.                                                                             |
| lead\_time\_since\_order         | Int           | The lead time since order date.                                                                                                 |
| lead\_time\_to\_inbound          | Int           | The lead time from pickup to in transit.                                                                                        |
| lead\_time\_order\_till\_send    | Date/DateTime | The lead time from order to announced send date.                                                                                |
| lead\_time\_order\_till\_inbound | Date/DateTime | The lead time from order to in transit.                                                                                         |
| in\_transit\_date                | Date/DateTime | The in transit date.                                                                                                            |
| courier\_dropoff\_date           | Date/DateTime | The courier drop off date.                                                                                                      |
| part\_of\_day                    | String        | The part of the day of the delivery (that is: AM/PM).                                                                           |
| pickup\_date                     | Date/DateTime | The pickup date.                                                                                                                |
| delivery\_location               | String        | The delivery location.                                                                                                          |

### Checkpoint Object

The details of the checkpoint object for each tracking are described in the following table.

| Key                   | Type    | Description                                                                                                                                                                                                                                                          |
| --------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| shown                 | Boolean | <p>Whether the checkpoint has been marked as unclear by parcelLab.</p><p><strong>Note:</strong> Checkpoints provided by the courier which are unclear and do not help the recipient to understand the current status of the delivery are automatically filtered.</p> |
| status                | String  | The applicable parcelLab status code.                                                                                                                                                                                                                                |
| status\_text          | String  | A short description of the current status of the delivery.                                                                                                                                                                                                           |
| status\_details       | String  | A detailed description of the current status of the delivery.                                                                                                                                                                                                        |
| full\_courier\_status | String  | <p>The full status code provided by the courier for reference.</p><p><strong>Note:</strong> This is not recommended to display to the recipient.</p>                                                                                                                 |
| location              | String  | The location of the checkpoint if available; otherwise an empty string `""` is returned.                                                                                                                                                                             |
| timestamp             | String  | The date and time of the checkpoint, formatted as [Date.prototype.toJSON()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON).                                                                                           |

### Delivery Information Object

The details of the delivery information object for each tracking are described in the following table.

| Key                        | Type   | Description                                                                |
| -------------------------- | ------ | -------------------------------------------------------------------------- |
| street                     | String | The street of the parcel's destination.                                    |
| zip\_code                  | String | The zip code of the parcel's destination.                                  |
| city                       | String | The city of the parcel's destination.                                      |
| destination\_country\_iso3 | String | The country code of the parcel's destination.                              |
| articles                   | Array  | A list of articles contained in this parcel (if transmitted to parcelLab). |
| consignmentNo              | String | The consignment number identifying the parcel.                             |

### Delivery Location Object

The delivery location code represents the type of delivery destination a parcel was delivered to by the courier (for example: doorstep, post box and so on).

{% hint style="info" %}
For further information, see the full list of [delivery location codes](../../data-elements/status-model.md#delivery-location-codes) that can be used.
{% endhint %}

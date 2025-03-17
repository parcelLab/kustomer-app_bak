export default {
  "name": "parcellab_app.app.api.fetchOrderData",
  "displayName": "Fetch Order Data from parcelLab",
  "permittedArgs": ["parcelLabApiToken", "customerEmail"],
  "url": "https://api.parcellab.com/orders/bot?customerEmail={{{customerEmail}}}&u=1619650",

  "httpMethod": "get",
  "cacheSeconds": 15,
  "appSettings": {
    "authToken": {
        "key": "parcellab_app.default.parcelLabApiToken"
    }
  },
  "inputSchema": {
     "type": "object",
     "properties": {
     },
     "additionalProperties": false,
     "required": [
     ]
  }, 
  "outputSchema": {
     "type": "object",
     "properties": {
       "orders": {
         "type": "array"
       }
     },
     "additionalProperties": true,
     "required": []
  }
}
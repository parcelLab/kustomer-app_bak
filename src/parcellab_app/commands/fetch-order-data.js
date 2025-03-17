export default {
  "name": "parcellab_app.app.api.fetchOrderData",
  "displayName": "Fetch Order Data from parcelLab",
  "permittedArgs": ["parcelLabApiToken"],
  "permittedUrlArgs": ["customerEmail"],
  "url": "https://api.parcellab.com/orders/bot?customerEmail={{customerEmail}}",

  "httpMethod": "get",
  "cacheSeconds": 15,
  "appSettings": {
    "authToken": {
        "key": "parcellab.default.parcelLabApiToken"
    }
  },
  "inputSchema": {
     "type": "object",
     "properties": {
       "customerEmail": {
         "type": "string"
       }
     },
     "additionalProperties": false,
     "required": [
       "customerEmail"
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
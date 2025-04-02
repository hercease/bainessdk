
```markdown
# PaymentSDK - Buy Now, Pay Later Solution

A JavaScript SDK for BainesCredit Microfinance Bank that enables merchants to offer **Buy Now, Pay Later (BNPL)** payments on their websites. Securely processes transactions through the bank's API.

## Key Features
- Seamless integration with merchant websites
- Secure transaction processing
- Customizable payment popup
- Real-time transaction status updates

## Installation

Add this script to your HTML file:

```html
<script src="https://assetfinance.bainescredit.com/sdk/dist/paymentsdk.js"></script>
```

## Usage

1. Add a payment button to your page:
```html
<button onclick="handlePayment()">Pay Now</button>
```

2. Configure the payment handler:
```javascript
function handlePayment() {
  openPaymentPopup(
    {
      merchant_email: '.com',      //A registered Merchant account email address who will process the product
      product_image: 'https://example.com/product.png', // Product image URL
      product_price: 70000,                     // Price (integer value)
      product_description: 'Very good for your body and skin care',
      product_name: 'Skin Care Product',
      api_key: '23985235u9235u9' // From super merchant dashboard
    },
    function(response) {
      // Handle response
      if (response.status) {
        console.log('Payment successful!');
      } else {
        console.error('Payment failed');
      }
    }
  );
}
```

## Configuration Options

| Parameter            | Required | Description                          |
|----------------------|----------|--------------------------------------|
| `merchant_email`     | Yes      | A registered Merchant email account  |
| `product_image`      | Yes      | URL of product image                 |
| `product_price`      | Yes      | Product price (in whole numbers)     |
| `product_name`       | Yes      | Name of the product/service          |
| `product_description`| Yes      | Brief product description            |
| `api_key`            | Yes      | Your unique API key from dashboard   |

## Response Handling

The callback function receives an object with:
```javascript
{
  status: true,  // Boolean: payment success status
  message: "Checkout was successful"
}
```

## Security Note
- Always keep your API key confidential
- Ensure your website uses HTTPS
- Never expose API keys in client-side code in production

## Support
For integration assistance, contact: info@bainescredit.com, hercease001@gmail.com
```

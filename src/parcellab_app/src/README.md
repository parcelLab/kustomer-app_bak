# ParcelLab Widget for Kustomer

This widget displays parcel tracking information for customer orders within Kustomer. The widget is built with vanilla JavaScript and bundled using Webpack for maximum browser compatibility.

## Project Structure

```
src/
├── dist/           # Contains the bundled JavaScript (created after build)
├── js/             # Source JavaScript files
│   ├── components/ # UI components
│   ├── utils/      # Utility functions
│   └── main.js     # Main entry point
├── package.json    # Project dependencies
├── webpack.config.js # Webpack configuration
└── parcellab-widget.html # Main HTML file
```

## Development Setup

1. Install dependencies:

```bash
cd /Users/julian/Code/kustomer-app/src/parcellab_app/src
npm install
```

## Building the Widget

To build the widget for production:

```bash
cd /Users/julian/Code/kustomer-app/src/parcellab_app/src
npm run build
```

This will create a bundled JavaScript file at `dist/bundle.js` that is included in the HTML.

For development with automatic rebuilding:

```bash
npm run dev
```

## How It Works

1. The widget loads the Kustomer SDK and initializes when the page loads
2. It extracts the customer email from the context provided by Kustomer
3. It fetches order data using the Kustomer command API
4. It renders the orders and parcels with status information

## Customization

You can modify components in the `js/components/` directory without affecting the core functionality. The modular structure makes it easy to update individual parts of the UI.

## Browser Compatibility

The bundled JavaScript is compatible with all modern browsers. Webpack is configured to handle browser-specific polyfills if needed in the future.
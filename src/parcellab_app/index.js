import Widgets from './widgets';
import Commands from './commands';

export default {
    app: 'parcellab_app',
    version: '0.0.21',
    appDetails: {
        appDeveloper: {
            name: 'parcelLab',
            website: 'https://parcellab.com',
            supportEmail: 'support@parcellab.com',
        },
        externalPlatform: {
            name: 'app.parcellab.com',
            website:'https://app.parcellab.com',
        },
        documentationLinks: [{
            title: 'how.parcellab.works',
            url: 'https://how.parcellab.works',
        }],
    },
    title: 'parcelLab',
    description: 'Elevate Your Customer Experience with Seamless Post-Purchase Management and Returns\n\nThe **parcelLab** integration for **Kustomer** transforms your post-purchase operations by integrating **Convert, Engage, and Retain** into your CRM workflow. Now, your customer service teams can provide real-time, proactive updates on orders, deliveries, and returns—directly within Kustomer.\n\n#### 🌟 Key Features:\n- **Convert**: Display accurate delivery promises at checkout, reducing uncertainty and cart abandonment.\n- **Engage**: Keep customers informed with automated, branded post-purchase communications and order tracking.\n- **Retain**: Streamline digital returns and exchanges to enhance customer satisfaction and minimize revenue loss.\n\n#### 🚀 Why Integrate parcelLab with Kustomer?\n- **Proactive Support**: Reduce WISMO (Where is my order?) inquiries with real-time order tracking.\n- **Personalized Customer Journeys**: Deliver branded experiences that boost loyalty and engagement.\n- **Effortless Integration**: Connect parcelLab with Kustomer seamlessly — no extra setup required.\n\n📦 Get started today and take control of your post-purchase experience! More information at [parcellab.com](https://parcellab.com).',
    iconUrl: 'https://cdn.parcellab.com/apps/kustomer/parcellab_kustomer_icon.png',
    tags: ['messaging', 'ai', 'ecommerce'],
    changelog: {
        "0.0.1": "{{March 2025}}Initial release",
    },
    settings: {
        default: {
          parcelLabApiToken: {
            type: "secret",
            defaultValue: "",
            required: true
          }
        }
    },
    i18n: {
        en_us: {
          "parcellab_app.settings.page.title": "parcelLab Configuration", 
          "parcellab_app.settings.page.description": "To connect your parcelLab account to Kustomer, you need to provide your parcelLab Account ID and API token.\n\n1. Go to [Settings > API Tokens in your parcelLab account](https://app.parcellab.com/service/account/apitoken).\n2. Click `\"Add API Token\"` in the top right corner.\n3. Leave the Scopes to only `\"Read\"` selected, provide a description, e.g. `\"Kustomer Integration\"`. Click `Save`.\n4. On the next page, copy the encoded token as shown in the screenshot below. **Be aware that the token will only be shown once for security reasons.**\n\n![parcelLab API Token](https://cdn.parcellab.com/apps/kustomer/token_click_help.png)",
          "parcellab_app.settings.path.default.parcelLabApiToken.displayName": "API Token",
          "parcellab_app.settings.path.default.parcelLabApiToken.description": "Your encoded parcelLab API Token. Create a new token with `\"Read\"` scope at [\"Settings > API Tokens\" in your parcelLab account](https://app.parcellab.com/service/account/apitoken) and enter the **encoded** token.",
        }
    },
    postInstallMessage: 'parcelLab app installed successfully, please configure the app in the settings page',
    widgets: Widgets,
    commands: Commands,
};

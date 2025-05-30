# parcelLab App on Kustomer (with a K)

> 🚧 Only testing so far

* App defintion at `src/parcellab/index.js`
* This app definition just tells Kustomer to fetch a static HTML at [https://eu-central-1.console.aws.amazon.com/s3/buckets/parcellab-cdn?prefix=apps%2Fkustomer%2F&region=eu-central-1&bucketType=general&tab=objects](https://eu-central-1.console.aws.amazon.com/s3/buckets/parcellab-cdn?prefix=apps%2Fkustomer%2F&region=eu-central-1&bucketType=general&tab=objects)
* Then we do some stuff in the frontend, see `src/parcellab/src/parcellab-widget.html`
* Our dev account is: [https://par-parcellab-rory.kustomerapp.com/app](https://par-parcellab-rory.kustomerapp.com/app)

**How to develop:**

Update plugin code:
```sh
aws s3 cp src/parcellab_app/src/parcellab-widget.html s3://parcellab-cdn/apps/kustomer/parcellab-widget.html
```

Update app registration/ code:
```sh
npm run register-new-version parcellab_app
```

## Docs

### App Properties

Apps include a variety of properties that can be configured to do many things. We have included some interfaces explaining their uses [here](./_docs/fields.md). These interfaces will help you understand the config object for a given app inside of `./src/app-name/index.js`, and how to properly create an app config using the right properties. We also have a more in-depth version of these properties in the Kustomer [Documentation Portal](http://developer.kustomer.com/kustomer-apps-platform/docs/creating-your-first-app).

### Internationalization

One property of the app definition is the `i18n` key, which allows an app developer to provide translations in as many locales as their app supports, using `en_us` as a fallback. In many cases these are not required, but provide a far richer experience for the users of your application. For explanations on the supported translated fields, as well as the appropriate format for the field key, please visit the Kustomer [Documentation Portal](https://developer.kustomer.com/kustomer-apps-platform/docs/internationalization).

### Registering Or Updating An App

Included in this repo is a command, `npm run register-new-version [app]`, which uses a couple environment variables from your `.env` file to register a new app scoped to your Kustomer organization. This command can also be used to publish a new version of an existing app. 

When publishing an app, the `app` property in your config
1. Cannot be one of the values used for these included templates
2. Must be unique. If you start from one of these templates, we recommend adding a postfix to the `app` property, starting with an underscore, followed by any value you find helpful. For instance, `my_starter_app_myKustomerOrg01_01`.

Also of note, when POSTing subsequent versions of your app to see your changes, you must bump the semver version of the `version` property, or your request will fail.

For more detailed information on what this is doing, or how to run these tasks manually with the output from `npm get-app-json [app]` and an API call with a tool such as Postman, we have some in-depth documentation over in the Kustomer [Documentation portal](https://developer.kustomer.com/kustomer-apps-platform/docs/registering-and-updating-apps).
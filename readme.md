# Readme
## Installation
1. Clone the repo
2. Configure your env variables, see the `.env.example` file for the required environment variables. This includes a [mailgun](https://mailgun.com/) api key (feel free to replace with your own mailing service)
3. install all packages `npm install`
4. Build the app `npm install`

## Usage
This app requires npm and nodejs

## Testing
Tests are run using [protractor](www.protractortest.org) follow the installation instructions first and make sure protractor and webdriver are working.

Make sure that:

1. the app is running
2. a selenium session is active
3. `webpack-dev-server` is running

you can use `npm run pre-test` to do both of these, then you can run the e2e tests using `npm run test`. This should start a selenium session in chrome and run through the test suite.

## Deployment


## Credits
* [Ezekiel Kigbo](http://eakigbo.me )
* [Neighbourhood Justice Centre](http://neighbourhoodjustice.vic.gov.au)
* [Code for Australia](https://codeforaustralia.org)

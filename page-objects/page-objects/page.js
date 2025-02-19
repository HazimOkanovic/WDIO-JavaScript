const { browser } = require('@wdio/globals')
require('dotenv-defaults/config')

module.exports = class Page {

    open () {
        return browser.url(process.env.qa)
    }
}

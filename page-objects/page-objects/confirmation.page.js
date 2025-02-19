const Page = require("./page")

class ConfirmationPage extends Page {
    get successMessage() {
        return $("//h1[@class = 'page-title']")
    }
}

module.exports = new ConfirmationPage()
const Page = require('./page')

class MyAccountPage extends Page {
    get registrationSuccessMessage() {
        return $("//div[@data-ui-id='message-success']")
    }
}

module.exports = new MyAccountPage()
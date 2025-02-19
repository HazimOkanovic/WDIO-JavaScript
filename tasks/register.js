const homePage = require('../page-objects/home.page')
const registerPage = require('../page-objects/register.page')
const myAccounPage = require('../page-objects/myAccount.page')

class RegisterTask {
    async registerUser(firstName, lastName, email, password, successMessage) {
        await homePage.clickCreateAccount()
        await registerPage.enterFirstName(firstName)
        await registerPage.enterLastName(lastName)
        await registerPage.enterEmail(email)
        await registerPage.enterPassword(password)
        await registerPage.enterPasswordConfirmation(password)
        await registerPage.clickCreateAccountBtn()

        await expect(myAccounPage.registrationSuccessMessage).toHaveText(successMessage)
    }
}

module.exports = new RegisterTask()
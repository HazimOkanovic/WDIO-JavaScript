const Page = require('./page')

class RegisterPage extends Page {
    get pageHeader() {
        return $("//span[@data-ui-id='page-title-wrapper']")
    }

    get firstNameInputField() {
        return $("#firstname")
    }

    get lastNameInputField() {
        return $("#lastname")
    }

    get emailInputField() {
        return $("#email_address")
    }

    get passwordInputField() {
        return $("#password")
    }

    get passwordConfirmationInputField() {
        return $("#password-confirmation")
    }

    get createAccountButton() {
        return $("//button[@title='Create an Account']")
    }

    async enterFirstName(firstName) {
        await this.firstNameInputField.setValue(firstName)
    }

    async enterLastName(lastName) {
        await this.lastNameInputField.setValue(lastName)
    }

    async enterEmail(email) {
        await this.emailInputField.setValue(email)
    }

    async enterPassword(password) {
        await this.passwordInputField.setValue(password)
    }

    async enterPasswordConfirmation(passwordConfirmation) {
        await this.passwordConfirmationInputField.setValue(passwordConfirmation)
    }

    async clickCreateAccountBtn() {
        await this.createAccountButton.click()
    }
}

module.exports = new RegisterPage()

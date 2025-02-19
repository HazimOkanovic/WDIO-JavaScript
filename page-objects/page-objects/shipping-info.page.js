const Page = require("./page")

class ShippingInfoPage extends Page {
    get addressInputField() {
        return $("//input[@name = 'street[0]']")
    }

    get cityInputField() {
        return $("//input[@name = 'city']")
    }

    get provinceSelect() {
        return $("//select[@name = 'region_id']")
    }

    get postCodeInputField() {
        return $("//input[@name = 'postcode']")
    }

    get phoneNumberInputField() {
        return $("//input[@name = 'telephone']")
    }

    get fiveDollarsShipping() {
        return $("//input[@name = 'ko_unique_1']")
    }

    get nextButton() {
        return $("//button[@data-role = 'opc-continue']")
    }

    get emailInputField() {
        return $("#customer-email")
    }

    get firstNameInputField() {
        return $("//input[@name = 'firstname']")
    }

    get lastNameInputField() {
        return $("//input[@name = 'lastname']");
    }

    async enterAddress(address) {
        await this.addressInputField.setValue(address)
    }

    async enterCity(city) {
        await this.cityInputField.setValue(city)
    }

    async enterPostcode(postcode) {
        await this.postCodeInputField.setValue(postcode)
    }

    async enterPhoneNumber(phoneNumber) {
        await this.phoneNumberInputField.setValue(phoneNumber)
    }

    async clickFiveDollarShipping() {
        await this.fiveDollarsShipping.scrollIntoView()
        await this.fiveDollarsShipping.click()
    }

    async clickNextButton() {
        await this.nextButton.click()
    }

    async chooseProvince(value) {
        await this.provinceSelect.selectByAttribute('value', value)
    }

    async enterEmail(email) {
        await this.emailInputField.setValue(email)
    }

    async enterFirstName(firstName) {
        await this.firstNameInputField.setValue(firstName)
    }

    async enterLastName(lastName) {
        await this.lastNameInputField.setValue(lastName)
    }
}

module.exports = new ShippingInfoPage()
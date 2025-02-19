const cartPage = require('../page-objects/cart.page')
const shippingInfoPage = require('../page-objects/shipping-info.page')

class ShippingAddress {
    async enterShippingInfo(loggedOut, email, firstName, lastName, address, city, value, postCode, phoneNumber) {
        await cartPage.clickProceedToCheckoutButton()
        if (loggedOut === true) {
            await shippingInfoPage.enterEmail(email)
            await shippingInfoPage.enterFirstName(firstName)
            await shippingInfoPage.enterLastName(lastName)
        }
        await shippingInfoPage.enterAddress(address)
        await shippingInfoPage.enterCity(city)
        await shippingInfoPage.chooseProvince(value)
        await shippingInfoPage.enterPostcode(postCode)
        await shippingInfoPage.enterPhoneNumber(phoneNumber)
        await shippingInfoPage.clickFiveDollarShipping()
        await shippingInfoPage.clickNextButton()
    }
}

module.exports = new ShippingAddress()
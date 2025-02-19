const reviewAndPaymentPage = require('../page-objects/review-and-payment.page')
const confirmationPage = require('../page-objects/confirmation.page')
const cartPage = require('../page-objects/cart.page')
const shippingInfoPage = require('../page-objects/shipping-info.page')

class ReviewCompleteOrder {
    async reviewAndCompleteOrder(proceedToCheckout, billingInfo, totalAmount, successMessage) {
        if (proceedToCheckout === true){
            await cartPage.clickProceedToCheckoutButton()
            await expect(reviewAndPaymentPage.shippingInformation).toHaveText(billingInfo)
            await shippingInfoPage.clickFiveDollarShipping()
            await shippingInfoPage.clickNextButton()
            await expect(reviewAndPaymentPage.billingInformation).toHaveText(billingInfo)
            await reviewAndPaymentPage.clickPlaceOrderButton()
            await expect(confirmationPage.successMessage).toHaveText(successMessage)
        } else {
            await expect(reviewAndPaymentPage.billingInformation).toHaveText(billingInfo)
            await expect(reviewAndPaymentPage.totalAmount).toHaveText(totalAmount)
            await reviewAndPaymentPage.clickPlaceOrderButton()
            await expect(confirmationPage.successMessage).toHaveText(successMessage)
        }
    }
}

module.exports = new ReviewCompleteOrder()
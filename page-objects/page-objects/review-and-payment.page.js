const Page = require("./page")

class ReviewAndPaymentPage extends Page {
    get shippingInformation() {
        return $ ("//div[@class='shipping-address-item selected-item']")
    }

    get billingInformation() {
        return $ ("//div[@class='billing-address-details']")
    }

    get totalAmount() {
        return $ ("(//td[@class = 'amount'])[3]")
    }

    get placeOrderButton() {
        return $ ("//button[@title='Place Order']")
    }

    async clickPlaceOrderButton() {
        await this.placeOrderButton.click()
    }
}

module.exports = new ReviewAndPaymentPage()
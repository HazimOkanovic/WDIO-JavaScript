const Page = require("./page")

class CartPage extends Page {
    get priceInModal() {
        return $("//div[@class = 'subtotal']//span[@class = 'price']")
    }

    get productNameInModal() {
        return $("//a[@data-bind = 'attr: {href: product_url}, html: product_name']//parent::strong")
    }

    get proceedToCheckoutModal() {
        return $('#top-cart-btn-checkout')
    }

    get viewAndEditCartModal() {
        return $("//span[text() = 'View and Edit Cart']")
    }

    get productNameCart() {
        return $("//dl[@class='item-options']//preceding-sibling::strong")
    }

    get productSizeCart() {
        return $("(//dl[@class='item-options']//dd)[1]")
    }

    get productColorCart() {
        return $("(//dl[@class='item-options']//dd)[2]")
    }

    get totalPriceCart() {
        return $("//td[@data-th = 'Order Total']//strong")
    }

    get proceedToCheckoutButton() {
        return $("//button[@data-role='proceed-to-checkout']")
    }

    async clickProceedToCheckoutModal() {
        await this.proceedToCheckoutModal.click()
    }

    async clickViewAndEditCartModal() {
        await this.viewAndEditCartModal.click()
    }

    async clickProceedToCheckoutButton() {
        await this.proceedToCheckoutButton.click()
    }
}
module.exports = new CartPage()
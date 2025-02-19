const productsPage = require("../page-objects/products.page")
const homePage = require("../page-objects/home.page")
const cartPage = require("../page-objects/cart.page")

class VerifyProductInCart {
    async verifyTheProductInfo(productName, productPrice, productSize, productColor) {
        await productsPage.clickAddToCart()
        await homePage.clickCartIcon()
        await expect(cartPage.productNameInModal).toHaveText(productName)
        await expect(cartPage.priceInModal).toHaveText(productPrice)
        await cartPage.clickViewAndEditCartModal()
        await expect(cartPage.productNameCart).toHaveText(productName)
        await expect(cartPage.productSizeCart).toHaveText(productSize)
        await expect(cartPage.productColorCart).toHaveText(productColor)
        await expect(cartPage.totalPriceCart).toHaveText(productPrice)
    }
}

module.exports = new VerifyProductInCart()
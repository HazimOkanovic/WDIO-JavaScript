const Page = require("./page")

class ProductsPage extends Page {
    get productSectionTitle() {
        return $("//span[@data-ui-id='page-title-wrapper']")
    }

    productNameOnProductList(name) {
        return $(`//a[contains(., "${name}")]`)
    }

    productSize(size) {
        return $(`//div[@option-label="${size}"]`)
    }

    productColor(color) {
        return $(`//div[@option-label="${color}"]`)
    }

    get selectedSize() {
        return $("(//span[@class = 'swatch-attribute-selected-option'])[1]")
    }

    get selectedColor() {
        return $("(//span[@class = 'swatch-attribute-selected-option'])[2]")
    }

    get productName() {
        return $("//h1[@class='page-title']")
    }

    get productPrice() {
        return $('#product-price-430')
    }

    get addToCartButton() {
        return $('#product-addtocart-button')
    }

    async chooseProduct(name) {
        await this.productNameOnProductList(name).click()
    }

    async chooseProductSize(size) {
        await this.productSize(size).scrollIntoView()
        await this.productSize(size).click()
    }

    async chooseProductColor(color) {
        await this.productColor(color).click()
    }

    async clickAddToCart() {
        await this.addToCartButton.scrollIntoView()
        await this.addToCartButton.click()
    }
}

module.exports = new ProductsPage()
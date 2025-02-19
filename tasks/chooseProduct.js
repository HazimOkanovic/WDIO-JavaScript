const homePage = require('../page-objects/home.page')
const productsPage = require('../page-objects/products.page')

class ChooseProductTask {
    async chooseProduct(column, initialSection, secondSection, sectionName, jacketName, size, color) {
        await homePage.hoverOverHeaderElement(column, initialSection)
        await homePage.hoverOverHeaderElement(column, secondSection)
        await homePage.clickOnHeaderElement(column, sectionName)
        await expect(productsPage.productSectionTitle).toHaveText(sectionName)
        await productsPage.chooseProduct(jacketName)
        await productsPage.chooseProductSize(size)
        await productsPage.chooseProductColor(color)
        await expect(productsPage.productName).toHaveText(jacketName)
        await expect(productsPage.selectedSize).toHaveText(size)
        await expect(productsPage.selectedColor).toHaveText(color)
    }
}

module.exports = new ChooseProductTask()
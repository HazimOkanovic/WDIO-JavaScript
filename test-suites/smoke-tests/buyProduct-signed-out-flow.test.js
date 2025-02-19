const signinPage = require('../../page-objects/signin.page')
const signIn = require('../../tasks/signIn')
const signInData = require('../../data/signIn-data')
const chooseProduct = require('../../tasks/chooseProduct')
const buyProductData = require('../../data/buy-product-data')
const verifyProductInCart = require('../../tasks/verifyProductInCart')
const populateShippingAddressFields = require('../../tasks/populateShippingAddressFields')
const reviewCompleteOrder = require('../../tasks/review-complete-order')

describe('Buy a product test without sign in', () => {
    it('BuyAProduct without user sign in flow', async () => {
        await signinPage.open(browser.options.baseURL)
        await chooseProduct.chooseProduct(buyProductData.data.menHeader, buyProductData.data.menHeader, buyProductData.data.topsHeader, buyProductData.data.jacketSection, buyProductData.data.jacketName, buyProductData.data.lSize, buyProductData.data.color)
        await verifyProductInCart.verifyTheProductInfo(buyProductData.data.jacketName, buyProductData.data.productPrice, buyProductData.data.lSize, buyProductData.data.color)
        await populateShippingAddressFields.enterShippingInfo(true, buyProductData.data.email, buyProductData.data.firstName, buyProductData.data.lastName, buyProductData.data.address, buyProductData.data.city, buyProductData.data.florida, buyProductData.data.postCode, buyProductData.data.phoneNumber)
        await reviewCompleteOrder.reviewAndCompleteOrder(false, buyProductData.data.loggedOutBillingInfo, buyProductData.data.totalPrice, buyProductData.data.orderSuccessMessage)
    })
})
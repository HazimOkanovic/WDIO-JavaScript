const signinPage = require('../../page-objects/signin.page')
const signIn = require('../../tasks/signIn')
const signInData = require('../../data/signIn-data')
const chooseProduct = require('../../tasks/chooseProduct')
const buyProductData = require('../../data/buy-product-data')
const verifyProductInCart = require('../../tasks/verifyProductInCart')
const reviewCompleteOrder = require('../../tasks/review-complete-order')

describe('Buy a product test with sign in', () => {
    it('BuyAProduct with user sign in flow', async () => {
        await signinPage.open(browser.options.baseURL)
        await signIn.userSignIn(signInData.data.signInHeader, signInData.data.signInEmail, signInData.data.signInPassword, signInData.data.homePageHeader)
        await chooseProduct.chooseProduct(buyProductData.data.menHeader, buyProductData.data.menHeader, buyProductData.data.topsHeader, buyProductData.data.jacketSection, buyProductData.data.jacketName, buyProductData.data.lSize, buyProductData.data.color)
        await verifyProductInCart.verifyTheProductInfo(buyProductData.data.jacketName, buyProductData.data.productPrice, buyProductData.data.lSize, buyProductData.data.color)
        await reviewCompleteOrder.reviewAndCompleteOrder(true, buyProductData.data.billingInfo, buyProductData.data.totalPrice, buyProductData.data.orderSuccessMessage)
    })
})
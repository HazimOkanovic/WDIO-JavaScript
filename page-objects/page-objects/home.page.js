const { browser } = require('@wdio/globals')
const Page = require('./page')

class HomePage extends Page {
    get createAccountLink() {
        return $("//div[@class = 'panel header']//a[contains(text(), 'Create an Account')]")
    }

    get signInLink() {
        return $("//div[@class = 'panel header']//a[contains(text(), 'Sign In')]")
    }

    headerDropdown(columnName, elementText) {
        let column_map = {
            'What\'s New': '1',
            'Women': '2',
            'Men': '3',
            'Gear': '4',
            'Sale': '5'
           }
        let column = column_map[columnName]

        return $(`//li[@class = 'level0 nav-${column} category-item level-top parent ui-menu-item']//child::span[text() = '${elementText}']//parent::a`)
    }

    get cartLink() {
        return $("//a[@class='action showcart']")
    }

    get cartLinkQuantity() {
        return $("//a[@class='action showcart']//span[@class = 'counter qty']")
    }

    async clickCreateAccount() {
        await this.createAccountLink.click()
    }

    async clickSignIn() {
        await this.signInLink.click()
    }

    async hoverOverHeaderElement(column, elementText) {
        await this.headerDropdown(column, elementText).moveTo()
    }

    async clickOnHeaderElement(column, elementText) {
        await this.headerDropdown(column, elementText).click()
    }

    async clickCartIcon() {
        if (await this.cartLinkQuantity.getText() === '0') {
            browser.refresh();
            
        } else {
            await this.cartLink.click();
        }
    }
}

module.exports = new HomePage()
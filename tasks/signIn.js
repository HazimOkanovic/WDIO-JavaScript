const homePage = require("../page-objects/home.page");
const signinPage = require("../page-objects/signin.page");

class SignIn{
    async userSignIn(signInHeaderText, email, password, accountHeaderText){
        await homePage.clickSignIn();
        await expect(signinPage.pageHeader).toHaveText(signInHeaderText);
        await signinPage.enterEmail(email);
        await signinPage.enterPassword(password);
        await signinPage.clickSignInBtn();

        await expect(signinPage.pageHeader).toHaveText(accountHeaderText);
    }
}

module.exports = new SignIn();
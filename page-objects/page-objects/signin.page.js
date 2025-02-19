const Page = require("./page");

class SigninPage extends Page{
    get pageHeader (){
        return $("//h1[@class='page-title']");
    }

    get emailInputFIeld(){
        return $("//input[@title='Email']");
    }

    get passwordInputField(){
        return $("//input[@title='Password']");
    }

    get signInBtn(){
        return $("(//button[@name='send'])[1]");
    }

    async enterEmail(email){
        await this.emailInputFIeld.setValue(email);
    }

    async enterPassword(password){
        await this.passwordInputField.setValue(password);
    }

    async clickSignInBtn(){
        await this.signInBtn.click();
    }
}

module.exports = new SigninPage();
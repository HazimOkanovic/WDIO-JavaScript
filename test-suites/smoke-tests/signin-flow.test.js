const signinPage = require('../../page-objects/signin.page')
const signIn = require('../../tasks/signIn')
const signInData = require('../../data/signIn-data')

describe('Sign in test', () => {
    it('user signs in', async () => {
        await signinPage.open();
        await signIn.userSignIn(signInData.data.signInHeader, signInData.data.signInEmail, signInData.data.signInPassword, signInData.data.homePageHeader)
    })
})

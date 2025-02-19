const signinPage = require('../../page-objects/signin.page')
const registerTask = require ('../../tasks/register')
const registerData = require('../../data/register-data')

describe('Registration test', () => {
    it('Registration flow', async () => {
        await signinPage.open(browser.options.baseURL)

        await registerTask.registerUser(registerData.data.firstName, registerData.data.lastName, registerData.data.email, registerData.data.password, registerData.data.successMessage)
    })
})
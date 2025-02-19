let random = (Math.random() + 1).toString(36).substring(7)
let data = {
    firstName: 'Tom', 
    lastName: 'Hanks',
    email: 'some' + random + '@example.com',
    password: 'Password123',
    successMessage: 'Thank you for registering with Main Website Store.'
}

module.exports = {
    data
}

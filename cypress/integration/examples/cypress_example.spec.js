describe('My First Test', function () {
})

import 'cypress-if'

//cy.visit() ile test edilecek sayfanın bilgisini tanımlayabiliriz.
it('Visit to login page', function () {
    cy.visit('https://www.trendyol.com/')
    cy.get('button#onetrust-accept-btn-handler').type('KABUL ET').click()
    cy.get('button#onetrust-accept-btn-handler').should('not.be.visible')

    /*    cy.get('class.homepage-popup-gender').click()
       cy.get('class.homepage-popup-gender').should('not.be.visible')
   */
})


//homepage - popup - gender

//cy.reload()-> sayfanın tekrar yüklenmesi için

//cy.clearCookies()

//enter tuşuna tıklayabiliriz 
//cy.get('selector').type('{ enter }')

//cy.get(locator).click() methodu ile de sayfa da yer alan giriş yap butonuna tıklıyoruz.
it('Click login button', function () {
    cy.get('.account-nav-item.user-login-container').dblclick()
})

//login cy.get(locator).type(value) methodu ile  kul adı ve parola datalarını aşağıdaki gibi gönderebilirsin.
it('Enter username and password', function () {
    cy.get('#login-email').type('dxxm')
    cy.get('#login-password-input').type('xxx')
})

//cy.get(locator).click() methodu ile de sayfa da yer alan giriş yap butonuna tıklıyoruz.
it('Click login button', function () {
    cy.get('.q-primary.q-fluid.q-button-medium.q-button.submit').click()
})

/*
//Test sonucunu kontrol etmek içinse should() methodunu kullanabiliriz
it('Assert login page', function () {
    cy.url().should('include', 'kullaniciTanimlama')
    cy.title().should('eq', 'Kullanıcı Tanımlama')
})
*/
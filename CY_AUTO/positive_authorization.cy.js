describe('Авторизация', function () {

    it('Верный логин верный пароль', function () {
         cy.visit('https://login.qa.studio'); // Зашли на сайт

         cy.get('#mail').type('german@dolnikov.ru'); // Нашли поле логин и ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Нашли поле пароль и ввели верный пароль
         cy.get('#loginButton').click(); // Нашли кнопку Войти и нажали на нее

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Содержит текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден юзеру

         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Кнопка Крестик видна
         cy.get('#exitMessageButton > .exitIcon').click(); // Нажал кнопку Крестик
     })

     it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio'); // Зашли на сайт

        cy.get('#forgotEmailButton').click(); // Нажали кнопку Восстановить пароль

        cy.get('#mailForgot').type('autotest@go.ru'); // Ввели новую почту
        cy.get('#restoreEmailButton').click(); // Нажали кнопку Отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Содержит необходимый текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Кнопка Крестик видна
        cy.get('#exitMessageButton > .exitIcon').click(); // Нажал кнопку Крестик
    })

     it('Верный логин неверный пароль', function () {
        cy.visit('https://login.qa.studio'); // Зашли на сайт

        cy.get('#mail').type('german@dolnikov.ru'); // Нашли поле логин и ввели верный логин
        cy.get('#pass').type('iLoveqastudio123'); // Нашли поле пароль и ввели неверный пароль
        cy.get('#loginButton').click(); // Нашли кнопку Войти и нажали на нее

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Содержит текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден юзеру

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Кнопка Крестик видна
        cy.get('#exitMessageButton > .exitIcon').click(); // Нажал кнопку Крестик
    })

    it('Неверный логин верный пароль', function () {
        cy.visit('https://login.qa.studio'); // Зашли на сайт

        cy.get('#mail').type('german@dolnikov.rг'); // Нашли поле логин и ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Нашли поле пароль и ввели верный пароль
        cy.get('#loginButton').click(); // Нашли кнопку Войти и нажали на нее

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Содержит текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден юзеру

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Кнопка Крестик видна
        cy.get('#exitMessageButton > .exitIcon').click(); // Нажал кнопку Крестик
    })

    it('Логин без @ верный пароль', function () {
        cy.visit('https://login.qa.studio'); // Зашли на сайт

        cy.get('#mail').type('germandolnikov.ru'); // Нашли поле логин и ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Нашли поле пароль и ввели верный пароль
        cy.get('#loginButton').click(); // Нашли кнопку Войти и нажали на нее

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Содержит текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден юзеру

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Кнопка Крестик видна
        cy.get('#exitMessageButton > .exitIcon').click(); // Нажал кнопку Крестик
    })

    it('Приведение заглывных букв в логине к строчным', function () {
        cy.visit('https://login.qa.studio'); // Зашли на сайт

        cy.get('#mail').type('GerMan@dolnikov.ru'); // Нашли поле логин и ввели логин загл. и стр. буквами
        cy.get('#pass').type('iLoveqastudio1'); // Нашли поле пароль и ввели верный пароль
        cy.get('#loginButton').click(); // Нашли кнопку Войти и нажали на нее

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Содержит текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден юзеру

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Кнопка Крестик видна
        cy.get('#exitMessageButton > .exitIcon').click(); // Нажал кнопку Крестик
    })
 }) 
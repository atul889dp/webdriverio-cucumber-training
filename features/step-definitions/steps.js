import { Given, When, Then } from '@cucumber/cucumber';

import { expect as expectChai } from 'chai'

Given(/^I am on the (\w+) page$/, (page) => {
    let url= `https://the-internet.herokuapp.com/${page}`
    browser.url(`${url}`);
});

When(/^I login with (\w+) and (.+)$/, (username, password) => {
    $('#username').setValue(username);
    $('#password').setValue(password);
    $('button[type="submit"]').click(); 
});

Then(/^I should see a flash message saying (.*)$/, (message) => {
    expect($('#flash')).toBeExisting();
    expect($('#flash')).toHaveTextContaining(message);
    
    // expect($('#flash').isExisting()).to.be.equals(true); // Chai
    // expect($('#flash').getText()).contains(message); // Chai
});

Then(/^I expect url should contain (.*)$/, (uri) => {
    expect(browser).toHaveUrlContaining(uri)

    // expect(browser).toHaveUrl(uri, { containing: true }) // Matcher Options
    
    // expectChai(browser.getUrl()).to.include(uri); // Chai local 

    // expect(browser.getUrl()).to.include(uri); // Chai Global  
    
});


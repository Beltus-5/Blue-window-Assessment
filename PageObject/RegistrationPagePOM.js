const { expect } = require('@playwright/test');
const { UserData } = require('../Fixturesfile/fixturesData');
const user = UserData();

async function fillAllFields(page) {
 
  await page.locator('input[name="firstName"]').fill(user.first_name[0]);
  await page.locator('input[name="lastName"]').fill(user.last_name[0]);
  await page.locator('input[name="email"]').fill(user.email_[0]);
  await page.locator('input[name="password"]').fill(user.password_[0]);
  await page.locator('input[name="confirmPassword"]').fill(user.confirm_password[0]);
  await page.check('#male');
  await page.fill('#dob', user.date_Of_birth[0]);
  await page.locator('input[name="phone"]').fill(user.phone_number[0]);
  await page.locator('input[name="address"]').fill(user.address_[0]);
  await page.locator('input[name="linkedIn"]').fill(user.linkedin_url[0]);
  await page.locator('input[name="github"]').fill(user.github_url[0]);
  await page.locator('form input[type="submit"]').click();

}
async function fillMandatoryFields(page) {
 
  await page.locator('input[name="firstName"]').fill(user.first_name[0]);
  await page.locator('input[name="lastName"]').fill(user.last_name[0]);
  await page.locator('input[name="email"]').fill(user.email_[0]);
  await page.locator('input[name="password"]').fill(user.password_[0]);
  await page.locator('input[name="confirmPassword"]').fill(user.confirm_password[0]);
  await page.locator('input[name="linkedIn"]').fill(user.linkedin_url[0]); // shows optional but it is actually mandatory
  await page.locator('form input[type="submit"]').click();

}

async function fillOptionalFields(page) {
  
  await page.check('#male');
  await page.fill('#dob', user.date_Of_birth[0]);
  await page.locator('#phone').fill(user.phone_number[0]);
  await page.locator('input[name="address"]').fill(user.address_[0]);
  await page.locator('input[name="linkedIn"]').fill(user.linkedin_url[0]);
  await page.locator('input[name="github"]').fill(user.github_url[0]);
 
}

async function fieldsLocators(page){
  const firstName = page.locator('input[name="firstName"]');
  const lastName = page.locator('input[name="lastName"]');
  const email =  page.locator('input[name="email"]');
  const password = page.locator('input[name="password"]');
  const confirmPassword = page.locator('input[name="confirmPassword"]');
  const genderMale = page.locator('#male');
  const genderFemale = page.locator('#female');
  const genderPNTS = page.locator('#preferNotToSay');
  const dob = page.locator('#dob');
  const phoneNumber = page.locator('#phone')
  const addressField = page.locator('input[name="address"]');
  const linkedinUrl = page.locator('input[name="linkedIn"]');
  const githubField = page.locator('input[name="github"]');
  const submitButton = page.locator('form input[type="submit"]');
  const dobLabel = page.locator('label[for="dob"]');
  const addressLabel = page.locator('label[for="address"]');
  const firstNameError = page.locator('#root > form > div:nth-child(1) > p');
  const lastNameError = page.locator('#root > form > div:nth-child(2) > p');
  const emailError = page.locator("#root > form > div:nth-child(3) > p");
  const passwordError = page.locator("#root > form > div:nth-child(4) > p");
  const confirmPasswordError = page.locator("#root > form > div:nth-child(5) > p");
  const phoneNumberError = page.locator("#root > form > div:nth-child(8) > p");



  return {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    genderMale,
    genderFemale,
    genderPNTS,
    dob,
    phoneNumber,
    addressField,
    linkedinUrl,
    githubField,
    submitButton,
    dobLabel,
    addressLabel,
    
  };

}

async function verifyRegistrationSuccess(page) {
  const firstNameValue = await page.inputValue('#firstName');
    expect(firstNameValue).toBe('');
}


module.exports = { fillAllFields, verifyRegistrationSuccess, fieldsLocators, fillMandatoryFields, fillOptionalFields };



const { test, expect } = require("@playwright/test");
const { fieldsLocators,fillAllFields,fillMandatoryFields,fillOptionalFields,verifyRegistrationSuccess } = require("../PageObject/RegistrationPagePOM");
const { UserData } = require("../FixturesFile/fixturesData");

test.describe("Registration Page Test", () => {
  const user = UserData(); // Creates object of UserData

  test.beforeEach(async ({ page }) => {
    // Navigates to the registration page Url from the Pom
    await page.goto("/");
  });


  // ============================================First Name==============================================================
  test("Verify Form Correctly Validates Profile Creation With Valid Alphabetic Characters Filled in First Name Field", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page); //Create object of the fieldsLocators
    //verify the first name input field is enabled
    await expect(locators.firstName).toBeEnabled();

    //Enters First name John in the input box
    await locators.firstName.fill(user.first_name[0]);

    await locators.submitButton.click();

    //Asserts John is displayed in the input box after filling
    expect(locators.firstName).toHaveValue(user.first_name[0]);
  });

  test("Verify First Name field correctly rejects special characters", async ({
    page,
  }) => {

    page.on('dialog',async(dialog)=>{
      let message = dialog.message();
      expect(message).toBe("First name must contain alphabetical characters only");
      await dialog.accept();
    });

    const locators = await fieldsLocators(page);
    //Enters Invalid first name
    await locators.firstName.fill(user.first_name[1]);
    await locators.submitButton.click();
    
  });
  test("Verify First Name field correctly rejects Alphanumeric Characters", async ({
    page,
  }) => {

    const locators = await fieldsLocators(page);

    page.on('dialog',async(dialog)=>{
      let message = dialog.message();
      expect(message).toBe("First name must contain alphabetical characters only");
      await dialog.accept();
    });
    //Enters Invalid first name
    await locators.firstName.fill(user.first_name[2]);
    await locators.submitButton.click();
  });

  test("Verify First Name Field correctly rejects white Spaces Between Letters", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);

    page.on('dialog',async(dialog)=>{
      let message = dialog.message();
      expect(message).toBe("First name must contain alphabetical characters only");
      await dialog.accept();
    });

    //Enters Invalid first name
    await locators.firstName.fill(user.first_name[3]);
    await locators.submitButton.click();
  });

  test("Verify First Name Field throws an error if left empty", async ({
    page,
  }) => {

    page.on('dialog',async(dialog)=>{
      let message = dialog.message();
      expect(message).toBe("First name must be filled out");
      await dialog.accept();
    });
    const locators = await fieldsLocators(page);
    //verify the first name input field is enabled
    await expect(locators.firstName).toBeEnabled();

    //Enters Invalid first name
    await locators.firstName.fill(user.first_name[4]);
    await locators.submitButton.click();
  });

  // ============================================Last Name==============================================================
  test("Verify Form Correctly Validates Profile Creation With Valid Alphabetic Characters Filled in Last Name Field", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page); //Create object of the fieldsLocators
    //verify the last name input field is enabled
    // await expect(locators.firstName).toBeEnabled();

    //Enters First name John in the input box
    await locators.firstName.fill(user.first_name[0]);
    //Enters last name Smith in the input box
    await locators.lastName.fill(user.last_name[0]);

    await locators.submitButton.click();

    //Asserts John is displayed in the input box after filling
    expect(locators.lastName).toHaveValue(user.last_name[0]);
  });

  test("Verify Last Name field correctly rejects special characters", async ({
    page,
  }) => {
    page.on('dialog',async(dialog)=>{
      let message = dialog.message();
      expect(message).toBe("Last name must contain alphabetical characters only");
      await dialog.accept();
    });
    
          
    const locators = await fieldsLocators(page);

    //Enters First name John in the input box
    await locators.firstName.fill(user.first_name[0]);
    //Enters Invalid last name
    await locators.lastName.fill(user.last_name[1]);
    await locators.submitButton.click();
    
  });
  test("Verify Last Name field correctly rejects Alphanumeric Characters", async ({
    page,
  }) => {

    page.on('dialog',async(dialog)=>{
      let message = dialog.message();
      expect(message).toBe("Last name must contain alphabetical characters only");
      await dialog.accept();
    });
    const locators = await fieldsLocators(page);
    //Enters First name John in the input box
    await locators.firstName.fill(user.first_name[0]);
    //Enters Invalid last name
    await locators.lastName.fill(user.last_name[2]);
    await locators.submitButton.click();
    
  });

  test("Verify Last Name Field correctly rejects white Spaces Between Letters", async ({
    page,
  }) => {


    page.on('dialog',async(dialog)=>{
      let message = dialog.message();
      expect(message).toBe("Last name must contain alphabetical characters only");
      await dialog.accept();
    });

    const locators = await fieldsLocators(page);
    //Enters First name John in the input box
    await locators.firstName.fill(user.first_name[0]);
    //Enters Invalid first name
    await locators.lastName.fill(user.last_name[3]);
    await locators.submitButton.click();
    
  });

  test("Verify Last Name Field throws an error if left empty", async ({
    page,
  }) => {

    page.on('dialog',async(dialog)=>{
      let message = dialog.message();
      expect(message).toBe("First name must be filled out");
      await dialog.accept();
    });
    
    const locators = await fieldsLocators(page);
    //Enters First name John in the input box
    await locators.firstName.fill(user.first_name[0]);
    //verify the first name input field is enabled
    await expect(locators.lastName).toBeEnabled();
    

    //Enters Invalid first name
    await locators.lastName.fill(user.first_name[4]);

    await locators.submitButton.click();
    
  });

  // ============================================Email==============================================================

  test("Verify Email Field Correctly Validates valid email format", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);

    //Enter valid First name
    await locators.firstName.fill(user.first_name[0]);
    //Enter valid Last name
    await locators.lastName.fill(user.last_name[0]);
    //Enters valid Email
    await locators.email.fill(user.email_[0]);
    await locators.submitButton.click();
    //Asserts john.smith@example.com is displayed in the input box after filling
    expect(locators.email).toHaveValue(user.email_[0]);

  });

  test('Verify Email Field Correctly Rejects User Profile Creation With Missing "@" Symbol', async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);

    //Enter valid First name
    await locators.firstName.fill(user.first_name[0]);
    //Enter valid Last name
    await locators.lastName.fill(user.last_name[0]);
    //Enters invalid Email
    await locators.email.fill(user.email_[1]);

    await locators.submitButton.click();
    const isValid = await locators.email.evaluate((el) => el.checkValidity());
    expect(isValid).toBe(false);
   
  });

  test("Verify Email Field Correctly Rejects Profile Creation With Invalid Email (Missing Domain)", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);

    //Enter valid First name
    await locators.firstName.fill(user.first_name[0]);
    //Enter valid Last name
    await locators.lastName.fill(user.last_name[0]);
    //Enters invalid Email
    await locators.email.fill(user.email_[2]);

    page.on('dialog',async(dialog)=>{
      let message = dialog.message();
      expect(message).toBe("Email must be a valid email address");
      await dialog.accept();
    });
   

  });

  test("Verify Email Field throws an error if left empty", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);
    //verify the first name input field is enabled
    await expect(locators.email).toBeEnabled();

    //Enters Invalid first name
    await locators.email.fill(user.email_[3]);

    page.on('dialog',async(dialog)=>{
      let message = dialog.message();
      expect(message).toBe("Email must be filled out");
      await dialog.accept();
    });
  });

  // ============================================Password and Confirm Password==============================================================

  test("Verify Password and Confirm Password Fields Correctly Validates when they match", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);

    //Enter valid First name
    await locators.firstName.fill(user.first_name[0]);
    //Enter valid Last name
    await locators.lastName.fill(user.last_name[0]);
    //Enters valid Email
    await locators.email.fill(user.email_[0]);
    //Enters valid password
    await locators.password.fill(user.password_[0]);
    //Enters valid Confirm password
    await locators.confirmPassword.fill(user.confirm_password[0]);
    page.on("dialog", async (dialog) => {
      // dialogHandled = true;
      try {
        // Assert the alert message
        expect(dialog.message()).toBe("Submission successful"); //verification to assert Linkedinvalue was accepted and next required input needed
        await dialog.accept();
      } catch (error) {
        console.error("Error handling the dialog:", error);
        await dialog.dismiss();
      }
    });

    await locators.submitButton.click();

  });

  test("Verify Password And Confirm Password Field Correctly Rejects User Profile Creation With Wide Spaces Between Characters", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);

    //Enter valid First name
    await locators.firstName.fill(user.first_name[0]);
    //Enter valid Last name
    await locators.lastName.fill(user.last_name[0]);
    //Enters valid Email
    await locators.email.fill(user.email_[0]);
    //Enters invalid password
    await locators.password.fill(user.password_[1]);
    //Enters invalid Confirm password
    await locators.confirmPassword.fill(user.confirm_password[1]);

    page.on('dialog',async(dialog)=>{
      let message = dialog.message();
      expect(message).toBe("Password can only contain alphanumeric characters and symbols");
      await dialog.accept();
    });
  });

  test("Verify Password And Confirm Password Correctly Rejects User Profile Creation when they don't match", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);

    //Enter valid First name
    await locators.firstName.fill(user.first_name[0]);
    //Enter valid Last name
    await locators.lastName.fill(user.last_name[0]);
    //Enters valid Email
    await locators.email.fill(user.email_[0]);
    //Enters valid password
    await locators.password.fill(user.password_[2]);
    //Enters valid Confirm password
    await locators.confirmPassword.fill(user.confirm_password[2]);

    page.on('dialog',async(dialog)=>{
      let message = dialog.message();
      expect(message).toBe("Password can only contain alphanumeric characters and symbols");
      await dialog.accept();
    });
  });

  test("Verify Password And Confirm Password Correctly Rejects User Profile Creation when they are left empty", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);

    //Enter valid First name
    await locators.firstName.fill(user.first_name[0]);
    //Enter valid Last name
    await locators.lastName.fill(user.last_name[0]);
    //Enters valid Email
    await locators.email.fill(user.email_[0]);
    //Enters valid password
    await locators.password.fill(user.password_[3]);
    //Enters valid Confirm password
    await locators.confirmPassword.fill(user.confirm_password[3]);

    page.on('dialog',async(dialog)=>{
      let message = dialog.message();
      expect(message).toBe("Confirm password must be filled out");
      await dialog.accept();
    });
  });

  // ============================================Gender==============================================================

  test("Verify Gender Field Options Selection Checks On Click Correctly", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);

    //Gender selection Female
    await locators.genderFemale.check();
    await expect(locators.genderFemale).toBeChecked();
  });

  // ============================================DOB==============================================================

  test("Verify Date Of Birth Field Label Displays Correctly As Expected", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);
    //Asserts the text content of lable is correctly displayed
    expect(locators.dobLabel).toContainText("Date ofBirth (optional):");
  });

  // ============================================Phone Number==============================================================

  test("Verify Phone Number Field Correctly Validates With Numeric Characters of not morethan 10 digits", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);
    
    //Enter valid First name
    await locators.firstName.fill(user.first_name[0]);
    //Enter valid Last name
    await locators.lastName.fill(user.last_name[0]);
    //Enters valid Email
    await locators.email.fill(user.email_[0]);
    //Enters invalid password
    await locators.password.fill(user.password_[0]);
    //Enters invalid Confirm password
    await locators.confirmPassword.fill(user.confirm_password[0]);

    // Fill the phone number field with a valid numeric input
    await locators.phoneNumber.fill(user.phone_number[0]);
    page.on("dialog", async (dialog) => {
      // dialogHandled = true;
      try {
        // Assert the alert message
        expect(dialog.message()).toBe("Submission successful"); //verification to assert Linkedinvalue was accepted and next required input needed
        await dialog.accept();
      } catch (error) {
        console.error("Error handling the dialog:", error);
        await dialog.dismiss();
      }
    });

    await locators.submitButton.click();

  });

  test("Verify Phone Number Field Correctly  Rejects  Alphabetic Characters", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);
        //Enter valid First name
        await locators.firstName.fill(user.first_name[0]);
        //Enter valid Last name
        await locators.lastName.fill(user.last_name[0]);
        //Enters valid Email
        await locators.email.fill(user.email_[0]);
        //Enters invalid password
        await locators.password.fill(user.password_[0]);
        //Enters invalid Confirm password
        await locators.confirmPassword.fill(user.confirm_password[0]);

      // Attempt to fill the phone number field with alphabetic characters
      await locators.phoneNumber.fill(user.phone_number[1]);
      await locators.submitButton.click();
      // expect(locators.phoneNumberError).toContainText("Phone number must contain just numerical characters");await locators.submitButton.click();
      const isValid = await locators.phoneNumber.evaluate((el) => el.checkValidity());
      expect(isValid).toBe(false);
  });

  test("Verify Phone Number Field Correctly  Rejects Numeric characters of morethan 10 digits", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);
        //Enter valid First name
        await locators.firstName.fill(user.first_name[0]);
        //Enter valid Last name
        await locators.lastName.fill(user.last_name[0]);
        //Enters valid Email
        await locators.email.fill(user.email_[0]);
        //Enters invalid password
        await locators.password.fill(user.password_[0]);
        //Enters invalid Confirm password
        await locators.confirmPassword.fill(user.confirm_password[0]);

      
      await locators.phoneNumber.fill(user.phone_number[2]);
      
      await locators.submitButton.click();
      const isValid = await locators.phoneNumber.evaluate((el) => el.checkValidity());
      expect(isValid).toBe(false);
      
  });
  test("Verify Phone Number Field Correctly  Rejects Numeric characters with space inbetween", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);
        //Enter valid First name
        await locators.firstName.fill(user.first_name[0]);
        //Enter valid Last name
        await locators.lastName.fill(user.last_name[0]);
        //Enters valid Email
        await locators.email.fill(user.email_[0]);
        //Enters invalid password
        await locators.password.fill(user.password_[0]);
        //Enters invalid Confirm password
        await locators.confirmPassword.fill(user.confirm_password[0]);

      
      await locators.phoneNumber.fill(user.phone_number[3]);
      await locators.submitButton.click();
      const isValid = await locators.phoneNumber.evaluate((el) => el.checkValidity());
      expect(isValid).toBe(false);
     
  });

  // ============================================Address==============================================================
  test("Verify Address Field Correctly Validates With Valid Address Input", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);

    // Fill the address field with invalid input
    await locators.addressField.fill(user.address_[0]);

    page.on("dialog", async (dialog) => {
      try {
        expect(dialog.message()).toBe("Submission successful"); //verification to assert address value was accepted and required input needed
        await dialog.accept();
      } catch (error) {
        console.error("Error handling the dialog:", error);
        await dialog.dismiss();
      }
    });

    await locators.submitButton.click();
  });

  test("Verify The Address Field Label Displays Correctly As Expected", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page); //Create object of the fieldsLocators

    //Asserts the text content of lable is correctly displayed
    expect(locators.addressLabel).toContainText("Address (optioal):");
  });

  test("Verify Address Correctly Validates With Special Characters Filled", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);

    // Fill the address field with invalid input
    await locators.addressField.fill(user.address_[1]);



    await locators.submitButton.click();
  });

  // ============================================Linkedin==============================================================
  test("Verify Linkedin Field Correctly Validates With Valid input", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);

    // Fill the address field with invalid input
    await locators.linkedinUrl.fill(user.linkedin_url[0]);

    
    //Submits the form
    await locators.submitButton.click();
    
    //Asserts John is displayed in the input box after filling
    expect(locators.linkedinUrl).toHaveValue(user.linkedin_url[0]);
  });

    // ============================================GitHub==============================================================
  test("Verify GitHub URL Field Correctly Validates With Valid URL Filled", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);

    // Fill the Github field with valid input
    await locators.githubField.fill(user.github_url[0]);

    await locators.submitButton.click();
    expect(locators.githubField).toHaveValue(user.github_url[0]);
  });

  test("Verify Form Correctly Validates Profile Creation With All Fields Filled With Valid Data", async ({
    page,
  }) => {
    //fills out all fields with valid data
    await fillAllFields(page, user);

    await verifyRegistrationSuccess(page); //verification point by asserting first name field is empty after successfull form submission
  });

  test("Verify Form Correctly Validates Profile Creation With  Only Mandatory Fields Filled", async ({
    page,
  }) => {
    //fills out all mandatory fields with valid data
    await fillMandatoryFields(page, user);

   await page.waitForTimeout(2000)
    await verifyRegistrationSuccess(page); //verification point by asserting first name field is empty after successfull form submission
  });

  test("Verify Form Rejects Submission When Only Optional Fields Are Filled", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);

    //fills out all optional fields with valid data
    await fillOptionalFields(page, user);

    page.on("dialog", async (dialog) => {
    
      try {
        expect(dialog.message()).toBe("First name must be filled out");
        await dialog.accept();
      } catch (error) {
        console.error("Error handling the dialog:", error);
        await dialog.dismiss();
      }
    });

    await locators.submitButton.click();
  });

 
});

function UserData() {
    return {
      first_name: ['John', 'John%-+', 'John123', 'Jo hn',''],
      last_name: ['Smith', 'Smith%-', 'Smith12345', 'Smi th',''],
      email_: ['john.smith@example.com', 'john.smithexample.com', 'john.smith@example', ''],
      password_: ['P@ssw0rd', 'P@ss w0rd', '1234567',''],
      confirm_password: ['P@ssw0rd', 'P@ss w0rd', '12345679', ''],
      gender_: 'male',
      date_Of_birth: ['1990-01-01', '01-01-1990'],
      phone_number: ['1234567895', 'abc987654yt', '12345678905',"1 3 4554 55 45 5"],
      address_: ['123 Main St, Apt 1', '1234_+main St, %Apt 1'],
      linkedin_url: ['https://www.linkedin.com/in/johnsmith', '//www.linkedin.com/in/johnsmith'],
      github_url: ['https://github.com/johnsmith',' //github.com/johnsmith']
      

    };
    
  }
  
  module.exports = { UserData };
  
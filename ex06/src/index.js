let firstName = (firstName) => {
    return firstName.toUpperCase();
  };
  let lastName = (lastName) => {
    return lastName.toLowerCase();
  };
  console.log(firstName("Ermin"));
  console.log(lastName("Sacic"));
  
  exports.firstName = firstName;
  exports.lastName = lastName;
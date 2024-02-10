function validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[A-z])[a-zA-Z0-9]{8,}$/;
  
    if (values.name === "") {
      error.name = "Name should not be empty"
    } 
    else {
      error.name = "";
    }
  
    if (values.contact === "") {
      error.contact = "Contact number should not be empty";
    } else {
      error.contact = "";
    }
  
    if (values.age === "") {
      error.age = "Age should not be empty";
    } else {
      error.age = "";
    }
  
    if (values.dob === "") {
      error.dob = "Date of birth should not be empty";
    } else {
      error.dob = "";
    }
  
    if (values.email === "") {
      error.email = "Email should not be empty";
    }  else {
      error.email = "";
    }
  
    if (values.password === "") {
      error.password = "Password should not be empty";
    }  else {
      error.password = "";
    }
  
    return error;
  }
  
  export default validation;
  
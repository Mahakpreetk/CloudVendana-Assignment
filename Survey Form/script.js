function submitForm() {
  // Check if any required field is empty
  const requiredFields = [
    "first-name",
    "last-name",
    "date-of-birth",
    "country",
    "gender",
    "profession",
    "email",
    "mobile-number",
  ];
 
  const emptyField = requiredFields.find((fieldId) => {
    const field = document.getElementById(fieldId);
    return field.value.trim() === "";
  });
 
  if (emptyField) {
    alert("Please fill in all required fields.");
  } else {
    // All fields are filled, proceed to submit the form
    const message = `
      First Name: ${document.getElementById("first-name").value}
      Last Name: ${document.getElementById("last-name").value}
      Date of Birth: ${document.getElementById("date-of-birth").value}
      Country: ${document.getElementById("country").value}
      Gender: ${document.querySelector('input[name="gender"]:checked').value}
      Profession: ${document.getElementById("profession").value}
      Email: ${document.getElementById("email").value}
      Mobile Number: ${document.getElementById("mobile-number").value}
    `;
 
    alert(message);
    document.getElementById("survey-form").reset();
  }
}
 
function resetForm() {
  document.getElementById("survey-form").reset();
}
// Get all the elements with an email address
var emailElements = document.querySelectorAll('[href^="mailto:"]');

// Create an empty array to store the email addresses
var emailList = [];

// Loop through each email element and extract the email address
emailElements.forEach(function(element) {
  var email = element.getAttribute('href').replace('mailto:', '');
  emailList.push(email);
});

// Print the list of email addresses to the console
console.log(emailList);

// Your job is to look through the HTML and find the keys below in the HTML and replace them with
// their corresponding values. Note that they are all wrapped in curly brackets inside the DOM!!!!

// variables to look for
let stuff = {
  topHeader: "the new top header",
  linkText: "the new link text",
  finalMessage: "this is the final message"
};

// the string of html to look through
let thebody = document.body.innerHTML;

// console.log("BODY", thebody);
// thebody = thebody.replace("{topHeader}", stuff.topHeader);
// thebody = thebody.replace("{linkText}", stuff.linkText);
// thebody = thebody.replace("{finalMessage}", stuff.finalMessage);

//other way to do it more JSX

for (let key in stuff) {
  thebody = thebody.replace(key, stuff[key]);
}

thebody = thebody.replace(/{|}/g, "");

// YOUR CODE HERE...

// replacing the existing HTML string with the new HTML string
document.body.innerHTML = thebody;

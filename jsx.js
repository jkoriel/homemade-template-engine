let thebody = document.body.innerHTML
let stuff = {
  topHeader: 'the new top header',
  linkText: 'the new link text',
  finalMessage: 'this is the final message'
}

for (let key in stuff) {
  thebody = thebody.replace(key, stuff[key])
}

thebody = thebody.replace(/{|}/g, '')

document.body.innerHTML = thebody

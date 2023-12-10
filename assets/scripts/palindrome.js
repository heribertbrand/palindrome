// Get the html to be used and save them in their various variables
const inputElement = document.querySelector('.js-input')
const outputElement = document.querySelector('.js-output')

const palindromeCheck = () => {
  // insist on the user input string case to be compared
  const take = inputElement.value.toLowerCase()

  const stretch = take.length

  // Loop for matches during simultaenous iterations from both ends heading towards the 'middle' of the inputed string
  for (let i = 0; i < stretch / 2; i++) {
    if (take[i] !== take[stretch - 1 - i]) {
      return outputElement.value = 'Not a Palindrome!'
    }
  }
  return outputElement.value = 'Palindrome!'
}

// RESET APP
const clearScreen = () => {
  if (inputElement.value !== '') {
    return inputElement.value = ''
  }
  return outputElement.value = ''
}

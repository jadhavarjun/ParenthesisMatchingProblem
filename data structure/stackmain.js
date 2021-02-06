const parenthesisMatch = require("../Utility/stack");
var userInput = require('readline-sync');
// parenthesisMatch = new ParenthesisMatch();
userInput = userInput.question("Enter Value: ");
parenthesisMatch.checkParenthesis(userInput);
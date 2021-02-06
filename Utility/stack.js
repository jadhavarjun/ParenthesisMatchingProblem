var userInput = require('readline-sync');

class ParenthesisMatch {
    checkParenthesis(value) {
        console.log(value);
        let valueArray = value.split("");
        console.log(valueArray);
        let stack = [];
        valueArray.forEach(element => {
            switch (element) {
                case '(':
                    stack.push(element);
                    break;

                case '[':
                    stack.push(element);
                    break;

                case '{':
                    stack.push(element);
                    break;
            }

            switch (element) {
                case ')':
                    stack.pop(element);
                    break;

                case ']':
                    stack.pop(element);
                    break;
                    
                case '}':
                    stack.pop(element);
                    break;
            }
        });
        console.log(stack);
        if(stack.length==0){
            console.log("Parenthesis are Match");
        }
        else{
            console.log("Not Match");
        }
    }
}
module.exports = new ParenthesisMatch()
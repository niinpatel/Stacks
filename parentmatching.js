function parenthesisMatched(exp) {

    let stack = new Stack();

    let openParentheses = ["[", "(", "{"];

    let closeParentheses = ["]", ")", "}"];

    for(let i = 0, length = exp.length; i < length; i++){
        if(openParentheses.includes(exp[i])){
            stack.push(exp[i]);
        }
        else if(closeParentheses.includes(exp[i])){
            switch (exp[i]){
                case "]":
                    if(stack.peek() === "["){
                        stack.pop();
                    }
                    else {
                        return false;
                    }
                    break;
                case "}":
                    if(stack.peek() === "{"){
                        stack.pop();
                    }
                    else {
                        return false;
                    }
                    break;
                case ")":
                    if(stack.peek() === "("){
                        stack.pop();
                    }
                    else {
                        return false;
                    }
                    break;
            }
        }
    }

    return stack.length() === 0;

}

console.log(parenthesisMatched("{[()]}"));

console.log(parenthesisMatched("{()}[]"));

console.log(parenthesisMatched("{[)]}"));

console.log(parenthesisMatched("[)"));

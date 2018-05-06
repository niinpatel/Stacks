function evaluatePostFix(exp) {

    let stack = new Stack();

    for(let i = 0, length = exp.length; i < length; i++){
        if(isNaN(exp[i])){
            let op1, op2, operand;
            operand = exp[i];
            op2 = parseInt(stack.pop());
            op1 = parseInt(stack.pop());
            if(isNaN(op1) || isNaN(op2)){
                return 'invalid expression';
            }

            switch (operand){
                case "+":
                    stack.push(op1+op2);
                    break;
                case "-":
                    stack.push(op1-op2);
                    break;
                case "/":
                    stack.push(op1/op2);
                    break;
                case "*":
                    stack.push(op1*op2);
                    break;
                default:
                    return 'invalid expression';
            }

        }
        else {
            stack.push(exp[i]);
        }
    }


    return stack.length() === 1 ? stack.peek() : 'invalid expression';
}
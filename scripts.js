/**
 * Implementation of Stacks In ES6
 */

class Stack {

    //initialize an empty stack
    constructor(){
        this.items = [];
    }

    // push inside stack
    push(value){
        this.items.push(value);
    }

    // pop from stack and return popped value
    pop(){
        return (this.items.length === 0)? "Underflow" : this.items.pop();
    }

    // peek stack
    peek(){
        return this.items[this.items.length - 1];
    }

    // check if stack is empty
    length(){

        return this.items.length;

    }

    // traverse the stack and print all values
    traverse(){

        for(let i = 0, length = this.items.length; i < length; i++){
            console.log(this.items[i]);
        }

    }

}


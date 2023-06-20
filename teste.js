// passo 1: modelando
class Stack {
    constructor(){
        this.data = [];
        this.top = -1;
    } 

    push(value){
        this.top++;
        this.data[this.top] = value

        return this.data
    }

    pop(){
        if(this.top < 0){ 
            return undefined
        }

        const poppedTop = this.data[this.top]
        delete this.data[this.top]
        this.top--
        let coisol = [this.data, poppedTop]
        return poppedTop
    }

    peek(){
        return this.top >= 0 ? this.data[this.top] : undefined
    }
}


// passo 2: utilizando

const stack = new Stack();

// adicionar dados

stack.push('learning');
vale = stack.push('data');
console.log(stack.push('structures'))

console.log(stack.peek())

stack.pop()

console.log(stack.pop())


console.log(stack.peek())
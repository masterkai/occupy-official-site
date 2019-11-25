class Person {
    constructor (name) {
        this.name = name;
    }
    hello() {
        if(typeof this.name === 'string'){
            return `Hello, I am ${this.name}!`;
        }else {
            return `Hello!`;
        }
    }
}

let person = new Person('Neo');
// var name = 'Jen Smith';

var greetHTML = templates['greeting']({
    message: person.hello()
});
// document.write(greetHTML);

const result = data.filter(item=>item.regions.includes('信義區'))
console.log('result: ',result);

console.log('length: ',data.length);
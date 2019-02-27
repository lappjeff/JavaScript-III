/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.Window Bindng - this is bound to the window object and will refernce the window object and any items in the global scale
* 2. Implicit Binding - this is bound to the object to the left of the dot when you invoke it
* 3. Explicit Binding - using functions such as call, apply or bind to attach this to a specific object
* 4. New Binding - when using the New keyword this is bound to the object being created
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function windowBind (param) {
    console.log(this);
}

windowBind();

// Principle 2

// code example for Implicit Binding

const impBind = {
    name: 'Jeff',
    favLang: 'CSS',
    isFavLang: function () {
        return `${this.name} loves ${this.favLang} and this is an implicit binding`
    }
}

console.log(impBind.isFavLang());

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding

const bindMe = {
    name: 'Jeff',
    bound: true,
    test: 3
}

function expBind (action) {
    return `${this.name} is bound(${this.bound}) . Also, ${this.test}`
}

console.log(expBind.call(bindMe));

// Basic structure

// (function(){
//     // Declare private vars and functions

//     return {
//     // Declare public var and functions

//     }
// })();

// STANDARD MODULE PATTERN
// const UICtrl = (function(){
//     let text = 'Hello World';

//     const changeText = function() {
//         const element = document.querySelector('h1');
//         element.textContent = text;
//     }

//     return {
//         callChangeText: function() {
//             changeText();
//             console.log(text);
//         }
//     }
// })();

// UICtrl.callChangeText();
// // UICtrl.changeText();

// console.log(UICtrl.text);

// REVEALING MODULE PATTERN
// const itemCtrl = (function(){
//     let data = [];

//     function add(item){
//         data.push(item);
//         console.log('Item Added...');
//     }

//     function get(id){
//         return data.find(item => {
//             return item.id === id;
//         })
//     }

//     return {
//         add: add,
//         get: get
//     }
// })();

// itemCtrl.add({id : 1, name: 'John'});
// itemCtrl.add({id : 2, name: 'Mark'});
// console.log(itemCtrl.get(1));   

// ----------------------------------------------------------------------------------------//

// Singleton Pattern

const Singleton =(function(){
    let instance;

    function createInstance() {
        const object = new Object({name: 'Brad'});
        return object;
    }

    return {
        getInstance: function() {
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA);
console.log(instanceB);

console.log(instanceA === instanceB);

// Cannot have more than one instance with Singleton pattern
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

// const Singleton =(function(){
//     let instance;

//     function createInstance() {
//         const object = new Object({name: 'Brad'});
//         return object;
//     }

//     return {
//         getInstance: function() {
//             if(!instance){
//                 instance = createInstance();
//             }
//             return instance;
//         }
//     }
// })();

// const instanceA = Singleton.getInstance();
// const instanceB = Singleton.getInstance();

// console.log(instanceA);
// console.log(instanceB);

// console.log(instanceA === instanceB);

// Cannot have more than one instance with Singleton pattern

//-------------------------------------------------------------------------------------------//

// Factory Pattern

// function memberFactory() {
//         this.createMember = function(name, type) {
//             let member;

//             if(type === 'simple'){
//                 member = new SimpleMembership(name);
//             } else if (type === 'standard') {
//                 member = new StandardMembership(name);
//             } else if (type === 'super') {
//                 member = new SuperMembership(name);
//             }

//         member.type = type;

//         member.define = function() {
//             console.log(`${this.name} (${this.type}): ${this.cost}`)
//         }

//         return member;
//     }
// }

// const SimpleMembership = function(name) {
//     this.name = name;
//     this.cost = '$5';
// }

// const StandardMembership = function(name) {
//     this.name = name;
//     this.cost = '$15';
// }

// const SuperMembership = function(name) {
//     this.name = name;
//     this.cost = '$25';
// }

// const members = [];
// const factory = new memberFactory();

// members.push(factory.createMember('John Doe', 'simple'));
// members.push(factory.createMember('Doe Doe', 'super'));
// members.push(factory.createMember('John John', 'super'));
// members.push(factory.createMember('Doe John', 'standard'));


// // console.log(members);

// members.forEach(function(member){
//     member.define();
// })

//-------------------------------------------------------------------------------------------//

function eventObeserver(){
    this.observers = [];    
}

eventObeserver.prototype = {
    subscribe: function(fn) {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    },
    unsubscribe: function(fn){
        this.observers = this.observers.filter(function(item){
            if(item !== fn){
                return item;
            }
        });
        console.log(`You are now unsubsribed from ${fn.name}`)
    },
    fire: function() {
        this.observers.forEach(function(item){
            item.call();
        })
    }
}

const click = new eventObeserver();

// Create event listeners

document.querySelector('.sub-ms').addEventListener('click',function() {
    click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click',function() {
    click.subscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click',function() {
    click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click',function() {
    click.subscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click',function() {
    click.fire();
});

// Click Handler
const getCurMilliseconds = function() {
    console.log(`Current milliseconds: ${new Date().getMilliseconds()}`)
}
const getCurSeconds = function() {
    console.log(`Current Seconds: ${new Date().getSeconds()}`)
}
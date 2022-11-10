console.log('Hello World');

// const p2 = document.querySelector('#p-2');
// console.log(p2);

// const parElms = document.querySelectorAll('.bg-dark');
// console.log(parElms);

// const parTagElms = document.querySelectorAll('p');
// console.log(parTagElms);


// const section = document.querySelector('section');
// console.log(section);
// console.log(section.children);
// console.log(section.childNodes);

const sayHello = document.querySelector('#say-hello');
// console.log(sayHello);

// sayHello.addEventListener('click', function(e) {
//     console.log("Hello");
// });
let count = 1;
sayHello.addEventListener('click', (e) => { if (count < 3) {
    e.preventDefault();
    count ++
    }
});

const userInput = document.querySelector('#user-input');
userInput.addEventListener("keydown", e => { 
    console.log("Key Pressed");
    console.log(e.key);
});
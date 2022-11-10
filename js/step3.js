const p2 = document.querySelector('#p-2');
console.log(p2.id);
p2.id = "new-p";
console.log(p2.id);

const imgSwap = document.querySelector('#image-display img');
const changeBtn = document.querySelector('#image-display button');

let isFirst = true;
changeBtn.addEventListener('click', () => {
    if (isFirst) {
    imgSwap.src = '../ressources/rickroll-roll.gif';
    isFirst = false;
    } else {
    imgSwap.src = '../ressources/code.jpg';
    isFirst = true;
    }
});

const showBtn = document.querySelector('#show-btn');
showBtn.addEventListener('click', () => {
    imgSwap.classList.toggle('hide');
});

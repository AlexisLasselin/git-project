const p2 = document.querySelector('#p-2');
console.log(p2.id);
p2.id = "new-p";
console.log(p2.id);

const imgSwap = document.querySelector('#image-display img');
const changeBtn = document.querySelector('#image-display button');
changeBtn.addEventListener('click', () => {
    imgSwap.src = '../ressources/rickroll-roll.gif';
});
const stds = [
    'Victor',
    'Paul',
    'Alexis',
    'Karine',
    'Robin',
]

const stdList = document.querySelector('#std-list');
const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', () => {
    //! First Method
    // let list = "";
    // for (let i = 0; i < stds.length; i++) {
    //    list += `<li>${stds[i]}</li>`;
    // } 
    // stdList.innerHTML = list;

    //* Second Method
    for (let i = 0; i < stds.length; i++) {
        const newLi = document.createElement('li');
        newLi.textContent = stds[i];
        stdList.append(newLi);
    }
});
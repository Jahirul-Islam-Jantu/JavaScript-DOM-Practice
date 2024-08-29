const openModal = document.querySelector('#openModal');
const closeModal = document.querySelector('#closeModal');
const myModal = document.querySelector('#myModal');
const nameInput = document.querySelector('#name');
const inputList = document.querySelectorAll('input-list');


openModal.addEventListener('click', (e) => {
    myModal.style.display = 'block';
})
closeModal.addEventListener('click', (e) => {
    myModal.style.display = 'none';
})
window.addEventListener('click', (e) => {
    if (e.target == myModal) {
        myModal.style.display = 'none';
    }
})

// nameInput.addEventListener('input', (e) => {
//     values = e.target.value;
//     inputList.forEach(input => {
//        const element =  document.createElement('li')
//         element.textContent = values;
//
//     })
// })


const openModal = document.querySelector('#openModal');
const closeModal = document.querySelector('#closeModal');
const myModal = document.querySelector('#myModal');


openModal.addEventListener('click', (e) => {
    myModal.style.display = 'block';
})
closeModal.addEventListener('click', (e) => {
    myModal.style.display = 'none';
})

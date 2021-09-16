let loadBtn = document.querySelector('.loadBtn');
let cardList = document.querySelector('.cardList');
let load = document.querySelector('.load');
let loading = document.querySelector('.load h3');


loadBtn.addEventListener('click',  () => {
    loadBtn.classList.add('nonDisplay');
    loading.className = ''

    fetch("http://localhost:3000/api/users")
        .then(res => res.json())
        .then(data => {
            load.className = 'nonDisplay';
        })
        .catch(error => alert('Error of loading data'))
})

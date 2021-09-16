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
            cardGenerator(data);
            load.className = 'nonDisplay';
        })
        .catch(error => alert('Error of loading data'))
})


function cardGenerator(arr) {
    for (const item of arr) {
        let card = `
                  <div class="card">
                    <div class="card-image">
                      <img src=${item.photo}>
                      <span class="card-title">${item.first_name}</span>
                    </div>
                    <div class="card-content">
                        <h5>CV №: ${item.id}</h5>
                        <h6>Name: ${item.first_name}</h6>
                        <h6>Lastname: ${item.last_name}</h6>
                        <p>Email: ${item.email}</p>
                    </div>
                    <div class="card-action">
                      <a href="#">РЕЗЮМЕ</a>
                    </div>
                  </div>
            `
        cardList.innerHTML += card;
    }
}
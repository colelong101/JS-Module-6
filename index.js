const jokeEl = document.getElementById('joke');
const getJokeBtn = document.getElementById('get-joke-btn');
function getJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            jokeEl.innerText = data.value;
        })
}

getJoke();

getJokeBtn.addEventListener('click', getJoke);
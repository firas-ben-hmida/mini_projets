const myBox = document.getElementById('myBox');
const resultDisplay = document.getElementById('result');
const timerDisplay = document.getElementById('timer');

let emojis = [
    { emoji: '😮' }, 
    { emoji: '😆' }, 
    { emoji: '😍' }
];

let cards = [];
let selected = [];
let pair_matched = 0;
let time = 60;
let timer = null;
let gameStarted = false;

function createCards() {
    myBox.innerHTML = '';
    cards = [...emojis, ...emojis]; 
    
    cards.forEach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('emoji', item.emoji);
        card.setAttribute('index', index);
        card.textContent = 'Click Me 😀';
        card.addEventListener('click', handleClick);
        myBox.appendChild(card);
    });
}

function handleClick(e) {
    if (!gameStarted) return;
    const card = e.target;
    const emoji = card.getAttribute('emoji');
    const index = card.getAttribute('index');

    if (card.getAttribute('selected') === 'true' || selected.length === 2) return;

    card.setAttribute('selected', 'true');
    switch (emoji) {
        case '😮':
            card.style.backgroundColor = 'tomato';
            card.textContent = "OUCH!😮";
            break;
        case '😆':
            card.style.backgroundColor = 'yellow';
            card.textContent = "HAHA!😆";
            break;
        case '😍':
            card.style.backgroundColor = 'lightpink';
            card.textContent = "JADORE!😍";
            break;
    
    }
    selected.push({ card, emoji, index });

    if (selected.length === 2) {
        setTimeout(checkMatch, 600);
    }
}

function checkMatch() {
    const [first, second] = selected;
    if (first.emoji === second.emoji && first.index !== second.index) {
        pair_matched++;
        if (pair_matched === 3) {
        clearInterval(timer);
        resultDisplay.textContent = '🎉 Vous avez gagné !';
        gameStarted = false;
        }
    } else {
        hideCard(first.card);
        hideCard(second.card);
    }
    selected = [];
}

function hideCard(card) {
    card.removeAttribute('selected');
    card.textContent = 'Click Me 😀';
    card.style.backgroundColor = 'lightgreen';
}

function startGame() {
    createCards();
    pair_matched = 0;
    selected = [];
    time = 60;
    gameStarted = true;
    resultDisplay.textContent = '';
    timerDisplay.textContent = `Temps restant : ${time}s`;

    clearInterval(timer);
    timer = setInterval(() => {
        time--;
        timerDisplay.textContent = `Temps restant : ${time}s`;
        if (time <= 0) {
        clearInterval(timer);
        resultDisplay.textContent = '⏰ Temps écoulé ! Vous avez perdu.';
        document.querySelectorAll('.card').forEach(card =>
            card.removeEventListener('click', handleClick)
        );
        gameStarted = false;
        }
    }, 1000);
}

function restartGame() {
    clearInterval(timer);
    startGame();
}

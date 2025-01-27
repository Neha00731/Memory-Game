const cards = document.querySelectorAll('.card');
let flippedCards = [];
let matchedCards = 0;

function flipCard() {
    if (flippedCards.length === 2) return;

    this.classList.add('flip');
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.card === card2.dataset.card) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedCards += 2;
        if (matchedCards === cards.length) {
            alert('You win!');
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flip');
            card2.classList.remove('flip');
        }, 1000);
    }

    flippedCards = [];
}

(function shuffleCards() {
    cards.forEach(card => {
        const randomPos = Math.floor(Math.random() * 8);
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

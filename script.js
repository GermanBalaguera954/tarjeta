const card = document.getElementById('card');
const openCardBtn = document.getElementById('openCardBtn');

openCardBtn.addEventListener('click', () => {
    card.classList.toggle('is-flipped');

    if (card.classList.contains('is-flipped')) {
        setTimeout(() => {
            card.classList.remove('is-flipped');
        }, 10000);
    }
});


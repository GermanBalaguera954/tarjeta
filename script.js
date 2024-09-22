const card = document.getElementById('card');
const openCardBtn = document.getElementById('openCardBtn');

openCardBtn.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
});

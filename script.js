// script.js

document.addEventListener('DOMContentLoaded', () => {
    const hearts = document.querySelectorAll('.heart');

    hearts.forEach(heart => {
        heart.addEventListener('click', () => {
            const value = parseInt(heart.getAttribute('data-value'));
            const question = heart.parentElement.getAttribute('data-question');
            const questionHearts = document.querySelectorAll(`.rating[data-question="${question}"] .heart`);

            questionHearts.forEach(qHeart => {
                if (parseInt(qHeart.getAttribute('data-value')) <= value) {
                    qHeart.classList.add('selected');
                } else {
                    qHeart.classList.remove('selected');
                }
            });
        });
    });
});

function calculateResults() {
    let totalScore = 0;

    // Sum the scores from the hearts
    const selectedHearts = document.querySelectorAll('.heart.selected');
    selectedHearts.forEach(heart => {
        totalScore += parseInt(heart.getAttribute('data-value'));
    });

    localStorage.setItem('totalScore', totalScore);
    window.location.href = "resultados.html";
}

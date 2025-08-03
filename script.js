document.getElementById('bearButton').addEventListener('click', function() {
    const message = document.getElementById('loveMessage');
    const confettiContainer = document.getElementById('confetti-container');
    message.style.display = 'block';

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        confettiContainer.appendChild(confetti);

        setTimeout(() => {
            confettiContainer.removeChild(confetti);
        }, 3000);
    }
});

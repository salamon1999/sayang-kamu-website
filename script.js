document.getElementById('bearButton').addEventListener('click', function() {
    const message = document.getElementById('loveMessage');
    const audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer.style.display === 'none') {
        audioPlayer.style.display = 'block';
    }
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

function toggleAudio() {
    var player = document.getElementById('youtubePlayer');
    var playerState = player.src.includes('autoplay=1');
    if (playerState) {
        player.src = player.src.replace('autoplay=1', 'autoplay=0');
    } else {
        player.src = player.src.replace('autoplay=0', 'autoplay=1');
    }
}

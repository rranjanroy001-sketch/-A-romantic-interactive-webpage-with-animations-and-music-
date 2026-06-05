// Background music
const bgMusic = document.getElementById('bgMusic');

// Play music on user interaction
document.addEventListener('click', function() {
    if (bgMusic.paused) {
        bgMusic.volume = 0.3;
        bgMusic.play().catch(err => console.log('Audio play failed:', err));
    }
});

// Falling hearts particle effect
function createFallingHearts() {
    const container = document.getElementById('hearts-container');
    const heartEmojis = ['❤️', '💕', '💖', '💗', '💝'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 2 + 2.5) + 's';
        
        container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 5000);
    }, 300);
}

// Handle YES button
function handleYes() {
    const response = document.getElementById('response');
    response.textContent = '🎉 I love you too! Forever and always! 💕';
    
    // Play music
    bgMusic.volume = 0.3;
    bgMusic.play().catch(err => console.log('Audio play failed:', err));
    
    // Intense heart rain
    createIntenseHeartRain();
    
    // Confetti effect
    createConfetti();
    
    // Disable buttons
    document.querySelectorAll('.btn').forEach(btn => btn.disabled = true);
}

// Handle NO button (playful)
function handleNo() {
    const noBtn = document.querySelector('.btn-no');
    const randomX = (Math.random() - 0.5) * 300;
    const randomY = (Math.random() - 0.5) * 200;
    
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Intense heart rain for celebration
function createIntenseHeartRain() {
    const container = document.getElementById('hearts-container');
    const heartEmojis = ['❤️', '💕', '💖', '💗', '💝', '🎉', '✨'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.fontSize = (Math.random() * 1 + 1.5) + 'em';
            heart.style.animationDuration = (Math.random() * 1.5 + 2) + 's';
            
            container.appendChild(heart);
            
            setTimeout(() => heart.remove(), 4000);
        }, i * 50);
    }
}

// Confetti effect
function createConfetti() {
    const container = document.getElementById('hearts-container');
    const confettiEmojis = ['🎊', '🎉', '✨', '⭐', '💫', '🌟'];
    
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('heart');
        confetti.textContent = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = Math.random() * 50 + '%';
        confetti.style.animationDuration = (Math.random() * 2 + 2.5) + 's';
        confetti.style.opacity = '1';
        
        container.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
}

// Start falling hearts on page load
window.addEventListener('load', () => {
    createFallingHearts();
});

// Add click anywhere to play music
document.addEventListener('click', function playAudio() {
    bgMusic.volume = 0.3;
    bgMusic.play().catch(err => console.log('Audio play failed:', err));
});
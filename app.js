document.addEventListener('DOMContentLoaded', () => {
    const playButtons = document.querySelectorAll('.play-btn');
    const audio = new Audio();
    
    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Play song logic
            const songItem = button.closest('.song-item');
            const songTitle = songItem.querySelector('h3').textContent;
            const artistName = songItem.querySelector('p').textContent;

            // Here, you'd typically load the song's audio source, for now we just console log
            console.log(`Playing: ${songTitle} by ${artistName}`);
            
            // Update music player UI
            document.querySelector('.music-player .current-song img').src = songItem.querySelector('img').src;
            document.querySelector('.music-player .song-details h4').textContent = songTitle;
            document.querySelector('.music-player .song-details p').textContent = artistName;
        });
    });
});

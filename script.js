document.addEventListener('DOMContentLoaded', function() {
    // Güncel tarihi göster
    const currentDate = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        weekday: 'long' 
    };
    document.getElementById('current-date').textContent = 
        currentDate.toLocaleDateString('tr-TR', options);

    // Maç tahminleri verisi
    const predictions = [
        {
            homeTeam: "Cavaliers",
            awayTeam: "Hornets",
            homeProb: 64.76,
            awayProb: 35.24
        },
        {
            homeTeam: "Jazz",
            awayTeam: "Raptors",
            homeProb: 54.17,
            awayProb: 45.83
        },
        {
            homeTeam: "Mavericks",
            awayTeam: "Grizzlies",
            homeProb: 58.42,
            awayProb: 41.58
        },
        {
            homeTeam: "Timberwolves",
            awayTeam: "Heat",
            homeProb: 65.8,
            awayProb: 34.2
        },
        {
            homeTeam: "Thunder",
            awayTeam: "Blazers",
            homeProb: 82.5,
            awayProb: 17.5
        },
        {
            homeTeam: "Nuggets",
            awayTeam: "Suns",
            homeProb: 63.2,
            awayProb: 36.8
        },
        {
            homeTeam: "Kings",
            awayTeam: "Spurs",
            homeProb: 76.4,
            awayProb: 23.6
        },
        {
            homeTeam: "Clippers",
            awayTeam: "Knicks",
            homeProb: 58.7,
            awayProb: 41.3
        }
    ];

    // Animasyon efektleri
    const cards = document.querySelectorAll('.match-card');
    cards.forEach((card, index) => {
        card.style.animation = `fadeIn 0.5s ease ${index * 0.1}s forwards`;
    });
});

// Animasyon için CSS keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .match-card {
        opacity: 0;
    }
`;
document.head.appendChild(style);

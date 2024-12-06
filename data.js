function getNextDecember6() {
    const now = new Date();
    let year = now.getFullYear();

    // Ajusta para o próximo ano se já passou do dia 6 de dezembro deste ano
    if (now.getMonth() === 11 && now.getDate() > 6) {
        year++;
    }

    return new Date(`December 06, ${year} 00:00:00`).getTime();
}

function updateCountdown() {
    const now = new Date();
    const targetDate = getNextDecember6();
    const timeRemaining = targetDate - now.getTime();

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

    // Exibe a mensagem especial no dia 6 de dezembro
    if (now.getMonth() === 11 && now.getDate() === 6) {
        document.querySelector(".centralizado").innerHTML = `<span style="color: white; font-size: 20px; font-weight: bold;">Feliz mais um ano de namoro, vida!</span>`;
    } else {
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
    }

    // Verifica se o tempo terminou (evita contagem negativa)
    if (timeRemaining < 0) {
        document.getElementById("days").innerText = "0";
        document.getElementById("hours").innerText = "0";
        document.getElementById("minutes").innerText = "0";
    }
}

// Atualiza a cada segundo para maior precisão
setInterval(updateCountdown, 1000);

// Inicializa a contagem assim que a página é carregada
updateCountdown();

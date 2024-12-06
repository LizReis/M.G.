// voce.js
// Lista de URLs das imagens (substitua pelas URLs reais das imagens)
const images = [
    'mel1.png',
    'mel2.png',
    'mel3.png',
    'mel4.png',
    'mel5.png',
    'mel6.png',
    'mel7.png',
    'mel8.png'
];

const container = document.getElementById('background-images');

function createImage() {
    const img = document.createElement('img');
    img.src = images[Math.floor(Math.random() * images.length)];
    img.style.top = Math.random() * 80 + 'vh'; // Posiciona verticalmente de forma aleatória
    img.style.left = '100vw'; // Começa fora da tela no lado direito

    // Adiciona um tempo aleatório para cada imagem iniciar a animação
    img.style.animationDelay = Math.random() * 1 + 's'; 
    container.appendChild(img);

    // Remove a imagem após o tempo da animação (para evitar acúmulo de imagens)
    setTimeout(() => container.removeChild(img), 20000);
}

// Cria uma imagem inicial e continua criando novas a cada intervalo
createImage();
setInterval(createImage, 4000); // A cada 4 segundos cria uma nova imagem

// Criação do elemento de áudio
const audio = new Audio('ondas.mp3'); // Substitua pelo caminho correto

// Paths completos para os ícones
const pathMuted = "M10.717 3.55A.5.5 0 0 1 11 4v8a.5.5 0 0 1-.812.39L7.825 10.5H5.5A.5.5 0 0 1 5 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06M10 5.04 8.312 6.39A.5.5 0 0 1 8 6.5H6v3h2a.5.5 0 0 1 .312.11L10 10.96z";
const pathPlaying =  "M10.717 3.55A.5.5 0 0 1 11 4v8a.5.5 0 0 1-.812.39L7.825 10.5H5.5A.5.5 0 0 1 5 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06 M10 5.04 8.312 6.39A.5.5 0 0 1 8 6.5H6v3h2a.5.5 0 0 1 .312.11L10 10.96zM11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303zM10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89zM10.025 8a4.5 4.5 0 0 1-1.318 3.182L8 10.475A3.5 3.5 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.5 4.5 0 0 1 10.025 8"; // Corrigido para uma string única

// Seleciona o elemento SVG pelo ID
const svgVolume = document.getElementById('svgVolume');

// Adiciona evento de clique ao SVG
svgVolume.addEventListener('click', () => {
    if (audio.paused) {
        audio.play(); // Toca o áudio
        svgVolume.querySelector('path').setAttribute('d', pathPlaying); // Atualiza o caminho para o estado "Playing"
    } else {
        audio.pause(); // Pausa o áudio
        svgVolume.querySelector('path').setAttribute('d', pathMuted); // Atualiza o caminho para o estado "Muted"
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        "Clique aqui para ativar o som",
        "Meu amor",
        "Saiba que essa paisagem é a que mais amo, e ela me lembra você",
        "Tudo nela é lindo, o céu com essas cores vibrantes",
        "O mar responsável por essa melodia das ondas",
        "O sol que proporciona essas cores e brilho no céu",
        ", isso me lembra você"
    ];
    const svgImage = [
        `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
        </svg>`,
        ``,
        `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-emoji-heart-eyes" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.5 4.5 0 0 1 7.965 13a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242s1.46-.118 2.152-.242a27 27 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434m6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434"/>
        </svg>`,
        ``,
        `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" class="bi bi-tsunami" viewBox="0 0 16 16">
            <path d="M.036 12.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65m0 2a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65M2.662 8.08c-.456 1.063-.994 2.098-1.842 2.804a.5.5 0 0 1-.64-.768c.652-.544 1.114-1.384 1.564-2.43.14-.328.281-.68.427-1.044.302-.754.624-1.559 1.01-2.308C3.763 3.2 4.528 2.105 5.7 1.299 6.877.49 8.418 0 10.5 0c1.463 0 2.511.4 3.179 1.058.67.66.893 1.518.819 2.302-.074.771-.441 1.516-1.02 1.965a1.88 1.88 0 0 1-1.904.27c-.65.642-.907 1.679-.71 2.614C11.076 9.215 11.784 10 13 10h2.5a.5.5 0 0 1 0 1H13c-1.784 0-2.826-1.215-3.114-2.585-.232-1.1.005-2.373.758-3.284L10.5 5.06l-.777.388a.5.5 0 0 1-.447 0l-1-.5a.5.5 0 0 1 .447-.894l.777.388.776-.388a.5.5 0 0 1 .447 0l1 .5.034.018c.44.264.81.195 1.108-.036.328-.255.586-.729.637-1.27.05-.529-.1-1.076-.525-1.495s-1.19-.77-2.477-.77c-1.918 0-3.252.448-4.232 1.123C5.283 2.8 4.61 3.738 4.07 4.79c-.365.71-.655 1.433-.945 2.16-.15.376-.301.753-.463 1.13"/>
        </svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" class="bi bi-brightness-alt-high" viewBox="0 0 16 16">
            <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5m-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4m0 1a3 3 0 0 1 2.959 2.5H5.04A3 3 0 0 1 8 8"/>
        </svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-hearts" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.931.481c1.627-1.671 5.692 1.254 0 5.015-5.692-3.76-1.626-6.686 0-5.015m6.84 1.794c1.084-1.114 3.795.836 0 3.343-3.795-2.507-1.084-4.457 0-3.343M7.84 7.642c2.71-2.786 9.486 2.09 0 8.358-9.487-6.268-2.71-11.144 0-8.358"/>
        </svg>`
    ];

    let messageIndex = 0; // Índice da mensagem atual
    let svgIndex = 0;

    const svgMouse = document.getElementById('svgMouse');
    const mainElement = document.querySelector('main');
    const h1Element = document.querySelector('h1');

    // Array para armazenar os elementos de texto criados
    const textElements = [];
    const svgElements = [];

    svgMouse.addEventListener('click', () => {
        h1Element.style.visibility = 'hidden';
        if (messageIndex === messages.length) {
            // Remove todos os textos e SVGs da tela
            textElements.forEach(element => {
                if (mainElement.contains(element)) {
                    mainElement.removeChild(element);
                }
            });
            textElements.length = 0; // Limpa o array de textos

            svgElements.forEach(element => {
                if (mainElement.contains(element)) {
                    mainElement.removeChild(element);
                }
            });
            svgElements.length = 0; // Limpa o array de SVGs

            // Reseta os índices
            messageIndex = 0;
            svgIndex = 0;
        } else {
            // Cria um novo elemento para cada mensagem
            const textElement = document.createElement('div');
            textElement.style.color = 'white';
            textElement.style.marginTop = '20px';
            textElement.style.fontWeight = '500';
            textElement.style.textShadow = '5px 5px 4px rgba(0, 0, 0, 0.9)';

            const svgElement = document.createElement('div');


            // Estilo inicial para o texto principal (primeira mensagem)
            if (messageIndex === 0 && svgIndex === 0){
                textElement.style.fontSize = '17px';
                textElement.style.fontWeight = '';
                textElement.style.position = 'fixed';
                textElement.style.top = '67%';
                textElement.style.right = '15%';
                textElement.style.textShadow = '2px 1px 2px rgba(255, 255, 255, 0.6)';
                

                svgElement.style.position = 'fixed';
                svgElement.style.top = '71%';
                svgElement.style.right = '13%';
                svgElement.style.rotate = '270deg';
            } else if(messageIndex === 1 && svgIndex === 1) {
                textElement.style.fontSize = '80px';
                textElement.style.fontWeight = '800';
                textElement.style.position = 'fixed';
                textElement.style.top = '50%';
                textElement.style.left = '12%';
                textElement.style.textShadow = '';
            } else if (messageIndex === 2 && svgIndex === 2) {
                textElement.style.fontSize = '20px';
                textElement.style.fontWeight = '';
                textElement.style.position = 'fixed';
                textElement.style.top = '66%';
                textElement.style.left = '13%';
                textElement.style.textShadow = '2px 1px 2px rgba(255, 255, 255, 0.6)';

                svgElement.style.position = 'fixed';
                svgElement.style.top = '68%';
                svgElement.style.left = '48%';
            } else if(messageIndex === 3 && svgIndex === 3){
                textElement.style.fontSize = '20px';
                textElement.style.fontWeight = '';
                textElement.style.position = 'fixed';
                textElement.style.top = '18%';
                textElement.style.left = '20%';
            } else if(messageIndex === 4 && svgIndex === 4){
                textElement.style.fontSize = '20px';
                textElement.style.fontWeight = '';
                textElement.style.position = 'fixed';
                textElement.style.top = '73%';
                textElement.style.right = '22%';
                textElement.style.textShadow = '2px 1px 2px rgba(255, 255, 255, 0.6)';

                svgElement.style.position = 'fixed';
                svgElement.style.top = '75%';
                svgElement.style.right = '19%';
            } else if(messageIndex === 5 && svgIndex === 5){
                textElement.style.fontSize = '20px';
                textElement.style.fontWeight = '';
                textElement.style.position = 'fixed';
                textElement.style.top = '42%';
                textElement.style.right = '20%';

                svgElement.style.position = 'fixed';
                svgElement.style.top = '44%';
                svgElement.style.right = '17%';
            }else {
                textElement.style.fontSize = '80px';
                textElement.style.fontWeight = '800';
                textElement.style.position = 'fixed';
                textElement.style.top = '50%';
                textElement.style.left = '36%';
                textElement.style.textShadow = '';

                svgElement.style.position = 'fixed';
                svgElement.style.top = '58%';
                svgElement.style.right = '12%';
                svgElement.style.rotate = '15deg';
            }

            // Define o texto da mensagem
            textElement.textContent = messages[messageIndex];
            svgElement.innerHTML = svgImage[svgIndex];

            // Adiciona o texto ao elemento principal e armazena no array
            mainElement.appendChild(textElement);
            mainElement.appendChild(svgElement);
            textElements.push(textElement);
            svgElements.push(svgElement);


            // Avança para a próxima mensagem
            messageIndex++;
            svgIndex++;
        }
    });
});

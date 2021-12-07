
var images = document.querySelector(".description-hab-images") as HTMLDivElement;
var descriptionImages = document.querySelector(".image-description") as HTMLDivElement;

// Início das habilidades.

function htmlenter() {
    images.style.cssText = `
        background-color: rgb(85, 83, 83);
    `

    descriptionImages.style.cssText = `
        background-color: rgb(85, 83, 83);
    `

    images.innerHTML = `
        <img width="280px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"/>
    `

    descriptionImages.innerHTML = `
        <h2>O que é?</h2>
        <br>
        <p class="paragrafo">
        HTML abreviação para a expressão inglesa HyperText Markup Language, que significa: "Linguagem de Marcação de Hipertexto" é uma linguagem de marcação utilizada na construção de páginas na Web. 
        </p>
    `
}

function htmlexit() {  
    images.style.cssText = `
        background-color: ;
    `

    descriptionImages.style.cssText = `
        background-color: ;
    `

    images.innerHTML = ""

    descriptionImages.innerHTML = ""
}

function cssenter() {
    images.style.cssText = `
        background-color: rgb(85, 83, 83);
    `

    descriptionImages.style.cssText = `
        background-color: rgb(85, 83, 83);
    `

    images.innerHTML = `
        <img width="280px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"/>
    `

    descriptionImages.innerHTML = `
        <h2>O que é?</h2>
        <br>
        <p class="paragrafo">
        CSS ou Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web.
        </p>
    `
}

function cssexit() {
    images.style.cssText = `
        background-color: ;
    `

    descriptionImages.style.cssText = `
        background-color: ;
    `

    images.innerHTML = ""

    descriptionImages.innerHTML = ""
}

function jsenter() {
    images.style.cssText = `
        background-color: rgb(85, 83, 83);
    `

    descriptionImages.style.cssText = `
        background-color: rgb(85, 83, 83);
    `

    images.innerHTML = `
        <img width="280px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"/>
    `

    descriptionImages.innerHTML = `
        <h2>O que é?</h2>
        <br>
        <p class="paragrafo">
        JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. O JavaSript manipula o comportamento de páginas web.
        </p>
    `
}

function jsexit() {
    images.style.cssText = `
        background-color: ;
    `

    descriptionImages.style.cssText = `
        background-color: ;
    `

    images.innerHTML = ""

    descriptionImages.innerHTML = ""
}

function pupenter() {
    images.style.cssText = `
        background-color: rgb(85, 83, 83);
    `

    descriptionImages.style.cssText = `
        background-color: rgb(85, 83, 83);
    `

    images.innerHTML = `
        <img width="280px" src="/images/image-puppeteer.png"/>
    `

    descriptionImages.innerHTML = `
        <h2>O que é?</h2>
        <br>
        <p class="paragrafo">
        O Puppeteer é uma biblioteca que fornece uma API de alto nível para controlar o Chrome ou o Chromium através do Protocolo DevTools.
        </p>
    `
}

function pupexit() {
    images.style.cssText = `
        background-color: ;
    `

    descriptionImages.style.cssText = `
        background-color: ;
    `

    images.innerHTML = ""

    descriptionImages.innerHTML = ""
}

function nodenter() {
    images.style.cssText = `
        background-color: rgb(85, 83, 83);
    `

    descriptionImages.style.cssText = `
        background-color: rgb(85, 83, 83);
    `

    images.innerHTML = `
        <img width="280px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg"/>
    `

    descriptionImages.innerHTML = `
        <h2>O que é?</h2>
        <br>
        <p class="paragrafo">
        Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.
        </p>
    `
}

function nodexit() {
    images.style.cssText = `
        background-color: ;
    `

    descriptionImages.style.cssText = `
        background-color: ;
    `

    images.innerHTML = ""

    descriptionImages.innerHTML = ""
}

// Final das habilidades.

// Início dos projetos.

var descriptionProjeto = document.querySelector('.description-project') as HTMLDivElement;

function lojaenter() {
    descriptionProjeto.style.cssText = `
    background-color: rgb(85, 83, 83);
    `

    descriptionProjeto.innerHTML = `
    <h2>Linguagens utilizadas:</h2>
    <br>
    <div style="display: inline_block;">
        <img align="center" alt="Wesley-JS" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
        <img align="center" alt="Wesley-HTML" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
        <img align="center" alt="Wesley-CSS" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
    </div>
    <br>
    <p>
    Esse projeto tem o intuito de elaborar uma loja virtual de RPG de mesa afim de simular uma loja dentro da própria narrativa do jogo.
    </p>
    `
}

function lojaexit() {
    descriptionProjeto.style.cssText = `
    background-color: ;
    `

    descriptionProjeto.innerHTML = ""
}

function geoenter() {
    descriptionProjeto.style.cssText = `
    background-color: rgb(85, 83, 83);
    `

    descriptionProjeto.innerHTML = `
    <h2>Linguagens utilizadas:</h2>
    <br>
    <div style="display: inline_block;">
        <img align="center" alt="Wesley-JS" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
        <img align="center" alt="Wesley-PUPPE" src="https://img.shields.io/badge/Puppeteer-40B5A4?style=for-the-badge&logo=Puppeteer&logoColor=white">
        <img align="center" alt="Wesley-NODE" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
    </div>
    <br>
    <p>
    Afim de acelerar o processo de coleta de informações geográficas acerca de cidades brasileiras, utilizei a biblioteca Puppeteer para fazer scraping no site do IBGE e coletar essas informações que eu desejava. O GeoBot coleta informações a partir do código HTML do site do IBGE, retornando no próprio console essas informações coletadas, usando o Node.js como back end para fazer essa ponte e possibilitar o scraping.
    </p>
    `
}

function geoexit() {
    descriptionProjeto.style.cssText = `
    background-color: ;
    `

    descriptionProjeto.innerHTML = ""
}

function ferraenter() {
    descriptionProjeto.style.cssText = `
    background-color: rgb(85, 83, 83);
    `

    descriptionProjeto.innerHTML = `
    <h2>Linguagens utilizadas:</h2>
    <br>
    <div style="display: inline_block;">
        <img align="center" alt="Wesley-JS" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
        <img align="center" alt="Wesley-HTML" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
        <img align="center" alt="Wesley-CSS" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
    </div>
    <br>
    <p>
    Esse projeto foi idealizado em cima da perspectiva da educação matemática, ele tem como propósito a utilização do HTML, CSS e JavaScript para a criação de ferramentas facilitadoras da aprendizagem, se adequando a realidade de cada professor em sala de aula, ele mesmo criaria as ferramentas e repassaria para seus alunos as utilizarem.
    </p>
    `
}

function ferraexit() {
    descriptionProjeto.style.cssText = `
    background-color: ;
    `

    descriptionProjeto.innerHTML = ""
}

function pyenter() {
    descriptionProjeto.style.cssText = `
    background-color: rgb(85, 83, 83);
    `

    descriptionProjeto.innerHTML = `
    <h2>Linguagens utilizadas:</h2>
    <br>
    <div style="display: inline_block;">
        <img align="center" alt="Wesley-PY" src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white">
    </div>
    <br>
    <p>
    Com intuito de utilizar automação de tarefas utilizando Python, comecei a fazer uso da biblioteca Pyautogui para poder automatizar todo processo diário dentro de um jogo online, facilitando assim para que eu pudesse executar outras tarefas enquanto o programa fazia isso por mim.
    </p>
    `
}

function pyexit() {
    descriptionProjeto.style.cssText = `
    background-color: ;
    `

    descriptionProjeto.innerHTML = ""
}

function codeenter() {
    descriptionProjeto.style.cssText = `
    background-color: rgb(85, 83, 83);
    `

    descriptionProjeto.innerHTML = `
    <h2>Linguagens utilizadas:</h2>
    <br>
    <div style="display: inline_block;">
        <img align="center" alt="Wesley-JS" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
        <img align="center" alt="Wesley-PUPPE" src="https://img.shields.io/badge/Puppeteer-40B5A4?style=for-the-badge&logo=Puppeteer&logoColor=white">
        <img align="center" alt="Wesley-NODE" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
    </div>
    <br>
    <p>
    Afim de acelerar o processo de coleta de informações sobre alguns indices de ações da Bolsa de Valores, utilizei a biblioteca Puppeteer para fazer scraping no site do Status Invest e coletar essas informações que eu desejava. O CodeBot coleta informações a partir do código HTML do site, retornando no próprio console essas informações coletadas, usando o Node.js como back end para fazer essa ponte e possibilitar o scraping.
    </p>
    `
}

function codeexit() {
    descriptionProjeto.style.cssText = `
    background-color: ;
    `

    descriptionProjeto.innerHTML = ""
}

var image = document.querySelector(".description-hab-images")
var descriptionImage = document.querySelector(".image-description")


function htmlenter() {
    image.style.cssText = `
        background-color: rgb(85, 83, 83);
    `

    descriptionImage.style.cssText = `
        background-color: rgb(85, 83, 83);
    `

    image.innerHTML = `
        <img width="280px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"/>
    `

    descriptionImage.innerHTML = `
        <h2>O que é?</h2>
        <br>
        <p class="paragrafo">
        HTML abreviação para a expressão inglesa HyperText Markup Language, que significa: "Linguagem de Marcação de Hipertexto" é uma linguagem de marcação utilizada na construção de páginas na Web. 
        </p>
    `
}

function htmlexit() {  
    image.style.cssText = `
        background-color: ;
    `

    descriptionImage.style.cssText = `
        background-color: ;
    `

    image.innerHTML = ""

    descriptionImage.innerHTML = ""
}

function cssenter() {
    image.style.cssText = `
        background-color: rgb(85, 83, 83);
    `

    descriptionImage.style.cssText = `
        background-color: rgb(85, 83, 83);
    `

    image.innerHTML = `
        <img width="280px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"/>
    `

    descriptionImage.innerHTML = `
        <h2>O que é?</h2>
        <br>
        <p class="paragrafo">
        CSS ou Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web.
        </p>
    `
}

function cssexit() {
    image.style.cssText = `
        background-color: ;
    `

    descriptionImage.style.cssText = `
        background-color: ;
    `

    image.innerHTML = ""

    descriptionImage.innerHTML = ""
}

function jsenter() {
    image.style.cssText = `
        background-color: rgb(85, 83, 83);
    `

    descriptionImage.style.cssText = `
        background-color: rgb(85, 83, 83);
    `

    image.innerHTML = `
        <img width="280px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"/>
    `

    descriptionImage.innerHTML = `
        <h2>O que é?</h2>
        <br>
        <p class="paragrafo">
        JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. O JavaSript manipula o comportamento de páginas web.
        </p>
    `
}

function jsexit() {
    image.style.cssText = `
        background-color: ;
    `

    descriptionImage.style.cssText = `
        background-color: ;
    `

    image.innerHTML = ""

    descriptionImage.innerHTML = ""
}

function pupenter() {
    image.style.cssText = `
        background-color: rgb(85, 83, 83);
    `

    descriptionImage.style.cssText = `
        background-color: rgb(85, 83, 83);
    `

    image.innerHTML = `
        <img width="280px" src="/images/image-puppeteer.png"/>
    `

    descriptionImage.innerHTML = `
        <h2>O que é?</h2>
        <br>
        <p class="paragrafo">
        O Puppeteer é uma biblioteca que fornece uma API de alto nível para controlar o Chrome ou o Chromium através do Protocolo DevTools.
        </p>
    `
}

function pupexit() {
    image.style.cssText = `
        background-color: ;
    `

    descriptionImage.style.cssText = `
        background-color: ;
    `

    image.innerHTML = ""

    descriptionImage.innerHTML = ""
}

function nodenter() {
    image.style.cssText = `
        background-color: rgb(85, 83, 83);
    `

    descriptionImage.style.cssText = `
        background-color: rgb(85, 83, 83);
    `

    image.innerHTML = `
        <img width="280px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg"/>
    `

    descriptionImage.innerHTML = `
        <h2>O que é?</h2>
        <br>
        <p class="paragrafo">
        Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.
        </p>
    `
}

function nodexit() {
    image.style.cssText = `
        background-color: ;
    `

    descriptionImage.style.cssText = `
        background-color: ;
    `

    image.innerHTML = ""

    descriptionImage.innerHTML = ""
}
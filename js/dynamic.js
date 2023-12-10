const courses = [
    {
        title: 'PHP 7 Completo - Curso do Desenvolvedor Web',
        plataform: 'Udemy',
        emissionDate: 'Verificação emitida em out de 2023',
        skills: 'Competências: PHP · CSS · HTML5 · MySQL · Banco de dados'
    },
    {
        title: 'Treinamento Redes 5G - Softex',
        plataform: 'Universidade Estadual do Ceará',
        emissionDate: 'Verificação emitida em jul de 2023'
    },
    {
        title: 'Banco de Dados SQL',
        plataform: 'Microlins',
        emissionDate: 'Verificação emitida em fev de 2022'
    },
    {
        title: 'Programação C# Visual Studio (Basíco ao Avançado)',
        plataform: 'Microlins',
        emissionDate: 'Verificação emitida em fev de 2022'
    },
    {
        title: 'Lógica de programação',
        plataform: 'Microlins',
        emissionDate: 'Verificação emitida em jul de 2021'
    },
    {
        title: 'Pacote Office Completo - Microsoft Word, Excel e Powerpoint',
        plataform: 'Microlins',
        emissionDate: 'Verificação emitida em jul de 2021'
    },
]
const titleCourse = document.querySelectorAll('.card-title')
const plataformCourse = document.querySelectorAll('.card-subtitle') 
const emissionDateCourse = document.querySelectorAll('.card-text')

courses.forEach((item, i) =>{
    titleCourse[i].innerHTML = item.title
    plataformCourse[i].innerHTML = item.plataform
    emissionDateCourse[i].innerHTML = item.emissionDate
})

const projects = [
    {
        name: 'Pokedex/pokedex',
        description: 'Projeto de uma pokedex em React para o projeto final de uma cadeira da faculdade',
        repositore: 'https://github.com/MatheusFrancaDEV/pokedex',
        tecnologies: 'React, API'
    },
    {
        name: 'Eco Learning',
        description: 'Projeto feito em conjunto para a apresentação de um trabalho',
        repositore: 'https://github.com/MatheusFrancaDEV/eco-learning',
        tecnologies: 'HTML, CSS e JavaScript'
    },
]

const projectsContainer = document.getElementById('container-project')

projects.forEach((item) => {

    let newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <div class="card">
        <div class="card-body">
            <h3 class="project-title">${item.name}</h3>
            <hr>
            <p class="project-text">${item.description}</p>
            <a href="#" class="repositore">${item.repositore}</a>
            <hr>
            <span class="technologies fw-bold">Tecnologias: ${item.tecnologies}</span>
        </div>
    </div>
    `;
    projectsContainer.appendChild(newDiv)
});
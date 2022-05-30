const projetos = [
    {   
        name: "page 404 not found", 
        img: {  url:'img/devchalleges/404page-m.png',
                alt: 'página de site não encontrado'
            },
        tags: ['html','css','responsive','devChallenges'],
        texto: 'Neste projeto, trabalho com HTML e CSS para criar uma página responsiva. O design é de devchallenge.io.',
        links: {
            "demo": 'x',
            "code": 'y'
        }
    },
    {
        name: "Chechout", 
        img: {  url:'img/devchalleges/checkout-m.png',
                alt: 'página de checkout de hotel'
            },
        tags: ['html','css','responsive','devChallenges','javascript'],
        texto: 'Neste projeto, trabalho com HTML e CSS para criar uma página responsiva. O design é de devchallenge.io.',
        links: {
            "demo": 'x',
            "code": 'y'
        }
    },
    {
        name: "Chalé Hotel", 
        img: {  url:'img/cursos/chalehotel-m.png',
                alt: 'página inicial do chalé hotel'
            },
        tags: ['html','css','Cursos'],
        texto: 'Neste projeto, trabalho com HTML e CSS para criar uma página com lyaout fixo e bastante uso de imagens e elementos flutuantes. O design é do curso Dev Web',
        links: {
            "demo": 'x',
            "code": 'y'
        }
    },
    {
        name: "Noticias Cidade", 
        img: {  url:'img/cursos/noticiascidade-m.png',
                alt: 'página inicial do stie de notícias'
            },
        tags: ['html','css','Cursos'],
        texto: 'Neste projeto, trabalho com HTML e CSS para criar uma página com lyaout de colunas indo de 1 até 3. O design é do curso Dev Web',
        links: {
            "demo": 'x',
            "code": 'y'
        }
    },
    {
        name: "TecBlog", 
        img: {  url:'img/cursos/tecblog-m.png',
                alt: 'página inicial do Tecblog'
            },
        tags: ['html','css','Cursos'],
        texto: 'Neste projeto, trabalho com HTML e CSS para criar uma página com lyaout fixo. O design é do curso Dev Web',
        links: {
            "demo": 'x',
            "code": 'y'
        }
    },
    {
        name: "Design de Interiores", 
        img: {  url:'img/devchalleges/interior-consultant-m.png',
                alt: 'página de um design de interiores'
            },
        tags: ['html','css','devchallenges','responsive'],
        texto: 'Neste projeto, trabalho com HTML e CSS para criar uma página responsiva. O design é de devchallenge.io.',
        links: {
            "demo": 'x',
            "code": 'y'
        }
    }
    
]

var container = document.getElementById('container-projetos')

function conteudoDinamico(array) {

    array.forEach(element => {

        // criar a div onde os projetos ficam
        var caixaProjeto = document.createElement('div')
        caixaProjeto.classList.add('caixa-projetos')

        // Imagem do projeto
        var img = document.createElement('img')
        img.src = `${element.img['url']}`
        img.alt = `${element.img['alt']}`
        
        caixaProjeto.appendChild(img)

        // div com as informações do projeto ( titúlo, tags, texto e links)
        var inform = document.createElement('div')
        inform.classList.add('informacoes-projeto')

        // titúlo do projeto
        var titulo = document.createElement('h4')
        titulo.innerText = `${element.name}`

        inform.appendChild(titulo)

        // div com as tags do projeto

        var caixaTags = document.createElement('div')
        caixaTags.classList.add('tags')

        // tags do projeto

        // element.tags.length (quantidade de tags que tem nesse projeto)

        for(var teste = 0; teste < element.tags.length; teste++){
            var tagsDoProjeto = document.createElement('span')
            tagsDoProjeto.textContent = `${element.tags[teste]}`
            caixaTags.appendChild(tagsDoProjeto)
        }

        inform.appendChild(caixaTags)

        // texto com a descrição do projeto

        var texto = document.createElement('p')
        texto.innerText = `${element.texto}` 

        inform.appendChild(texto)

        // caixa com os links dos projetos

        var caixaLinks = document.createElement('nav')

        // links do código e site

        var linkDemo = document.createElement('a')
        linkDemo.href = `${element.links['demo']}`
        linkDemo.textContent = 'Demo'

        var linkCode = document.createElement('a')
        linkCode.href = `${element.links['code']}`
        linkCode.textContent = 'Code'

        caixaLinks.appendChild(linkDemo)
        caixaLinks.appendChild(linkCode)

        inform.appendChild(caixaLinks)

        caixaProjeto.appendChild(inform)

        container.appendChild(caixaProjeto)

    });

}

// Filtros

var devChallenges = document.getElementById('filtro-challenges')
 
var frontendMentor = document.getElementById('filtro-mentor')

var cursos = document.getElementById('filtro-cursos')

function filtro(event) {
    var targetFiltro = event.target
    console.log(targetFiltro.textContent)

    console.log(container.children[0])
}

conteudoDinamico(projetos)

devChallenges.addEventListener('click',filtro)
frontendMentor.addEventListener('click',filtro)
cursos.addEventListener('click',filtro)


//criação dos elementos para o projeto
function criarElementos(obj){
    
    //criar no local com o id especificado
    let idDiv = document.getElementById(`${obj.id}`)

    //criar um elementos pai parar os projetos
    let divProjetos = document.createElement('div')
    divProjetos.className = 'projetos'

    //criação do elementos com a imagem e atribuir ao elemento pai divProjetos
    let elementImg = document.createElement('img')
    elementImg.src = `${obj.imgUrl}`

    divProjetos.appendChild(elementImg)

    //criação do elemento pai do titulo, descrição e links
    let divDados = document.createElement('div')

    //criação dos elementos de titulo, descrição e links

    let elementTitulo = document.createElement('h4')
    elementTitulo.innerHTML = `${obj.titulo}`

    let elementDescricao = document.createElement('p')
    elementDescricao.innerHTML = `${obj.descricao}`

    let links = document.createElement('nav')

    let elementLinkDemo = document.createElement('a')
    elementLinkDemo.innerHTML = 'Demo'
    elementLinkDemo.href = `${obj.link_demo}`
    elementLinkDemo.target = '_blank'

    let elementLinkCode = document.createElement('a')
    elementLinkCode.innerHTML = 'Code'
    elementLinkCode.href = `${obj.link_code}`
    elementLinkCode.target = '_blank'

    //atribuição dos links na tag nav
    links.appendChild(elementLinkDemo)
    links.appendChild(elementLinkCode)

    //atribuição dos elementos na tag pai
    divDados.appendChild(elementTitulo)
    divDados.appendChild(elementDescricao)
    divDados.appendChild(links)

    //atribuição dos elemento pai( titulo, descrição, links) na tag pai Projetos
    divProjetos.appendChild(divDados)

    idDiv.appendChild(divProjetos)


}

// função que adicona os projetos e deixa a página dinâmica
function criarProjetos(arrayProjetos, i = 0, maxProjetos = 3){

    let numeroProjetos = arrayProjetos.length
    let idDiv = document.getElementById(arrayProjetos[i].id)

    //adicionar os projetos
    for( i ; i < maxProjetos; i++){
        //lógica para detectar projetos ainda não existentes
        if(arrayProjetos[i] !== undefined ){
            criarElementos(arrayProjetos[i]) 
        }
    }

    //contagem de quantos projetos e criação da navegação para acessar outros projetos
    numeroProjetos = Math.ceil(numeroProjetos / 3)

    let navItem = document.createElement('nav')
    navItem.className = 'nav-projetos'
    let divNav = document.createElement('div')
    let controleId = 0
    
    for( var x = 0; x < numeroProjetos; x++){
        //atualizar o projeto de acordo com a aba que a pessoa clicou
        let navNumber = document.createElement('a')
        navNumber.onclick = function(){
            idDiv.innerHTML = ''
            let countMaxProjetos = parseInt(this.id) + 3
            criarProjetos(arrayProjetos, this.id, countMaxProjetos)
        }
        navNumber.innerHTML = `${x + 1}`
        navNumber.id = `${controleId}`
        controleId += 3
        divNav.appendChild(navNumber)
    }

    navItem.appendChild(divNav)

    idDiv.appendChild(navItem)

}

//função para rodar a função assim que carregar a página
function renderizarPagina(){
    criarProjetos(devChallenges)
    criarProjetos(frontendMentor)
    criarProjetos(cursoUdemy)
}
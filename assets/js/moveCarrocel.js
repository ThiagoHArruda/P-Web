function moveCarrocelDireita(element) {
    const irmao = element.parentNode.children
    const filho = irmao[1].children
    console.log(filho);
    irmao[0].classList.add('catalogo__carrocel-botaoEsquerdo--ativo')
    irmao[1].children.style.transform = "translateX(10%)"

    setTimeout(function() {

    }, 100);
    //tranform translate
};



function moveCarrocelEsquerda(element) {
    const irmao = element.parentNode.children
    const filho = irmao[1].children
    irmao[0].style.transform = 'translateX(10%)'
    irmao[0].classList.remove('catalogo__carrocel-botaoEsquerdo--ativo')

}
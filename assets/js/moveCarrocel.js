function moveCarrocelDireita(element) {
    const parent = element.parentNode
    const velho = parent.children
    console.log(element);
    console.log(parent);
    console.log(velho[0]);
    parent.classList.add('girarCarrocel')
    setTimeout(function() {

        velho[0].classList.add('catalogo__carrocel-botaoEsquerdo--ativo')
    }, 750);

};



function moveCarrocelEsquerda(element) {
    const parent = element.parentNode
    const velho = parent.children
    console.log(element);
    console.log(parent);
    parent.classList.remove('girarCarrocel')
    velho[0].classList.remove('catalogo__carrocel-botaoEsquerdo--ativo')

}
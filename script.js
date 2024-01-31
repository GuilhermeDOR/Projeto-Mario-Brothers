const form = document.querySelector('.formulario-fale-conosco')
const mascara = document.querySelector('.mascara-formulario')
const formularioPosicao = {
    left: "0",
    transform:"translateX(-260px)"
};


function cliqueiNoBotao() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function sairFormulario (){
    form.style.left = formularioPosicao.left
    form.style.transform = formularioPosicao.transform
    mascara.style.visibility = "hidden"
}

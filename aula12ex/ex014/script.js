function carregar() {
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    msg.innerHTML =`Agora são ${hora}:${minuto} horas.`
    if (hora >= 0 && hora < 12) {
        foto.innerHTML = '<img src = "manha.jpg">'
        document.body.style.background = '#405E7A'
        titulo.innerHTML = 'Bom dia :) Tenha um ótimo dia!'

    } else if (hora >= 12 && hora < 18) {
        foto.innerHTML = '<img src = "tarde.jpg">'
        document.body.style.background = '#FE9D46'
        titulo.innerHTML = 'Boa tarde :) Tenha uma ótima tarde!'
    } else {
        foto.innerHTML = '<img src = "noite.jpg">'
        document.body.style.background = '#515154'
        titulo.innerHTML = 'Boa noite :) Tenha uma ótima noite!'
    }

}
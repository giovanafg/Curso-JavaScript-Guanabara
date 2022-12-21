function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var forano = document.getElementById('ano')
    var res = document.getElementById('res')
    if (forano.value.length == 0 || Number(forano.value > ano)) {
        alert('ERRO Verifique os dados e tente novamente')
    } else {
        var sex = document.getElementById('radsex')
        var masculino = document.getElementById ('mas')
        var feminino = document.getElementById ('fem')
        var idade = ano - Number(forano.value)
        var genero = ''
        var img = document.getElementById('foto')
        if (masculino.checked) {
            genero = 'homem'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
                res.innerHTML = `Detectamos que você é uma <strong>criança</strong> e tem <strong>${idade}</strong> anos. `
            }
            else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
                res.innerHTML = `Detectamos que você é um <strong>jovem</strong> e tem <strong>${idade}</strong> anos.`
            }
            else if (idade <50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
                res.innerHTML = `Detectamos que você é um <strong>adulto</strong> e tem <strong>${idade}</strongo> anos.`
            }
            else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
                res.innerHTML = `Detectamos que você é um <strong>idoso</strong> e tem <strong>${idade}</strong> anos.`
            }
        } else if (feminino.checked) {
            genero = 'mulher'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
                res.innerHTML = `Detectamos que você é uma <strong>criança</strong> e tem <strong>${idade}</strong> anos.`
            } else if (idade <21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
                res.innerHTML = `Detectamos que você é uma <strong>jovem</strong> e tem <strong>${idade}</strong> anos.`
            } else if (idade <50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
                res.innerHTML = `Detectamos que você é uma <strong>adulta</strong> e tem <strong>${idade}</strong> anos.`
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
                res.innerHTML = `Detectamos que você é uma <strong>idosa</strong> e tem <strong>${idade}</strong> anos.`
            }
        };
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}
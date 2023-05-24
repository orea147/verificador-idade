function check() {
    var ano = new Date().getFullYear()
    var fano = document.querySelector('input#txtyear')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados inseridos e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
            if (fsex[0].checked) {
                gênero = 'Homem'
                if (idade >= 0 && idade <10) {
                    img.setAttribute('src', 'foto-bebe-m.png')
                } else if (idade < 18) {
                    img.setAttribute('src', 'foto-jovem-m.png')
                } else if (idade < 50) {
                    img.setAttribute('src', 'foto-adulto-m.png')
                } else {
                    img.setAttribute('src', 'foto-idoso-m.png')
                }
            } else if (fsex[1].checked) {
                gênero = 'Mulher'
                if (idade >= 0 && idade <10) {
                    img.setAttribute('src', 'foto-bebe-f.png')
                } else if (idade < 18) {
                    img.setAttribute('src', 'foto-jovem-f.png')
                } else if (idade < 50) {
                    img.setAttribute('src', 'foto-adulto-f.png')
                } else {
                    img.setAttribute('src', 'foto-idoso-f.png')
                }
            }
        res.style.textAlign = 'center'
        if (gênero == 'Homem') {
            res.innerHTML = `Detectamos um <strong>${gênero}</strong> com <strong>${idade}</strong> anos.`
        } else {
            res.innerHTML = `Detectamos uma <strong>${gênero}</strong> com <strong>${idade}</strong> anos.`
        }
        res.appendChild(img)
    }
}
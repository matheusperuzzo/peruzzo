var nome = prompt('Qual o seu nome?')
if(nome == 'Nicole'||nome == 'nicole'){
    alert('Acesso liberado!\n       Te amo!')
}
else{
    alert('Acesso bloqueado!')
    location.reload()
}

function responder(){
    var res = document.getElementsByName('txtresp')
    var resp = ''
    var p = document.getElementById('p')
    var r = document.getElementById('r')
    var b = document.getElementById('b')
    var s = document.getElementById('s')
    if(res[0].checked){
        p.innerHTML = 'Que bom minha vida!!!'
        r.innerHTML = 'Saiba que estou sempre aqui para você, me liga se precisar, você sabe meu número.'
        b.style.visibility='hidden'
    }
    else{
        p.innerHTML = 'O que aconteceu, minha vida?'
        r.innerHTML = 'Não quero te ver triste nunca.<br> Por isso me liga agora, me conta tudo que está te deixando assim e deixa eu tentar melhorar seu dia só um pouquinho!'
    }
}
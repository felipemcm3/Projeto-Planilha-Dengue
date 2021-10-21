function entrou(){
    var usuario = document.getElementById('usuario')
    var senha = document.getElementById('senha')
    var res = document.getElementById('alerta')
    if(usuario.value.length == 0 || senha.value.length == 0){
        res.innerHTML = 'Informe os dados'
    }else{
        window.alert('tudo ok')
    }
}
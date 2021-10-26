import usuario from '../login/login.js'

var txtnome = document.getElementById('txtnome')
console.log(`${usuario}`)
txtnome.innerHTML += ` ${usuario}`
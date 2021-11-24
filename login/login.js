import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyD7CWrd41ti2yugd7BwyHYDu_F2VKi-at4",
    authDomain: "site-dengue.firebaseapp.com",
    projectId: "site-dengue",
    storageBucket: "site-dengue.appspot.com",
    messagingSenderId: "180230737124",
    appId: "1:180230737124:web:439bf90da39b1eb3a3b0f1",
    measurementId: "G-1M8BMCHNEW"
  };

  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
function entrou(){
    var usuario = document.getElementById('usuario');
    var senha = document.getElementById('senha');
    var res = document.getElementById('alerta');
    var entrar = document.getElementById('entrar');
    if(usuario.value.length == 0 || senha.value.length == 0){
        res.innerHTML = 'Informe os dados';
    }else{
        window.location.href = "../inicio/inicio.html";
    }
}

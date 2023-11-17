window.onscroll = function (){
    scrollFunction()
}

function scrollFunction(){
    let botao = document.getElementById('botao');

    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600){
        botao.style.display = "block";
    }else{
        botao.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
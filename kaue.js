function abrir(id) {

  document.getElementById('popup').style.display = 'block';
  popup.style.animation = "guh 0.5s ease-in-out forwards";



}
function fechar(id) {

  document.getElementById('popup').style.animation = "guhOut 0.5s ease-in-out forwards";
  document.getElementById('popup2').style.animation = "pop2Out 0.6s ease-in-out forwards";



}
function abrir2(popup2) {
  document.getElementById('popup2').style.animation = "pop2 0.5s ease-in-out forwards";
  document.getElementById('popup2').style.display = 'block';


}

function fechar2(popup2) {

  document.getElementById('popup2').style.animation = "pop2Out 0.5s ease-in-out forwards";
}


var carousel = document.getElementById("carousel");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var index = 0;
var images = carousel.getElementsByTagName("img");

// Esconde as imagens
for (var i = 1; i < images.length; i++) {
  images[i].style.display = "none";
}

// Função para mostrar a imagem anterior
prev.addEventListener("click", function () {
  images[index].style.display = "none";
  index = (index > 0) ? index - 1 : images.length - 1;
  images[index].style.display = "block";
});

// Função para mostrar a próxima imagem
next.addEventListener("click", function () {
  images[index].style.display = "none";
  index = (index < images.length - 1) ? index + 1 : 0;
  images[index].style.display = "block";
});





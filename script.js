

// navbar kısmı

$(window).scroll(function () {
    if ($(window).scrollTop() < 615) {
      $(".navbar").addClass("ba");
    }

    if ($(window).scrollTop() > 616) {
      $(".navbar").removeClass("ba");
    }
});


// Menü kısmı

function menu(c) {
var x, i; x = document.getElementsByClassName("column");
if (c == "all") c = "";

for (i = 0; i < x.length; i++) {
  fotoGizle(x[i], "show");
  if (x[i].className.indexOf(c) > -1) FotoEkle(x[i], "show");
}
}


function FotoEkle(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
  if (arr1.indexOf(arr2[i]) == -1) {
    element.className += " " + arr2[i];
  }
}
}

function fotoGizle(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
  while (arr1.indexOf(arr2[i]) > -1) {
    arr1.splice(arr1.indexOf(arr2[i]), 1);
  }
}
element.className = arr1.join(" ");
}

var button = document.getElementById("katagori");
var buttonlar = button.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
buttonlar[i].addEventListener("click", function(){
  var yayin = document.getElementsByClassName("active");
  yayin[0].className = yayin[0].className.replace(" active", "");
  this.className += " active";
});
}


const circle = document.querySelectorAll('.progress-ring__circle');
const btn = document.getElementsByClassName('btn')


//нахожу каждый круг и скрываю у него шкалу прогресс бара
for (let num_svg = 0; num_svg < circle.length; num_svg++) {

  const circumference = 2 * Math.PI * circle[num_svg].r.baseVal.value;
  circle[num_svg].style.strokeDashoffset = circumference;
}



btn[0].addEventListener('click', function () {
  for (let num_svg = 0; num_svg < circle.length; num_svg++) {

    const circumference = 2 * Math.PI * circle[num_svg].r.baseVal.value;

    circle[num_svg].style.strokeDasharray = `${circumference} ${circumference}`;
    circle[num_svg].style.strokeWidth = "4";
    circle[num_svg].style.stroke = "#fb8c00";

    //вычисляю длинну окружности

    const percent = +circle[num_svg].attributes.rd.value;
    circle[num_svg].style.strokeDashoffset = circumference - percent / 100 * circumference;

  }

});



btn[1].addEventListener( 'click', function (){
  for (let num_svg = 0; num_svg < circle.length; num_svg++) {

  //вычисляю длинну окружности
  const circumference = 2 * Math.PI * circle[num_svg].r.baseVal.value;

  circle[num_svg].style.strokeDashoffset = circumference;


  }
});

document.addEventListener( 'scroll', function(){
  if (window.pageYOffset >= 954){
    for (let num_svg = 0; num_svg < circle.length; num_svg++) {

    const circumference = 2 * Math.PI * circle[num_svg].r.baseVal.value;
    circle[num_svg].style.strokeDasharray = `${circumference} ${circumference}`;
    circle[num_svg].style.strokeWidth = "5";
    circle[num_svg].style.stroke = "#fb8c00";

    //вычисляю длинну окружности

    const percent = +circle[num_svg].attributes.rd.value;
    circle[num_svg].style.strokeDashoffset = circumference - percent / 100 * circumference;

  }

  }
});


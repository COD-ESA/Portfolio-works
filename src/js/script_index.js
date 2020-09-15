const circle = document.querySelectorAll('.progress-ring__circle');
//const btn = document.getElementsByClassName('btn')


//нахожу каждый круг и скрываю у него шкалу circle-прогресс бара
for (let num_svg = 0; num_svg < circle.length; num_svg++) {

  const circumference = 2 * Math.PI * circle[num_svg].r.baseVal.value;
  circle[num_svg].style.strokeDashoffset = circumference;
}


document.addEventListener( 'scroll', function(){
  for ( let num_circle = 0; num_circle < circle.length; num_circle++ ){

    /*
    *  функция getBoundingClientRect() и window.screen работают в chrome and firefox
    * проверить их поддержку  другими браузерами!!!
    * https://developer.mozilla.org/ru/docs/Web/API/Range/getBoundingClientRect
    */
    if ( window.screen.height / 2 > circle[num_circle].getBoundingClientRect().y){

      const circumference = 2 * Math.PI * circle[num_circle].r.baseVal.value;
      circle[num_circle].style.strokeDasharray = `${circumference} ${circumference}`;
      circle[num_circle].style.strokeWidth = "5";
      circle[num_circle].style.stroke = "#fb8c00";

      //вычисляю длинну окружности

      const percent = +circle[num_circle].attributes.rd.value;
      circle[num_circle].style.strokeDashoffset = circumference - percent / 100 * circumference;
      }
  }
})

//программирование line-progress бара
const line_progress = document.querySelectorAll('.svg-progress');


for ( let num_lp = 0; num_lp < line_progress.length; num_lp++){

  const shadow_line = line_progress[num_lp].parentElement.width.baseVal.value;
  line_progress[num_lp].style.strokeDashoffset = shadow_line;
}

//после выполнения анимации нужно удалить событие

document.addEventListener( 'scroll', function(){
  for ( let num_lp=0; num_lp < line_progress.length; num_lp++) {

    if ( window.screen.height / 2 > line_progress[num_lp].getBoundingClientRect().y){

      const shadow_line = line_progress[num_lp].parentElement.width.baseVal.value
      line_progress[num_lp].style.strokeDasharray = shadow_line;
      line_progress[num_lp].style.strokeWidth = "20";
      line_progress[num_lp].style.stroke = "blue";

      const percent = +line_progress[num_lp].attributes.proc.value;
      line_progress[num_lp].style.strokeDashoffset = shadow_line - (shadow_line / 100 * percent);

    }
  }
})

//document.removeEventListener( "transition", linePr);



//переменная показывает
//document.body.scrollHeight



















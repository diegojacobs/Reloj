var numbers = document.getElementById("numbers");

function insertNumbers(){
  var html = '<div class="number hora-1">1</div>';
  html += '<div class="number hora-2">2</div>';
  html += '<div class="number hora-3">3</div>';
  html += '<div class="number hora-4">4</div>';
  html += '<div class="number hora-5">5</div>';
  html += '<div class="number hora-6">6</div>';
  html += '<div class="number hora-7">7</div>';
  html += '<div class="number hora-8">8</div>';
  html += '<div class="number hora-9">9</div>';
  html += '<div class="number hora-10">10</div>';
  html += '<div class="number hora-11">11</div>';
  html += '<div class="number hora-12">12</div>';
  return html;
}

numbers.innerHTML = insertNumbers();

var agujas = document.getElementById("agujas");

function insertAgujas(){
  var html = '<div class="hour"></div>';
  html += '<div class="minute"></div>';
  html += '<div class="second"></div>';

  return html;
}

agujas.innerHTML = insertAgujas();

function getHour(){
  var date = new Date();
  var h = date.getHours(); 
  return h;
}

function printHour(){
  var hour = getHour();
  return hour + ':';
}

function getMinute(){
  var date = new Date();
  var m = date.getMinutes(); 
  return m;
}

function printMinute(){
  var minute = getMinute();
  return minute + ':';
}



function getSecond(){
  var date = new Date();
  var s = date.getSeconds(); 
  return s;
}

function printSecond(){
  var second = getSecond();
  return second;
}

var digital = document.getElementById("digital");

function insertClock(){
  var html = '<div class="digitalClock H" id="digitalH"></div>';
  html += '<div class="digitalClock M" id="digitalM"></div>';
  html += '<div class="digitalClock S" id="digitalS"></div>';
  return html;
}
digital.innerHTML = insertClock();
function refreshDigital(){
  var hour = document.getElementById("digitalH");
  hour.innerHTML = printHour();

  var minute = document.getElementById("digitalM");
  minute.innerHTML = printMinute();

  var second = document.getElementById("digitalS");
  second.innerHTML = printSecond(); 
}

setInterval(refreshDigital,1000);


var dropdown = document.getElementById('dropdown');
function changeClock(){
  var dropdown = document.getElementById('dropdown');
  var str = dropdown.options[dropdown.selectedIndex].text;
  console.log(str);
}
dropdown.addEventListener('change',changeClock(),dropdown);

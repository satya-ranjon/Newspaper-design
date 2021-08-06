

// responsive navebar

var botton = document.getElementById('btn').addEventListener('click', navManu);
var botton2 = document.getElementById('btn1');
var botton3 = document.getElementById('btn2');
var navManu = document.getElementById('navManu');

function navManu() {
     
     if (navManu.style.left == '-550%') {
          navManu.style.left = '0% ';
          botton3.style.display = 'block';
          botton2.style.display = 'none';
     } else {
          navManu.style.left = '-550%';
          botton2.style.display = 'block';
          botton3.style.display = 'none';
     }
}

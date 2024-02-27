let count = 0;
const value = document.querySelector(".zero");

if (localStorage.getItem('count') != null) {
     count = localStorage.getItem('count');
     value.innerHTML = localStorage.getItem('count');
}
// select btn
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
     btn.addEventListener('click', function (e) {
          const styles = e.currentTarget.classList;
          if (styles.contains('decrease')) {
               count--;
               value.style.color = "red";
               localStorage.setItem("count", count);
               value.innerHTML = localStorage.getItem('count');
          }
          else if (styles.contains('increase')) {
               count++;
               value.style.color = "blue";
               localStorage.setItem("count", count);
               value.innerHTML = localStorage.getItem("count");
          }
          else{
               count = 0;
               value.style.color = "black";
               localStorage.setItem("count", count);
               value.innerHTML = localStorage.getItem("count");
          }

          value.textContent = count;
     });
});
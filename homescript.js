/*========================navigation bar=========================*/
window.addEventListener('scroll', function(){
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
})

/*====================subscription========================*/
const input = document.querySelector('input');

function feedback() {
  var email = input.value.indexOf("@");
  blank = "true";

  if (email == -1) {
    alert("Not a valid email!");
    blank = "false";
  }

  if (blank == "false") {
    return false;
  }

  if (blank == "true") {
    alert('Thank you for subscribing to our newsletter');
  }
}

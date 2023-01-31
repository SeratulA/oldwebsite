setInterval(function() {
    var colors = ['lightpurple', 'pink', 'lightblue', 'lightgreen'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }, 2000);
  // function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  // function to scroll to the section1 of the page
  function scrollToSection1() {
    const section1 = document.getElementById("section1");
    section1.scrollIntoView({ behavior: "smooth" });
  }
  
  // function to scroll to the section2 of the page
  function scrollToSection2() {
    const section2 = document.getElementById("section2");
    section2.scrollIntoView({ behavior: "smooth" });
  }
  var btn = document.getElementById("myBtn");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

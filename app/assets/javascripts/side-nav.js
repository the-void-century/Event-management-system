document.getElementById("openNav").addEventListener("click",openNav);
document.getElementById("closeNav").addEventListener("click",closeNav);
function openNav() {
    document.getElementById("myNav").style.transform = "translate(0%)";
  }
function closeNav() {
    document.getElementById("myNav").style.transform = "translate(-100%)";
}

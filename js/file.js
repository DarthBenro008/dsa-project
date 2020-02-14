//External JS File
function callPopUp() {
  var elements = document.getElementsByClassName("algorithm");
  if (elements.length > 0) {
    elements[0].style.transition = "0.2s";
    elements[0].style.zIndex = "2";
    elements[0].style.display = "block";
    elements[0].style.top = "180px";
    elements[0].style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";

  }
  var elements_base_blur = document.getElementsByClassName("top");
  if (elements_base_blur.length > 0) {
    elements_base_blur[0].style.filter = "blur(5px)";
    elements_base_blur[0].style.zIndex = "-1";
    elements_base_blur[0].style.display = "block";
    elements_base_blur[0].style.transition = "0.5s";
  }
}
function changeText() {
  document.getElementById("texto").innerHTML = "New text!";
}

export function setupSticky() {

  window.onscroll = function() {myFunction()};
  document.getElementById("mturk-top-banner-inner-span").addEventListener("click", myFunction);
  var header = document.getElementById("main-menu-container");
  var mturk = document.getElementById("mturk-top-banner-drop-down-content");
  var sticky = header.offsetTop;
  
  function myFunction() {
    var mturkClass = mturk.classList[0];
    if ((window.pageYOffset <= sticky)) {
      header.classList.remove("sticky");
      header.classList.remove("sticky-with-mturk");
    } else if(mturkClass == "none"){
      header.classList.add("sticky");
      header.classList.remove("sticky-with-mturk");
  
    } else if((window.pageYOffset > sticky) && (mturkClass == "display")){
      header.classList.add("sticky-with-mturk");
      header.classList.remove("sticky");
    }
  }
}
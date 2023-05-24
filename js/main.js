window.onload = function() {
    // Code to be executed when the document finishes loading
    var dt = new Date();

    document.getElementById('copyr').innerHTML = "Copyright " + dt.getFullYear() + "(c)";
    
    document.getElementById('showClothButton').addEventListener("click", function() { 
        document.getElementsByClassName('not-visible')[0].classList.add("make-it-visible");
        document.getElementsByClassName('not-visible')[1].classList.add("make-it-visible");
        document.getElementsByClassName('not-visible')[2].classList.add("make-it-visible");
    });
    console.log("Document loaded!");
};
  


document.addEventListener( "DOMContentLoaded", function () {
    updateText()
  } );
  
  
  function updateText() {
    let getP = document.getElementById( "text" )
      getP.innerHTML = "This is really cool!";
  }


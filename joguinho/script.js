var mode = "light";

function darkMode() {
  const header = document.getElementById('header');
  const body = document.getElementById("body");
  const footer = document.getElementById("footer");
  const card1 = document.getElementById("direita");
  const card2 = document.getElementById("esquerda");
  const bDark = document.getElementById("darkMode");

  if (mode == "dark"){
    bDark.innerText = "DARK";
    header.style.color = "black";
    header.style.backgroundColor = "white";
    header.style.boxShadow = "0px 10px 4px #A9A9A9";

    card1.style.color = "black";
    card2.style.color = "black";
    card1.style.backgroundColor = "white";
    card2.style.backgroundColor = "white";
    body.style.backgroundColor = "white";

    footer.style.backgroundColor = "white";
    footer.style.color = "black";
    footer.style.boxShadow = "5px -8px 3px #A9A9A9";

    mode = "light";
  }
  else {
    bDark.innerText = "LIGHT";
    header.style.color = "#B3B3B3";
    header.style.backgroundColor = "#181818";
    header.style.boxShadow = "0px 10px 4px #000";
    
    card1.style.color = "white";
    card2.style.color = "white";
    card1.style.backgroundColor = "#181818";
    card2.style.backgroundColor = "#181818";
    body.style.backgroundColor = "#282828";

    footer.style.backgroundColor = "#181818";
    footer.style.color = "#B3B3B3";
    footer.style.boxShadow = "5px -8px 3px #000";
    
    mode = "dark";
  }

}
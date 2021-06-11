//

var local = " ";

var vez = "";
var jRed = "";
var jBlue = "";

var pontoRed = 0;
var pontoBlue = 0;

var arr = ["d1","d2","d3","d4","d5","d6","d7","d8","d9"];

// Checar o jogador
function checkPlay(id) {
  vez = id;
}

// definir nome dos jogadores e comecar jogo.
function defineNames() {
  const jog1 = document.getElementById('j1');
  const jog2 = document.getElementById('j2');

  if(j1.value == "" || j2.value == "")
    alert("Coloque nome para ambos jogadores");
  else {
    jRed = jog1.value;
    jBlue = jog2.value;
  }
}

// insert "id" into "local"
function insert(id) {
  local = id;
}

// Change color to red when X is pressed
function changeColorX() {
  if (vez != "red") {
    checkPlay("red");
    const c = document.getElementById(local);
    c.style.backgroundColor = 'red';
    atriPont("red");
  } else {
    alert("Agora é a vez do outro jogador!");
  }
}

// Change color to blue when O is pressed
function changeColorO() {
  if (vez != "blue") {
    checkPlay("blue");
    const c = document.getElementById(local);
    c.style.backgroundColor = 'blue';
    atriPont("blue");
  } else {
    alert("Agora é a vez do outro jogador!");
  }

}

// Create a listener binding the keyboard 
document.addEventListener('keypress', function(event) {
  if (event.code == 'KeyX') {
    //alert('x');
    changeColorX();
  }
  else if (event.code == 'KeyO') {
    //alert('o');
    changeColorO();
  }
});


function checkPont() {
  if (arr[0] == "blue" && arr[1] == "blue" && arr[2] == "blue") {
    let win = jBlue+" Ganhou!";
    alert(win);
  }
  if (arr[3] == "blue" && arr[4] == "blue" && arr[5] == "blue") {
    let win = jBlue+" Ganhou!";
    alert(win);
  }
  if (arr[6] == "blue" && arr[7] == "blue" && arr[8] == "blue") {
    let win = jBlue+" Ganhou!";
    alert(win);
  }
  //-------------------------------------------------------------
  if (arr[0] == "blue" && arr[3] == "blue" && arr[6] == "blue") {
    let win = jBlue+" Ganhou!";
    alert(win);
  }
  if (arr[1] == "blue" && arr[4] == "blue" && arr[7] == "blue") {
    let win = jBlue+" Ganhou!";
    alert(win);
  }
  if (arr[2] == "blue" && arr[5] == "blue" && arr[8] == "blue") {
    let win = jBlue+" Ganhou!";
    alert(win);
  }
  //-------------------------------------------------------------
  if (arr[0] == "blue" && arr[4] == "blue" && arr[8] == "blue") {
    let win = jBlue+" Ganhou!";
    alert(win);
  }
  if (arr[2] == "blue" && arr[4] == "blue" && arr[6] == "blue") {
    let win = jBlue+" Ganhou!";
    alert(win);
  }
  //-------------------------------------------------------------
  //-------------------------------------------------------------
  if (arr[0] == "red" && arr[1] == "red" && arr[2] == "red") {
    let win = jRed+" Ganhou!";
    alert(win);
  }
  if (arr[3] == "red" && arr[4] == "red" && arr[5] == "red") {
    let win = jRed+" Ganhou!";
    alert(win);
  }
  if (arr[6] == "red" && arr[7] == "red" && arr[8] == "red") {
    let win = jRed+" Ganhou!";
    alert(win);
  }
  //-------------------------------------------------------------
  if (arr[0] == "red" && arr[3] == "red" && arr[6] == "red") {
    let win = jRed+" Ganhou!";
    alert(win);
  }
  if (arr[1] == "red" && arr[4] == "red" && arr[7] == "red") {
    let win = jRed+" Ganhou!";
    alert(win);
  }
  if (arr[2] == "red" && arr[5] == "red" && arr[8] == "red") {
    let win = jRed+" Ganhou!";
    alert(win);
  }
  //-------------------------------------------------------------
  if (arr[0] == "red" && arr[4] == "red" && arr[8] == "red") {
    let win = jRed+" Ganhou!";
    alert(win);
  }
  if (arr[2] == "red" && arr[4] == "red" && arr[6] == "red") {
    let win = jRed+" Ganhou!";
    alert(win);
  }
}

function atriPont(w) {
  
  if (w == "blue") {
    if (local == "d1") {
      arr[0] = "blue";
    } else if (local == "d2") {
      arr[1] = "blue";
    } else if (local == "d3") {
      arr[2] = "blue";
    } else if (local == "d4") {
      arr[3] = "blue";
    } else if (local == "d5") {
      arr[4] = "blue";
    } else if (local == "d6") {
      arr[5] = "blue";
    } else if (local == "d7") {
      arr[6] = "blue";
    } else if (local == "d8") {
      arr[7] = "blue";
    } else if (local == "d9") {
      arr[8] = "blue";
    }
  }

  if (w == "red") {
    if (local == "d1") {
      arr[0] = "red";
    } else if (local == "d2") {
      arr[1] = "red";
    } else if (local == "d3") {
      arr[2] = "red";
    } else if (local == "d4") {
      arr[3] = "red";
    } else if (local == "d5") {
      arr[4] = "red";
    } else if (local == "d6") {
      arr[5] = "red";
    } else if (local == "d7") {
      arr[6] = "red";
    } else if (local == "d8") {
      arr[7] = "red";
    } else if (local == "d9") {
      arr[8] = "red";
    }
  }

  checkPont();
}


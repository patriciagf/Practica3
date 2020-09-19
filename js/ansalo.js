var letras = document.getElementById("letras");
var numeros = document.getElementById("numeros");
//botones
var a1 = document.getElementById("a1");
var b2 = document.getElementById("b2");
var c3 = document.getElementById("c3");
var d4 = document.getElementById("d4");
var e5 = document.getElementById("e5");
var f6 = document.getElementById("f6");
var g7 = document.getElementById("g7");
var h8 = document.getElementById("h8");
var i9 = document.getElementById("i9");
var j10 = document.getElementById("j10");
var comp = document.getElementById("comp");

//contador
var letraCont = "";
var numCont = "";

//Funciones
function btnA1() {
  if (letraCont == "") {
    letras.innerHTML = "A";
    letraCont = "A";
  } else {
    if (letraCont == "ABCDEFGHIJ") {
      numeros.innerHTML = "1";
      numCont = "1";
    }
  }
}

function btnB2() {
  if (letraCont == "A") {
    letras.innerHTML = "AB";
    letraCont = "AB";
  } else {
    if (letraCont == "ABCDEFGHIJ") {
      if (numCont == "1") {
        numeros.innerHTML = "12";
        numCont = "12";
      } else {
        alert("faltan numeros");
      }
    } else {
      alert("faltan letras");
    }
  }
}

function btnC3() {
  if (letraCont == "AB") {
    letras.innerHTML = "ABC";
    letraCont = "ABC";
  } else {
    if (letraCont == "ABCDEFGHIJ") {
      if (numCont == "12") {
        numeros.innerHTML = "123";
        numCont = "123";
      } else {
        alert("faltan numeros");
      }
    } else {
      alert("faltan letras");
    }
  }
}

function btnD4() {
  if (letraCont == "ABC") {
    letras.innerHTML = "ABCD";
    letraCont = "ABCD";
  } else {
    if (letraCont == "ABCDEFGHIJ") {
      if (numCont == "123") {
        numeros.innerHTML = "1234";
        numCont = "1234";
      } else {
        alert("faltan numeros");
      }
    } else {
      alert("faltan letras");
    }
  }
}

function btnE5() {
  if (letraCont == "ABCD") {
    letras.innerHTML = "ABCDE";
    letraCont = "ABCDE";
  } else {
    if (letraCont == "ABCDEFGHIJ") {
      if (numCont == "1234") {
        numeros.innerHTML = "12345";
        numCont = "12345";
      } else {
        alert("faltan numeros");
      }
    } else {
      alert("faltan letras");
    }
  }
}

function btnF6() {
  if (letraCont == "ABCDE") {
    letras.innerHTML = "ABCDEF";
    letraCont = "ABCDEF";
  } else {
    if (letraCont == "ABCDEFGHIJ") {
      if (numCont == "12345") {
        numeros.innerHTML = "123456";
        numCont = "123456";
      } else {
        alert("faltan numeros");
      }
    } else {
      alert("faltan letras");
    }
  }
}

function btnG7() {
  if (letraCont == "ABCDEF") {
    letras.innerHTML = "ABCDEFG";
    letraCont = "ABCDEFG";
  } else {
    if (letraCont == "ABCDEFGHIJ") {
      if (numCont == "123456") {
        numeros.innerHTML = "1234567";
        numCont = "1234567";
      } else {
        alert("faltan numeros");
      }
    } else {
      alert("faltan letras");
    }
  }
}

function btnH8() {
  if (letraCont == "ABCDEFG") {
    letras.innerHTML = "ABCDEFGH";
    letraCont = "ABCDEFGH";
  } else {
    if (letraCont == "ABCDEFGHIJ") {
      if (numCont == "1234567") {
        numeros.innerHTML = "12345678";
        numCont = "12345678";
      } else {
        alert("faltan numeros");
      }
    } else {
      alert("faltan letras");
    }
  }
}

function btnI9() {
  if (letraCont == "ABCDEFGH") {
    letras.innerHTML = "ABCDEFGHI";
    letraCont = "ABCDEFGHI";
  } else {
    if (letraCont == "ABCDEFGHIJ") {
      if (numCont == "12345678") {
        numeros.innerHTML = "123456789";
        numCont = "123456789";
      } else {
        alert("faltan numeros");
      }
    } else {
      alert("faltan letras");
    }
  }
}

function btnJ10() {
  if (letraCont == "ABCDEFGHI") {
    letras.innerHTML = "ABCDEFGHIJ";
    letraCont = "ABCDEFGHIJ";
  } else {
    if (letraCont == "ABCDEFGHIJ") {
      if (numCont == "123456789") {
        numeros.innerHTML = "12345678910";
        numCont = "12345678910";
      } else {
        alert("faltan numeros");
      }
    } else {
      alert("faltan letras");
    }
  }
}

function btncomp() {
  if (letraCont == "ABCDEFGHIJ") {
    if (numCont == "12345678910") {
      alert("completo letras y numeros. Que bien");
    }
  } else {
    alert("faltan caracteres");
  }
}

a1.onclick = function () {
  btnA1();
};
b2.onclick = function () {
  btnB2();
};
c3.onclick = function () {
  btnC3();
};
d4.onclick = function () {
  btnD4();
};

e5.onclick = function () {
  btnE5();
};

f6.onclick = function () {
  btnF6();
};

g7.onclick = function () {
  btnG7();
};

h8.onclick = function () {
  btnH8();
};

i9.onclick = function () {
  btnI9();
};

j10.onclick = function () {
  btnJ10();
};

comp.onclick = function () {
  btncomp();
};

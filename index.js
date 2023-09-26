function addition() {
  let n1 = document.getElementById("numero 1").value;
  let n2 = document.getElementById("numero 2").value;

  let numero1 = parseFloat(n1);
  let numero2 = parseFloat(n2);

  let addition = numero1 + numero2;

  window.alert("Le résultat de l'addition est : " + addition);
}


function soustraction() {
    let n1 = document.getElementById("numero 1").value;
    let n2 = document.getElementById("numero 2").value;
  
    let numero1 = parseFloat(n1);
    let numero2 = parseFloat(n2);
  
    let soustraction = numero1 - numero2;
  
    window.alert("Le résultat de la soustraction est : " + soustraction);
  }


  function multiplication() {
    let n1 = document.getElementById("numero 1").value;
    let n2 = document.getElementById("numero 2").value;
  
    let numero1 = parseFloat(n1);
    let numero2 = parseFloat(n2);
  
    let multiplication = numero1 * numero2;
  
    window.alert("Le résultat de la multiplication est : " + multiplication);
  }


  function division() {
    let n1 = document.getElementById("numero 1").value;
    let n2 = document.getElementById("numero 2").value;
  
    let numero1 = parseFloat(n1);
    let numero2 = parseFloat(n2);
  
    let division = numero1 / numero2;
  
    window.alert("Le résultat de la division est : " + division);
  }

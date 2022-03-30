function delta(a,b,c){
    const calculo = b ** 2  - 4 * a * c
    return calculo
}

function bhaskara(a,b,c){
    let x1 = 'Inexistente'
    let x2 = 'Inexistente'
    const valorDeDelta = delta(a,b,c)
    if (valorDeDelta == 0)
      x1 = (-b + Math.sqrt(valorDeDelta)) / (2 * a)
    else if (valorDeDelta > 0){
      x1 = (-b + Math.sqrt(valorDeDelta)) / (2*a)
      x2 = (-b - Math.sqrt(valorDeDelta)) / (2*a)
    }
    return{x1: x1, x2: x2}
}

function handleBtnCalcular(){
  const a = parseInt(document.getElementById('ValorA').value)
  const b = parseInt(document.getElementById('ValorB').value)
  const c = parseInt(document.getElementById('ValorC').value)
  const resultado = bhaskara(a, b, c)
  document.getElementById('resultadox1').innerHTML = 'x1: ' + resultado.x1
  document.getElementById('resultadox2').innerHTML = 'x1: ' + resultado.x2
}

document.getElementById('btnCalcular').addEventListener('click', handleBtnCalcular)


   
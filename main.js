function alterarRaio() {
    let r1 = parseInt(document.getElementById('inputRaio1').value)
    let r2 = parseInt(document.getElementById('inputRaio2').value)
    let r3 = parseInt(document.getElementById('inputRaio3').value)
    let r4 = parseInt(document.getElementById('inputRaio4').value)
    document.getElementById('mainBox').style.borderRadius = `${r1}px ${r2}px ${r4}px ${r3}px`

    escrever(r1, r2, r3, r4)
}

function escrever(r1, r2, r3, r4) {
    if(r1 > 0){
        document.getElementById("codigo").value = `border-top-left-radius: ${r1}px;\n`
    }
    if(r2 > 0){
        document.getElementById("codigo").value += `border-top-right-radius: ${r2}px;\n`
    }
    if(r3 > 0){
        document.getElementById("codigo").value += `border-bottom-left-radius: ${r3}px;\n`
    }
    if (r4 > 0) {
        document.getElementById("codigo").value += `border-bottom-right-radius: ${r4}px;`
    }
}

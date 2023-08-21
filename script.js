function calcular(event){
    event.preventDefault()
                    /* Varialvel LET */
    let alcoolInput = document.getElementById('alcool').value
    let gasolinaInput = document.getElementById('gasolina').value

    let contentResult = document.getElementById('content-result')
    let textResult = document.getElementById('text-result')

    let gasolinaSpan = document.getElementById('gasolina-result')
    let alcoolSpan = document.getElementById('alcool-result')

    let calculo = alcoolInput / gasolinaInput

    if(calculo < 0.7){
        textResult.innerHTML = 'Compensa usar Álcool'
    }
    else{
        textResult.innerHTML = 'compensa usar Gasolina'
    }
    gasolinaSpan.innerHTML = 'gasolina R$' + gasolinaInput
    alcoolSpan.innerHTML = 'alcool R$' + alcoolInput
    contentResult.classList.remove('hide')
}
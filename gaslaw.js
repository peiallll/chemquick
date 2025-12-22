let resultEl = document.getElementById("result-el")
let previousEl = document.getElementById("previous-el")
let errorEl = document.getElementById("error-el")

const R = 8.314
// PV = nRT

function isBlank(value) {
  return value.trim() === ""
}

function isMoreThan1Blank(lettersArray) {
    let blanks = 0
    for (let i = 0; i < lettersArray.length; i++ ) {
        if (lettersArray[i].trim() === "") {
            blanks += 1
        }
    }
    if (blanks > 1) {
        return true;
    } else {
        return false;
    }
}

function validateNumber(rawValue, fieldName) {
    if (!isBlank(rawValue) && Number.isNaN(Number(rawValue))) {
        errorEl.textContent = `${fieldName} must be a number`
        return false
    }
    return true
}

function getUnknown() {
    errorEl.textContent = ""

    const pressureInput = document.getElementById("pressure-input-el")
    const Praw = pressureInput.value
    // *
    const volumeInput = document.getElementById("volume-input-el")
    const Vraw = volumeInput.value
    // = 
    const numberOfMolesInput = document.getElementById("number-input-el")
    const Nraw = numberOfMolesInput.value
    // * 8.314
    // *
    const temperatureInput = document.getElementById("temperature-input-el")
    const Traw = temperatureInput.value

    if (isMoreThan1Blank([Praw,Vraw,Nraw,Traw])) {
        resultEl.textContent = "Result: "
        errorEl.textContent = "You left more than one input blank"
        return;
    }

    if (
    !validateNumber(Praw, "Pressure") ||
    !validateNumber(Vraw, "Volume") ||
    !validateNumber(Nraw, "Number of moles") ||
    !validateNumber(Traw, "Temperature")
    ) {
    resultEl.textContent = "Result: "
    errorEl.textContent = "Input Integers Only."
    return;
    }


    let P = Number(Praw)
    let V = Number(Vraw)
    let N = Number(Nraw)
    let T = Number(Traw)

    let result = ""
    let unknown = ""

    if (isBlank(Praw)) {
        unknown = "Pascals"
        result = Number(findPressure(V,N,T,R).toFixed(2))
    } else if (isBlank(Vraw)) {
        unknown = "m³"
        result = Number(findVolume(P,N,T,R).toFixed(2))
    } else if (isBlank(Nraw)) {
        unknown = "Moles"
        result = Number(findNumberOfMoles(P,V,T,R).toFixed(2))
    } else if (isBlank(Traw)) {
        unknown = "Kelvin"
        result = Number(findTemperature(P,V,N,R).toFixed(2))
    } else {
        resultEl.textContent = "Result: "
        errorEl.textContent = "Leave ONE input field blank - the unknown that you are trying to solve."
        return;
    }

    resultEl.textContent = `Result: ${result} ${unknown}`
    previousEl.textContent += `${result} ${unknown}` + " | "
}

function findPressure(Volume,NumberOfMoles,Temperature,Constant) { // nRT/V
    return (NumberOfMoles * Constant * Temperature) / Volume;
}

function findVolume(Pressure,NumberOfMoles,Temperature,Constant) { // nRT/P
    return (NumberOfMoles * Constant * Temperature) / Pressure;
}

function findNumberOfMoles(Pressure,Volume,Temperature,Constant) { // PV/RT
    return (Pressure * Volume) / (Constant * Temperature);
}

function findTemperature(Pressure,Volume,NumberOfMoles,Constant) { // PV/nR
    return (Pressure * Volume) / (NumberOfMoles * Constant);
}
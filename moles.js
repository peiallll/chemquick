let resultEl = document.getElementById("result-el")
let previousEl = document.getElementById("previous-el")
let errorEl = document.getElementById("error-el")

function getMoles() {
    errorEl.textContent = ""

    const massOfSampleInput = document.getElementById("mass-of-sample-input")
    const massRaw = massOfSampleInput.value

    const formulaMassInput = document.getElementById("formula-mass-input")
    const formulaMassRaw = formulaMassInput.value

    if (massRaw === "" || formulaMassRaw === "") {
        resultEl.textContent = "Result: "
        errorEl.textContent = "You left a field blank."
        return;
    }

    const mass = Number(massRaw)
    const formulaMass = Number(formulaMassRaw)

    if (isNaN(mass) || isNaN(formulaMass)) {
        resultEl.textContent = "Result: "
        errorEl.textContent = "Numeric Input Only"
        return;
    }

    let moles = Math.round(mass / formulaMass)

    resultEl.textContent = `Result: ${moles} Moles`
    previousEl.textContent += moles + " | "
}
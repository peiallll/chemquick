let errorEl = document.getElementById("error-el")
let resultEl = document.getElementById("result-el")

let arrValues = [];

let previousEl = document.getElementById("previous-el")

function isBlank() {
    for (let i = 0; i < arrValues.length; i++) {
        if (!arrValues[i].toString().trim()) {
            return true;
        }
    }
    return false;
}

function getRelativeIsotopicMass() {

    errorEl.textContent = ""

    const inputElement = document.getElementById("input-element-el")
    const userElement = inputElement.value;

    const isotope1MassEl = document.getElementById("input-mass1-el")
    const isotope1Mass = Number(isotope1MassEl.value);

    const isotope1AbundancyEl = document.getElementById("input-abundancy1-el")
    const isotope1Abundancy = Number(isotope1AbundancyEl.value);

    const isotope2MassEl = document.getElementById("input-mass2-el")
    const isotope2Mass = Number(isotope2MassEl.value);

    const isotope2AbundancyEl = document.getElementById("input-abundancy2-el")
    const isotope2Abundancy = Number(isotope2AbundancyEl.value);

    arrValues = [userElement, isotope1Mass, isotope1Abundancy, isotope2Mass, isotope2Abundancy]

    if (isBlank()) {
        resultEl.textContent = "Result: "
        errorEl.textContent = "You left a field blank."
        return;
    }

    if (Number(isotope2Abundancy) + Number(isotope1Abundancy) != 100) {
        resultEl.textContent = "Result: "
        errorEl.textContent = "Abundancies don't add up to 100%"
        return;
    }
    let numerator = (isotope1Mass * isotope1Abundancy) + (isotope2Mass * isotope2Abundancy)
    let total = numerator / 100
    resultEl.textContent = `Result: ${total}`
    previousEl.textContent += total + " | "
}
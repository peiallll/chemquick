const elements = ["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Sodium", "Magnesium", "Aluminium", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium"]

let resultEl = document.getElementById("result-el")
let errorEl = document.getElementById("error-el")
// variables
const atomicMasses = { // atomic masses list
        Hydrogen: 1,
        Helium: 4,
        Lithium: 7,
        Beryllium: 9,
        Boron: 11,
        Carbon: 12,
        Nitrogen: 14,
        Oxygen: 16,
        Fluorine: 19,
        Neon: 20,
        Sodium: 23,
        Magnesium: 24,
        Aluminium: 27,
        Silicon: 28,
        Phosphorus: 31,
        Sulfur: 32,
        Chlorine: 35.5,
        Argon: 40,
        Potassium: 39,
        Calcium: 45
    }

function getRelativeAtomicMass() {
    const elementInputEl = document.getElementById("element-input"); // input box for the element
    const userElementValue = elementInputEl.value; // read user inputted value off of the inpux box (line above)

    const multiplierInputEl = document.getElementById("number-of-element-input"); // input box for the multiplier (molecules)
    const userMultiplierEl = multiplierInputEl.value; // read value off of multiplier
    
    const withMolecules = Number(atomicMasses[userElementValue] * userMultiplierEl); // atomic mass * number of molecules

    if (userElementValue in atomicMasses) { // check for user input validility
        errorEl.textContent = "";
        resultEl.textContent = `Relative atomic mass: ${withMolecules}`;
    } else {
        resultEl.textContent = "";
        errorEl.textContent = `Element "${userElementValue}" not found (*please enter initial letter of element as Capital (f.e 'Boron', not 'boron'))`; // error message
    }
}
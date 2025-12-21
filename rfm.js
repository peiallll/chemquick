let resultEl = document.getElementById("result-el")
let errorEl = document.getElementById("error-el")
let previousEl = document.getElementById("previous-el")
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
        Calcium: 40,
        Scandium: 45,
        Titanium: 48,
        Vanadium: 51,
        Chromium: 52,
        Manganese: 55,
        Iron: 56,
        Cobalt: 59,
        Nickel: 59,
        Copper: 64,
        Zinc: 65,
        Gallium: 70,
        Germanium: 73,
        Arsenic: 75,
        Selenium: 79,
        Bromine: 80,
        Krypton: 84,
        Rubidium: 85,
        Strontium: 88,
        Yttrium: 89,
        Zirconium: 91,
        Niobium: 93,
        Molybdenum: 96,
        Technetium: 98,
        Ruthenium: 101,
        Rhodium: 103,
        Palladium: 106,
        Silver: 108,
        Cadmium: 112,
        Indium: 115,
        Tin: 119
    }

function getRelativeFormulaMass() {
    const elementInputEl = document.getElementById("element-input"); // input box for the element
    const userElementValue = elementInputEl.value; // read user inputted value off of the inpux box (line above)

    const multiplierInputEl = document.getElementById("number-of-element-input"); // input box for the multiplier (molecules)
    const userMultiplierEl = multiplierInputEl.value; // read value off of multiplier
    
    if (!userMultiplierEl || userMultiplierEl <= 0) {
    errorEl.textContent = "Please enter a valid number of molecules";
    resultEl.textContent = "Result: ";
    return;
}
// check user validity 

    if (userElementValue in atomicMasses) { // check user validity
        const formulaMass = Number(atomicMasses[userElementValue] * userMultiplierEl); // atomic mass * number of molecules
        errorEl.textContent = "";
        resultEl.textContent = `Relative formula mass: ~${formulaMass}`;
        previousEl.textContent += formulaMass + " | "
    } else {
        resultEl.textContent = "Result: ";
        errorEl.textContent = `Element "${userElementValue}" not found (*please enter initial letter of element as Capital (f.e 'Boron', not 'boron'))`; // error message
    }
}
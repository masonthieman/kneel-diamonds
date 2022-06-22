import { getMetals, setMetal } from "./database.js"

// Get all the metal records in the "metals" table
const metals = getMetals()

// Event handler that is triggered by selecting a metal radio input
// Adds the value of the "metal" element to the transient state
document.addEventListener(
    "change",
    (event) => {

        // If the element selected is a metal option add it to the order builder
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)

// Function that converts all of the metal records into <li> elements then returns it to be rendered in HTML
export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    // Iterate through all of the "metal" records and convert them to <li> elements
    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}


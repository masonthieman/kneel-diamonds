import { getSizes, setSize } from "./database.js"

// Get the state of all the diamond sizes
const sizes = getSizes()

// Event handler that is activated when a diamond size is selected
document.addEventListener(
    "change",
    (event) => {

        // If the name of the input selected is "size", convert its value to an integer and add it to the transient state
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value)) 
        }
    }
)

// Function that converts the records in the diamond sizes table into HTML radio inputs and returns them
export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    // Join the array of HTML strings into one string and combine with the HTML string builder
    html += listItems.join("")
    html += "</ul>"

    return html
}


import { getStyles, setStyle } from "./database.js"

// Get all the records in the styles table
const styles = getStyles()

// Event handler that is activated whenever a style is selected
document.addEventListener(
    "change",
    (event) => {

        // If the name of the element is "style" then add the style element's value to the transient state
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
        }
    }
)
// Function that converts all of the jewelry styles into <li> elements then returns it to be rendered
export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    // Iterate through all of the "style" records and convert them to <li> elements
    const listItemsArray = styles.map (
        (style) => {
            return `<li>
                <input type="radio" name="style" value="${style.id}" />${style.style}
            </li>`
        }
    )


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}


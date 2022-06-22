import { getOrders } from "./database.js"
import { getMetals, getSizes, getStyles } from "./database.js"
const buildOrderListItem = (order) => {
    const metals = getMetals()
    const styles = getStyles()
    const sizes = getSizes()

// Remember that the function you pass to find() must return true/false
// Returns the metal that matches with the metal id of the provided order
const foundMetal = metals.find(
    (metal) => {
        return metal.id === order.metalId
    }
)

// Add the price of the metal to the total cost and repeat for the style and size
let totalCost = foundMetal.price

// Returns the style that matches with the style id of the provided order
const foundStyle = styles.find(
    (style) => {
        return style.id === order.styleId
    }
)

// Add the price of the matching style to the total cost
totalCost += foundStyle.price

// Returns the size that matches with the size id of the provided order
const foundSize = sizes.find(
    (size) => {
        return size.id === order.sizeId
    }
)

// Add the price of the matching size to the total cost
totalCost += foundSize.price 

// Convert the total cost of an order to a USD currency string
const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

// Return the HTML of the currency string
return `<li>
    Order #${order.id} cost ${costString}
</li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}



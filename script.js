
// Main Function... 
const myFunction = () => {
    // ingredients: vagetables (for sandwiches)
    let tomatoes = 0;
    let peppers = 0;
    // only pieces
    let cucumbers = 0;
    // onions -- only wholes
    let onions = 0;

    // ingredients: other (for sandwiches)
    // mozzarella -- only pieces
    let mozzarella = 0;

    let chickenForPaninis = 0;
    let chickenForBaguettes = 0;

    // breads (for the oven)
    let baguettesWhite = 0;
    let baguettesDark = 0;
    let bagels = 0;

    let flagets = 0;

    let triangles = 0;
    let croissants = 0;


    // Get the value of the input field with id="inputSandwiches..." and set that value to the cell with the id="cellSandwiches..."
    // variable used to store the values inputed                
    // SANDWICHES
    let valueSandwiches = 0;
    // get the value inputed for every sandwich from the `sandwiches` array using a for loop
    for (let i = 0; i < sandwiches.length; i++) {

        // set the value of the variable `valueSandwiches` to the value inputed for each sandwich
        valueSandwiches = document.getElementById("inputSandwiches" + i).value;
        
        if (!valueSandwiches) {
            // when there is no value inputed
            valueSandwiches = "&mdash;";
            document.getElementById("cellSandwiches" + i).innerHTML = valueSandwiches;
            document.getElementById("cellSandwiches" + i).style.color = "lightgray";
            document.getElementById("cellSandwiches" + i).style.fontWeight = "normal";
        } else {
            // when there is a value inputed
            // write the value inputed in the SANDWICHES table
            document.getElementById("cellSandwiches" + i).innerHTML = valueSandwiches;

            // add up to ingredients values, depending on the sandwich
            if (sandwiches[i] == 'Bagels') {
                // 3 tomato pieces per bagel...12 bagels per row
                tomatoes += (3 * 12 * valueSandwiches);
                // onions -- only wholes
                // 1 onion per row
                onions += (1 * valueSandwiches);
            } else if (sandwiches[i] == 'Tomato & Mozzarella Paninis') {
                tomatoes += (3 * 9 * valueSandwiches);
                mozzarella += (3 * 9 * valueSandwiches);
            } else if (sandwiches[i] == 'Salami Baguettes') {
                tomatoes += (4 * 7 * valueSandwiches);
                cucumbers += (4 * 7 * valueSandwiches);
                peppers += (2 * 7 * valueSandwiches);
            } else if (sandwiches[i] == 'Flagets') {
                tomatoes += (3 * 8 * valueSandwiches);
            } else if (sandwiches[i] == 'Chicken Paninis') {
                peppers += (2 * 9 * valueSandwiches);
                chickenForPaninis += (2 * 9 * valueSandwiches);
            } else if (sandwiches[i] == 'Chicken Paninis (ciabatta)') {
                peppers += (2 * 9 * valueSandwiches);
                chickenForPaninis += (2 * 9 * valueSandwiches);
            } else if (sandwiches[i] == 'Ham & Cheese Triangles') {
                tomatoes += (2 * 10 * valueSandwiches);
                peppers += (2 * 10 * valueSandwiches);
            } else if (sandwiches[i] == 'Roast Beef Croissants') {
                peppers += (2 * 10 * valueSandwiches);
            } else if (sandwiches[i] == 'Chicken Baguettes') {
                // 14 pieces per baguette...7 baguettes per row
                chickenForBaguettes += (14 * 7 * valueSandwiches);
            }

            // add up to breads values, depending on the sandwich
            if (sandwiches[i] == 'Bagels') {
                bagels += (1 * valueSandwiches);
            } else if (sandwiches[i] == 'Ham & Cheese Baguettes (dark)') {
                baguettesDark += (1 * valueSandwiches);
            } else if (sandwiches[i] == 'Ham & Cheese Baguettes (white)') {
                baguettesWhite += (1 * valueSandwiches);
            } else if (sandwiches[i] == 'Chicken Baguettes') {
                baguettesWhite += (1 * valueSandwiches);
            } else if (sandwiches[i] == 'Salami Baguettes') {
                baguettesWhite += (1 * valueSandwiches);
            } else if (sandwiches[i] == 'Ham & Cheese Triangles') {
                triangles += (1 * valueSandwiches);
            } else if (sandwiches[i] == 'Flagets') {
                flagets += (1 * valueSandwiches);
            } else if (sandwiches[i] == 'Roast Beef Croissants') {
                croissants += (1 * valueSandwiches);
            }
        }
    };

    // Get the value of the input field with id="inputPacked..." and set that value to the cell with the id="cellPacked..."
    // variable used to store the values inputed                
    // PACKED SANDWICHES
    let valueSandwichesPacked = 0;
    // get the value inputed for every packed sandwich from the `packedSandwiches` array using a for loop
    for (let i = 0; i < packedSandwiches.length; i++) {
        // set the value of the variable `valueSandwichesPacked` to the value inputed
        valueSandwichesPacked = document.getElementById("inputPacked" + i).value;
        
        if (!valueSandwichesPacked) {
            // when there is no value inputed
            valueSandwichesPacked = "&mdash;";
            document.getElementById("cellPacked" + i).innerHTML = valueSandwichesPacked;
            document.getElementById("cellPacked" + i).style.color = "lightgray";
            document.getElementById("cellPacked" + i).style.fontWeight = "normal";
        } else {
            // when there is a value inputed
            // write the value inputed in the PACKED SANDWICHES table
            document.getElementById("cellPacked" + i).innerHTML = valueSandwichesPacked;
            // add up to ingredients values, depending on the packed sandwich
            if (packedSandwiches[i] == 'Roast Beef') {
                peppers += (2 * valueSandwichesPacked);
            } else if (packedSandwiches[i] == 'Vegetarian') {
                tomatoes += (4 * valueSandwichesPacked);
                peppers += (2 * valueSandwichesPacked);
                cucumbers += (4 * valueSandwichesPacked);
            }
        }
    };

    // set the last value of every breads variable in the cell with the correct id
    document.getElementById("baguettes-white-oven").innerHTML = baguettesWhite;
    document.getElementById("baguettes-dark-oven").innerHTML = baguettesDark;
    document.getElementById("bagels-oven").innerHTML = bagels;
    
    document.getElementById("flagets-oven").innerHTML = flagets;

    document.getElementById("triangles-oven").innerHTML = triangles;
    document.getElementById("croissants-oven").innerHTML = croissants;

    // set the last value of every vegetables variable in the cell with the correct id
    // pieces ***
    document.getElementById("tomatoes-cut").innerHTML = Math.ceil(tomatoes);
    document.getElementById("peppers-cut").innerHTML = Math.ceil(peppers);
    document.getElementById("cucumbers-cut").innerHTML = Math.ceil(cucumbers);
    document.getElementById("mozzarella-cut").innerHTML = Math.ceil(mozzarella);
    document.getElementById("chicken-paninis-cut").innerHTML = Math.ceil(chickenForPaninis);
    document.getElementById("chicken-baguettes-cut").innerHTML = Math.ceil(chickenForBaguettes);
    // wholes ***
    document.getElementById("onions-cut-wholes").innerHTML = Math.ceil(onions);
    // calculated
    // 6 pieces per tomato
    document.getElementById("tomatoes-cut-wholes").innerHTML = Math.ceil(tomatoes / 6);
    // 30 pieces per pepper
    document.getElementById("peppers-cut-wholes").innerHTML = Math.ceil(peppers / 30);
    // 3.5 pieces per chicken breast (for paninis)
    document.getElementById("chicken-paninis-cut-wholes").innerHTML = Math.ceil(chickenForPaninis / 3.5);
    // 15 pieces per chicken breast (for baguettes)
    document.getElementById("chicken-baguettes-cut-wholes").innerHTML = Math.ceil(chickenForBaguettes / 15);


    // Hide first two tables (sandwiches)
    document.getElementById("first-tables").style.visibility = "hidden";
    document.getElementById("first-tables").style.position = "absolute";
    // Show last two tables (breads & ingredients)
    document.getElementById("last-tables").style.visibility = "visible";
    document.getElementById("last-tables").style.position = "static";

    // Show / Hide Buttons
    document.getElementById("submit-btn").style.visibility = "hidden";
    document.getElementById("submit-btn").style.position = "absolute";

    document.getElementById("show-hide-btn").style.visibility = "visible";
    document.getElementById("show-hide-btn").style.position = "static";

    document.getElementById("reload-btn").style.visibility = "visible";
    document.getElementById("reload-btn").style.position = "static";
    
    // Hide Header & move Main div up a litle
    document.getElementById("header").style.display = "none";
    document.getElementById("main").style.top = "20px";
    // Scroll to top when submitting
    window.scrollTo(0, 0);
};

// don't accept ENTER key...
function stopRKey(evt) {
	var evt = (evt) ? evt : ((event) ? event : null);
	var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
	if ((evt.keyCode == 13) && ((node.type=="text") || (node.type=="number")))  {return false;}
};
document.onkeypress = stopRKey;
function doThing(inputs) {    
    for (var i=0; i<inputs.length; i++) {
        inputs[i].onkeydown = function(e) {
            if (e.keyCode==40) {
                var node = this.nextSibling;
                while (node) {
                    console.log(node.tagName);
                    if (node.tagName=='INPUT' || node.tagName=='SELECT') {
                        node.focus();
                        break;
                    }
                    node = node.nextSibling;                
                }
            }
        };
    };
};
doThing(document.getElementsByTagName('input'));
doThing(document.getElementsByTagName('select'));

// Show Sandwiches | Show Ingredients & Breads
const showHide = () => {
    if ((document.getElementById("first-tables").style.visibility == "hidden")) {
        // Show first two tables
        document.getElementById("first-tables").style.visibility = "visible";
        document.getElementById("first-tables").style.position = "static";
        // Change text in the show/hide button
        document.getElementById("show-hide-btn").innerHTML = "Show Ingredients & Breads ";
        // Hide last two tables
        document.getElementById("last-tables").style.visibility = "hidden";
        document.getElementById("last-tables").style.position = "absolute";
    } else {
        // Hide first two tables
        document.getElementById("first-tables").style.visibility = "hidden";
        document.getElementById("first-tables").style.position = "absolute";
        // Change text in the show/hide button
        document.getElementById("show-hide-btn").innerHTML = "Show Sandwiches";
        // Show last two tables
        document.getElementById("last-tables").style.visibility = "visible";
        document.getElementById("last-tables").style.position = "static";
    }
};

// Scroll to top when refreshing page
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// Reload Page (reload button)
const reloadPage = () => {
    window.location.reload();
    window.scrollTo(0, 0);
};
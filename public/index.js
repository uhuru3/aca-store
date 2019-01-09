import products 

function getListOfProductNames() {
    const startTag = "<ul>";
    const endTag = "</ul>";
    
    let elements = "";
    for (let i = 0; i < products.length; i++) {
    elements += "<li> " + products[i].name 
    + " <ul>" 
    + "<li> Rating: " + products[i].rating + " </li>"
    + "<li> Reviews: " + products[i].reviews.length + " </li>"
    + "<li> Price: " + products[i].price + " </li>" 
    + " </ul>" 
    + " </li>"
    }
    
    return startTag + elements + endTag; 
    }
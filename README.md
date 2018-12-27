# Intro
The purpose of this project is to build an Amazon.com like ecommerce website using the front end skills that we should possess by now. You may be suprised that you have already learned all the skills necessary to do this.
Today, browsers are very powerful. We do not need a backend server to create any of the functionality we need for a web app like this.

# Setup



# Instructions

## Products
* Look at products.js. Here we have an array of hard coded product objects which is put into a global variable `products`. Feel free to change this data as you seel fit.


## UI
* All UI decisions are up to you. You can make it as styled or unstyled as you want.
* Its a good idea to use string template literals to dynamically construct html strings.
* There should probably be one function responsible for creating each dynamic UI content.
* Decide how you would like to display the products in your web page. Use `<div> <ul>` or `<ol>`. Show the product name, description price. Include a link or button that should be clicked on so that you can see the details of the product. Our store is very simple, we just show every product there is.
* Create a textbox that is going to be used to type in a product to search for. Put a button next to it to initiate the search.
* Create a button that when click will show the products in the user's cart.
* Product Detail. Decide how to show one single product. Display all the information that is on a product object. There should be a button for "Add to Cart"
* Shopping Cart. We need to construct another list of products but this one should only show the products that have been added to the cart. 

## Functionality
* Write all your code in index.js. If you want to seperate the code out even more, feel free to add more .js files as you see fit.

### List Out Products
* Use the array of products to dynamically create the html however you see fit. Think about using loops and appendChild or innerHtml. 
### Search
* When the user clicks on the search button, retrieve the text that is in the textbox and use it to filter the array of products on name or description. Rerun the code that generates the html so that the UI updates to only show the filtered products.
### View Details
* When the user clicks on the view details link or button; the list of products should disappear. Build the html needed to show the details of one product on the page.
### Are You Still There
* Keep track of the user's activity. Create a global variable to keep track of whether the user has interacted with the webpage in the last minute. The variable will be true or false. Set it to true.
* Register an onclick event handler on the html body which will change this variable to true every time anything on the page is clicked.
* Research how to use setInterval. Check the variable every minute to test whether it is true or false. If it is false, call `alert("Are you still there?");` and then change it to true. If it is true, change it to false.
### Shopping Cart
* Research sessionStorage. This is where we are going to store the data for the cart so that it will stay put even after the page is refreshed.
* Research JSON.parse and JSON.stringify
* sessionStorage only saves strings so we need to convert from an array to a string and visa versa
* Add an item to sessionStorage called "cart", it should be an array
* When add to cart is clicked, retrieve the cart item from the sessionStorage. Convert it from a string to an array. Push the product object to this array. Convert the array back to a string and save it back into sessionStorage
* What the cart button is clicked, clear the screen and construct a list of the products that are in the cart.





## Open the page
* Simply open the index.html file in a chrome browser window. Double click on the file or use the menu -> file -> open file
* Refresh the browser whenever you make changes to see if they worked.
let state = {
    searchText:"",
    currentProductToAdd:null
  }
  let cart = [];
  let addCartButton = null;
  
  let mainDiv;
  window.onload = function(){
    mainDiv = document.getElementById("main");
    addCartButton = document.getElementById("btnAddToCart");
    listProducts(products);
  }
  
  function searchTextChanged(e){
    state.searchText = e.value;
  }
  function search(){
    let filteredProducts = products.filter(p=>p.name.indexOf(state.searchText) > -1);
    listProducts(filteredProducts);
  }
  
  function showProductDetail(id){
    addCartButton.style.display = "block";
    let product = products.find(p=>p._id === id);
    state.currentProductToAdd = product;
      mainDiv.innerHTML = product.description;
  }
  function listProducts(products){
    let prodDivs = products.map(p=>{
      return `<hr><div onclick="showProductDetail(${p._id})">${p.name}</div>`
      
    });
    mainDiv.innerHTML = prodDivs.join("");
  }
  
  function savedCart (products){
    let cartStorage = JSON.parse(products);
    let prodDivs = cartStorage.map(p=>{
      return `<hr><div onclick="showProductDetail(${p._id})">${p.name}</div>`
      
    });
    mainDiv.innerHTML = prodDivs.join("");
  }
  
  function addToCart(prod){
    cart.push(prod);
    sessionStorage.setItem('items', JSON.stringify(cart));
    showHome();
  }
  function showHome(){
    addCartButton.style.display = "none";
    state.currentProductToAdd = null;
    listProducts(products);
  }
  function showCart(){
    let itemsSaved = sessionStorage.getItem('items');
    savedCart(itemsSaved);
  }

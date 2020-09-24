import React, { Component } from "react";
// import store from './store'
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
// import { Provider } from 'react-redux'
import "./App.css";
import Footer from "./components/Footer";


class App extends Component {
  constructor() {
    super()
  
    this.state = {
        products: [
          {
            "id": 1,
            "sku": 10000,
            "title": "Erkaklar uchun ko'ylak",
            "description": "",
            "availableSizes": ["XS", "L", "XL", "XXL"],
            "price": 85000
          },
          {
            "id": 2,
            "sku": 10001,
            "title": "JEUSS",
            "description": "",
            "availableSizes": ["M", "XXL"],
            "price": 165000
          },
          {
            "id": 3,
            "sku": 10002,
            "title": "Stefano Ricci Fatto in Italia",
            "description": "White DGK Script",
            "availableSizes": ["XXXL"],
            "price": 300000
          },
          {
            "id": 4,
            "sku": 10003,
            "title": "Stefano Ricci Fatto in Italia",
            "description": "Born On The Streets",
            "availableSizes": ["XL","XXXL"],
            "price": 180000
           },
      
          {
            "id": 5,
            "sku": 10004,
            "title": "BALLERS",
            "description": "Tso 3D Short Sleeve",
            "availableSizes": ["XS", "L"],
            "price": 100000 
          },
      
          {
            "id": 6,
            "sku": 10005,
            "title": "HUGO BOSS ORIGINAL",
            "description": "Man Tie Dye Cinza Grey",
            "availableSizes": ["XXS", "XS","S","M"],
            "price": 120000
          },
      
          {
            "id": 7,
            "sku": 10006,
            "title": "WELLALUX",
            "description": "1977 Infantil",
            "availableSizes": ["XXS","XS","S","M"],
            "style": "Preto com listras brancas",
            "price": 140000
          },
      
          {
            "id": 8,
            "sku": 10007,
            "title": "BONELLI",
            "description": "",
            "availableSizes": ["M","XXXL"],
            "style": "Azul escuro",
            "price": 200000  
           },
          {
            "id": 9,
            "sku": 10008,
            "title": "TILTON, TURKIYA",
            "description": "",
            "availableSizes": ["M", "XXL"],
            "price": 160000
          },
          {
            "id": 10,
            "sku": 10009,
            "title": "LION, PEKIN",
            "description": "",
            "availableSizes": ["M", "XXL"],
            "price": 140000
          },
          {
            "id": 11,
            "sku": 10010,
            "title": "SALAMANDER, Pekin Fabrikasi",
            "description": "",
            "availableSizes": ["L", "XL"],
            "price": 350000
          },
          {
            "id": 12,
            "sku": 10011,
            "title": "Adidas",
            "description": "",
            "availableSizes": ["L", "XL"],
            "price": 300000
          },
          {
            "id": 13,
            "sku": 10012,
            "title": "Adidas",
            "description": "",
            "availableSizes": ["L", "XL"],
            "price": 330000
          },
          {
            "id": 14,
            "sku": 10013,
            "title": "Adidas",
            "description": "",
            "availableSizes": ["M","L", "XL"],
            "price": 250000
          },
          {
            "id": 15,
            "sku": 10014,
            "title": "Pekin Fabrika",
            "description": "",
            "availableSizes": ["L", "XL"],
            "price": 350000
          }
        ],filteredProducts:[], sort: '', size: '',  cartItems: [] }
    this.handleChangeSort = this.handleChangeSort.bind(this);
    this.handleChangeSize = this.handleChangeSize.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  };
  componentDidMount(){
  //   fetch("http://localhost:8000/products").then(res => res.json())
  //   .then(data => this.setState({
  //     products: data,
  //     filteredProducts: data
  //   }));
    if(localStorage.getItem('cartItems')){
      this.setState({cartItems: JSON.parse(localStorage.getItem('cartItems'))});
    }
  }

  handleChangeSort(e){
    this.setState({sort: e.target.value});
    this.listProducts();
  }

  handleChangeSize(e){
    this.setState({size: e.target.value});
    this.listProducts();
  }

listProducts(){
  const {sort,size,products} = this.state;
  if(sort !== ''){
   products.sort((a,b) => (sort === 'lowestprice') ? (a.price > b.price ? 1 : -1) : 
    (a.price < b.price ? 1 : -1))
          } else {
             products.sort((a,b) => (a.id > b.id ? 1 : -1));
          }
          if(size !== ''){
            return {filteredProducts: products.filter(a => 
              a.availableSizes.indexOf(size.toUpperCase()) >= 0
            )}
          }
          this.setState({filteredProducts: products   })
}

  handleAddToCart(e, product) {
    const cartItems = [...this.state.cartItems];
    let productAlreadyInCart = false;
    cartItems.forEach(item => {
      if(item.id === product.id){
        productAlreadyInCart = true;
        item.count++;
      }
    });
    if(!productAlreadyInCart){
      cartItems.push({...product, count:1})
    }
    this.setState({
         cartItems
    },()=>{
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    })
  }

  handleRemoveFromCart(e, item) {
    const cartItems = this.state.cartItems.filter( el => el.id !== item.id);
    this.setState({
      cartItems
    },()=>{
    localStorage.setItem('cartItems',cartItems)
  })
}

  render() {
    return (
      <div>
     <div className="container">
       <h1>Glamour-Bandixon - Erkaklar kiyim do'koni</h1>
       <hr/>
       <div className="row">
         <div className="col-md-8">
           <Filter size={this.state.size} sort={this.state.sort} handleChangeSize={this.handleChangeSize}
           handleChangeSort={this.handleChangeSort} count={this.state.products.length} />
           <hr/>
          <Products products={this.state.products} handleAddToCart={this.handleAddToCart} />
         </div>
         <div className="col-md-4">
            <Basket cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart} />
       </div>
       </div> 
     </div>
     <div>
         <Footer  />
       </div>
       </div>
     
    );

  }
}

export default App;
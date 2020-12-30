import React, { Component } from "react";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import "./App.css";
import data from './data.json'
import Footer from "./components/Footer";


class App extends Component {
  constructor() {
    super()
    this.state = {
    products: data.products, sort: '', size: '',  cartItems: [] }
    this.handleChangeSort = this.handleChangeSort.bind(this);
    this.handleChangeSize = this.handleChangeSize.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  };

  componentDidMount(){
    if(localStorage.getItem('cartItems')){
      this.setState({cartItems: JSON.parse(localStorage.getItem('cartItems'))});
    }
  }

handleChangeSort(e){
  const sort = e.target.value;
  this.setState({
    sort: sort,
    products: this.state.products
       .slice().sort((a,b) => (sort === 'lowestprice') ? (a.price > b.price ? 1 : -1) : sort === "highestprice" 
       ? (a.price < b.price ? 1 : -1) : (a.id > b.id ? 1 : -1) )
  })
}


handleChangeSize(e){
  if(e.target.value === ""){
    this.setState({ size: e.target.value, products: data.products})
  } else {
    this.setState({
      size: e.target.value,
      products: data.products.filter(product => product.availableSizes.indexOf(e.target.value) >= 0)
    })
  }
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
     <div className="wrapper">
       <h1>Erkaklar kiyim do'koni</h1>
       <hr/>
       <div className="row">
         <div className="col-md-8 filter">
           <Filter size={this.state.size} sort={this.state.sort} handleChangeSize={this.handleChangeSize}
           handleChangeSort={this.handleChangeSort} count={this.state.products.length} />
           <hr/>
          <Products products={this.state.products} handleAddToCart={this.handleAddToCart} />
         </div>
         <div className="col-md-4 basket">
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






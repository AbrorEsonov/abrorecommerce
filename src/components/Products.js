import React, { Component } from "react";
import util from '../util'
// import { connect } from 'react-redux'
// import { fetchProducts } from '../actions/productActions'
// import { addToCart } from '../actions/cartActions'
class Products extends Component {
  
  // componentDidMount(){
  //   this.props.fetchProducts();
  // }
  render() {
    //  const productItems = this.props.products.map((product) => (
    //   <div className="col-md-4" key={product.id}>
    //     <div className="container text-center m-4">
    //       <a 
    //         href={`#${product.id}`}
    //         // onClick={(e) => this.props.handleAddToCart(e, product)}
    //       >
    //         <img className="rounded" style={{width: 220, height: 300}} src={`/products/${product.sku}.jpg`} alt={product.title} />
    //         <p style={{fontFamily: "cursive", color: "white"}}>{product.title}</p>
    //       </a>
    //       <div>
    //       <b style={{color: "white"}}>{util.formatCurrency(product.price)}</b>
    //       <button
    //         className="btn btn-success"
    //         onClick={() => this.props.addToCart(this.props.cartItems, product)}
    //       >
    //         Savatchaga qo'shish
    //       </button>
    //       </div>
    //     </div>
    //   </div>
    // )
    // );
    const productItems = this.props.products.map((product) => (
      <div className="col-md-4" key={product.id}>
        <div className="container text-center m-4">
          <a 
            href={`#${product.id}`}
            // onClick={(e) => this.props.handleAddToCart(e, product)}
          >
            <img className="rounded" style={{width: 220, height: 300}} src={`./products/${product.sku}.jpg`} alt={product.title} />
            <p style={{fontFamily: "cursive", color: "white"}}>{product.title}</p>
          </a>
          <div>
          <b style={{color: "white"}}>{util.formatCurrency(product.price)}</b>
          <button
            className="btn btn-success"
            onClick={(e) => this.props.handleAddToCart(e, product)}
          >
            Savatchaga qo'shish 
          </button>
          </div>
        </div>
      </div>
    )
    );

    return (
    <div className="row">{productItems}</div>
    )
  }
}
// const mapStateToProps = state => ({
//   products: state.products.filteredItems,
//   cartItems: state.cart.items
// })
// fetchProducts,
// export default connect(mapStateToProps,{ addToCart})(Products)
export default Products

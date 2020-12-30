import React, { Component } from "react";
import util from '../util'
import "../App.css"
class Products extends Component {
  
  render() {
    const productItems = this.props.products.map((product) => (
      <div className="col-md-4" key={product.id}>
        <div className="container m-4 img-container" >
          <a  
            href={`#${product.id}`}
          >
            <img  className="rounded" style={{width: 250, height: 300}} src={`/images/${product.sku}.jfif`} alt={product.title} />
            <p className="img__description">{product.title}</p>
          </a>
          <div className="add-cart">
          <b style={{marginBottom: "10px"}}>{util.formatCurrency(product.price)}</b>
          <button
            className="btn btn-success img-btn"
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
export default Products



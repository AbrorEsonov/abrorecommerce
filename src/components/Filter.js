import React, { Component } from "react";
// import { connect } from 'react-redux'
// import { filterProducts,sortProducts } from '../actions/productActions'

class Filter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4" style={{color: "white", fontSize: '20px'}}><b style={{fontSize: '30px'}}>{this.props.count} </b> ta mahsulot mavjud</div>
        <div className="col-md-4">
          <label>
           <span style={{color:"white"}}>Narx bo'yicha tartiblash: </span>
            <select
              className="form-control"
              value={this.props.sort}
              onChange={this.props.handleChangeSort}>
              <option value="">Aralash</option>
              <option value="lowestprice">Pastdan tepaga</option>
              <option value="highestprice">Tepadan pastga</option>
            </select>
          </label>
        </div>
        <div className="col-md-4">
          <label>
          <span style={{color:"white"}}>O'lchami bo'yicha tartiblash: </span>     
            <select
              className="form-control" value={this.props.size}
              onChange={this.props.handleChangeSize}
            >
              <option value="">Barchasi</option>
              <option value="XXXS">XXXS 30-32</option>
              <option value="XXS">XXS  32-34</option>
              <option value="XS">XS 34-36</option>
              <option value="S">S  36-38</option>
              <option value="M">M  38-40</option>
              <option value="L">L  40-42</option>
              <option value="XL">XL  42-44</option>
              <option value="XXL">XXL  44-46</option>
              <option value="XXXL">XXXL  46-48</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//    products: state.products.items,
//    filteredProducts: state.products.filteredItems,
//    size: state.products.size,
//    sort: state.products.sort
// })

// export default  connect(mapStateToProps, {filterProducts, sortProducts})(Filter)
export default Filter;


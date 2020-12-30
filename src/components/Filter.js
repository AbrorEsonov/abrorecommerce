import React, { Component } from "react";
import "../App.css"
class Filter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4" style={{fontSize: '20px'}}><b style={{fontSize: '30px'}}>{this.props.count} </b> ta mahsulot mavjud</div>
        <div className="col-md-4">
          <label className="price-sort">
           <span >Narx bo'yicha tartiblash: </span>
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
          <span>O'lchami bo'yicha tartiblash: </span>     
            <select
              className="form-control" value={this.props.size}
              onChange={this.props.handleChangeSize}
            >
              <option value="">Barchasi</option>
              <option value="XXS">XXS  32-34</option>
              <option value="XS">XS 34-36</option>
              <option value="S">S  36-38</option>
              <option value="M">M  38-40</option>
              <option value="L">L  40-42</option>
              <option value="XL">XL  42-44</option>
              <option value="XXL">XXL  44-46</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}
export default Filter;


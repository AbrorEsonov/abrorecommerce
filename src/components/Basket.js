import React, { Component } from 'react';
import util from '../util'
class Basket extends Component {
  
  render() {
    const {cartItems} = this.props;
    return (
      <div className="alert alert-info "> 
        {cartItems.length === 0 ? ("Savatchangiz bo'sh") :  (`Savatchangizda ${cartItems.length} ta mahsulot bor`)}
          <hr/>
         { cartItems.length > 0 && 
            <div>
              <ul style={{listStyleType: "square"}}>
                {cartItems.map(item => 
                  <li key={item.id}>
                    <b>{item.title} </b>
                    X {item.count} = {util.formatCurrency(item.price * (item.count))}
                   { console.log(item)}
                    <button style={{ margin: "5px"}} className="btn btn-danger" onClick={(e) =>
                      this.props.handleRemoveFromCart(e, item)}>Olib tashlash</button>
                  </li>
                  )}
              </ul>
             <b> Jami: </b> {util.formatCurrency(cartItems.reduce((a,c) => a + c.price * (c.count), 0))}
            </div>
         }
      </div>
    );
  }
}
export default Basket


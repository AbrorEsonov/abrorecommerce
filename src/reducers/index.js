import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducers from "./cartReducers";
export default combineReducers({
    products: productReducer,
    cart: cartReducers
})
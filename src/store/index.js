import { createStore, combineReducers, applyMiddleware } from 'redux';
import CategoryReducer from './reducers/category.reducer';
import ProductsReducer from './reducers/products.reducer';
import OrderReducer from './reducers/order.reducer';
import thunk from 'redux-thunk';
import CartReducer from './reducers/cart.reducer';
import AuthReducer from './reducers/auth.reducer';
import userReducer from './reducers/user.reducer';

const RootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductsReducer,
    cart: CartReducer,
    orders: OrderReducer,
    auth: AuthReducer,
    profiles: userReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))
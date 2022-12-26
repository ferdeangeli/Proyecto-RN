import { createStore, combineReducers, applyMiddleware } from 'redux';
import CategoryReducer from './reducers/category.reducer';
import BreadReducer from './reducers/breads.reducer';
import OrderReducer from './reducers/order.reducer';
import thunk from 'redux-thunk';
import CartReducer from './reducers/cart.reducer';
import AuthReducer from './reducers/auth.reducer';

const RootReducer = combineReducers({
    categories: CategoryReducer,
    breads: BreadReducer,
    cart: CartReducer,
    orders: OrderReducer,
    auth: AuthReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))
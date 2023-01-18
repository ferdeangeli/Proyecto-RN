export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const CONFIRM_CART = 'CONFIRM_ITEM'
import {URL_API} from '../../constants/Database'

export const addItem = (item, quantity) => ({
    type: ADD_ITEM,
    item,
    quantity
})

export const removeItem = (itemID) => ({
    type: REMOVE_ITEM,
    itemID
})

export const confirmCart = ( payload, total) => {
    return async (dispatch) => {
        try{
        
            const response = await fetch(`${URL_API}/ordenes.json`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({date: Date.now(), items: {...payload}, total: total})
            })

            const result = await response.json()
            console.log(result)
            dispatch({
                type: CONFIRM_CART,
                confirm: true
            })
        } catch(err) {
            console.log(err)
        }    
    } 
}
import {ADD_TO_CART} from "../constants";

const initialState ={
    cardData: []
}
export default function CardItem(state= [], action) {
    switch(action.type) {
        case ADD_TO_CART: 
        console.log('reducer',action)
        return [
            ...state,
            {cardData: action.data}
        ]
        default:
            return state
    }
 
}

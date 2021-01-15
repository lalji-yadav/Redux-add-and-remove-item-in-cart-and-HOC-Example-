import ADD_TO_CART from "../constants";

const initialState ={
    cardData: []
}
export default function CardItem(state=initialState, action) {
    switch(action.type) {
        case ADD_TO_CART: 
        console.log('reducer', action)
        return {
            ...state,
            cardData: action.data
        }
        break;
        default:
            return state
    }
 
}

// import { ADD_TO_CART } from '../constants'
// const initialState = {
//     cardData: []
// }
// export default function cardItems(state = [], action) {
//     switch (action.type) {
//         case ADD_TO_CART:
//             // console.warn("reducer",action)
//             return [
//                 ...state,
//                 {cardData: action.data}
//             ]
//         default:
//             return state
//     }


// }
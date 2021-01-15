import ADD_TO_CARD from "../constants";

const initialState ={
    cardData: []
}
export default function CardItem(state=initialState, action) {
    switch(action.type) {
        case ADD_TO_CARD: 
        return {
            ...this.state,
            cardData: action.data
        }
        break;
        default:
            return state
    }
 
}

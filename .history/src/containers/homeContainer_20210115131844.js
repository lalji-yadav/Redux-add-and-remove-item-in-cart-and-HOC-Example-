import {connect} from 'react-redux'

import Home from "../components/home";
import { addToCart } from "../Services/Action/action";



const mapDispatchToProps=(dispatch)=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})

//export default Home;

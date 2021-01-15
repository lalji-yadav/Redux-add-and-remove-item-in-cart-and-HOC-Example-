import {connect} from 'react-redux'

import Home from "../components/home";
import { addToCart } from "../Services/Action/action";



const mapStateToProps=(state)=>({
        cardData:state
})
const mapDispatchToProps=(dispatch)=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapDispatchToProps, mapStateToProps)(Home)

//export default Home;

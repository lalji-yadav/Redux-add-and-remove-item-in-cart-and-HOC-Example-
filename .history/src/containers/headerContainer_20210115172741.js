import {connect} from 'react-redux'
import Header from '../components/header';

// import { addToCart } from "../Services/Action/action";



const mapStateToProps=(state)=>({
       data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    //addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)

//export default Home;
                                                                   
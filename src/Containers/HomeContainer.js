import {connect} from 'react-redux'
import Home from "../Components/Home";
import { addToCart } from '../services/actions/actions'

const mapStateToProps =state=>({
      


  })
const mapDispatchToProps =dispatch=>({
addToCartHandle:data=>dispatch(addToCart(data))    


})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;

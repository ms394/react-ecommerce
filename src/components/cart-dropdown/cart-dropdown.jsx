import React from 'react'
import CustomButton from '../custom-button/custom-button'
import CartItem from '../cart-item/cart-item'
import './cart-dropdown.styles.scss'
import {connect} from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

const CartDropdown = ({cartItems, history, toggleCartHidden})=>(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length?
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                :
                <span className='empty-messsage'>Your cart is empty</span>
            }
            <CustomButton onClick={()=> {
                        toggleCartHidden()
                        history.push('/checkout')
                    }   
                }>Go to Checkout</CustomButton>
        </div>
    </div>
)

const mapStateToProps = (state)=>createStructuredSelector({
    cartItems: selectCartItems
})
const mapDispatchToProps = (dispatch)=>{
    return{
        toggleCartHidden :()=>dispatch(toggleCartHidden())
    }
}
export default  withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown))
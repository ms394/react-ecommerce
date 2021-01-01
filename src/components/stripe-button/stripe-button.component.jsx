import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price*100;

    const publishableKey= 'pk_test_51I4SCyDDrAZGET9ot0N11yU10nNsdRLzJmW2WKiwBJ9rlwPgilPdERdCNpPBBsiCBsxUQCpbWA1S4TRazH1Padcj00a1PQ30pT'

    const onToken = (token)=>{
        console.log(token);
        alert('Payment Successful')
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='Crown Clothing'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total value is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton
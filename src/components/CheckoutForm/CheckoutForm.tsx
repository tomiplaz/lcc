import * as React from 'react'
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements'
import './CheckoutForm.css'

export interface ICheckoutFormProps {
  stripe?: ReactStripeElements.StripeProps
}

function CheckoutForm ({ stripe }: ICheckoutFormProps) {
  return (
    <div className='checkout-form'>
      <p>Would you like to complete the purchase?</p>
      <CardElement />
      <button onClick={submit}>Purchase</button>
    </div>
  )

  async function submit () {
    if (stripe) {
      const { token } = await stripe.createToken({ name: 'Name' })

      if (token) {
        const response = await fetch('/charge', {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain' },
          body: token.id
        })

        if (response.ok) {
          console.log('Purchase successful!')
        }
      }
    }
  }
}

export default injectStripe(CheckoutForm)

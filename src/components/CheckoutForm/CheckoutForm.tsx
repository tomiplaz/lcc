import * as React from 'react'
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements'
import './CheckoutForm.css'

export interface ICheckoutFormProps {
  stripe?: ReactStripeElements.StripeProps
}

function CheckoutForm ({ stripe }: ICheckoutFormProps) {
  const [isCompleted, setIsCompleted] = React.useState<boolean>(false)

  if (isCompleted) {
    return (
      <h1>Purchase completed!</h1>
    )
  }

  return (
    <div className='checkout-form'>
      <p>Would you like to complete the purchase?</p>
      <CardElement />
      <button onClick={submit}>Purchase</button>
    </div>
  )

  async function submit () {
    if (stripe) {
      try {
        const { token } = await stripe.createToken({ name: 'Name' })

        if (token) {
          const response = await fetch('http://localhost:3000/charge', {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain' },
            body: token.id
          })

          if (response.ok) {
            setIsCompleted(true)
          } else {
            console.log('Error posting token to create a charge:', response)
          }
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
}

export default injectStripe(CheckoutForm)

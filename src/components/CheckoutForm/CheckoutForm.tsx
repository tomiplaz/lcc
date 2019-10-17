import * as React from 'react'
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements'
import './CheckoutForm.css'

export interface ICheckoutFormProps {
  stripe?: ReactStripeElements.StripeProps
}

function CheckoutForm ({ stripe }: ICheckoutFormProps) {
  const [isProcessing, setIsProcessing] = React.useState<boolean>(false)
  const [isCompleted, setIsCompleted] = React.useState<boolean>(false)

  return (
    <div className='checkout-form'>
      <p>Would you like to complete the purchase?</p>
      <CardElement />
      <button onClick={submit}>Purchase</button>
      <h2>
        {isProcessing && 'Processing...'}
        {isCompleted && 'Purchase completed!'}
      </h2>
    </div>
  )

  async function submit () {
    if (stripe) {
      setIsProcessing(true)

      try {
        const { token } = await stripe.createToken({ name: 'Name' })

        if (token) {
          const response = await fetch('http://localhost:3000/charge', {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain' },
            body: token.id
          })

          setIsProcessing(false)

          if (response.ok) {
            setIsCompleted(true)
          } else {
            console.log('Error posting token to create a charge:', response)
          }
        }
      } catch (err) {
        console.log(err)
        setIsProcessing(false)
      }
    }
  }
}

export default injectStripe(CheckoutForm)

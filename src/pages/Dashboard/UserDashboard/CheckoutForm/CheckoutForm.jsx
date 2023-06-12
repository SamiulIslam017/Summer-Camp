import { useContext, useEffect, useState } from 'react';
import './CheckoutForm.css'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { AuthContext } from '../../../../Provider/AuthProvider';
import axios from 'axios';

const CheckoutForm = ({ price }) => {
    const { user } = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        axios.post('http://localhost:5000/create-payment-intent', { price })
            .then(response => {
                console.log(response.data.clientSecret);
                setClientSecret(response.data.clientSecret)
            })
    }, [price])
    const handleSubmit = async event => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error?.message)
            console.log('[error]', error);
        } else {
            setError('')
            console.log('[PaymentMethod]', paymentMethod);
        }

        setProcessing(true)
        const { paymentIntent, confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || "anonymous",
                        email: user?.email || 'unknown'
                    },
                },
            },
        );
        if (confirmError) {
            setError(confirmError)
        }
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#1260a0',
                                '::placeholder': {
                                    color: '#1260a0',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {
                error && <p className='text-lg text-[red] font-medium'>{error}</p>
            }
            {transactionId && <p>Transaction completed with Transaction Id: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;
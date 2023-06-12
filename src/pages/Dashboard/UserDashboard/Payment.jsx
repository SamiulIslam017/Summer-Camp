import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { FaCcStripe } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PK_STRIPE);
const Payment = () => {
    const bookedPayment = useLoaderData();
    return (
        <div className="w-10/12 mx-auto min-h-screen flex flex-col justify-center items-center text-center">

            <h2 className="text-3xl font-bold mb-4 text-blue flex gap-4 items-center">Payment Gateway <FaCcStripe className="text-5xl"></FaCcStripe></h2>
            <span className="text-2xl font-bold text-orange">Total Amount: $ {bookedPayment.price}</span>
            <div className="w-6/12 mx-auto">
                <Elements stripe={stripePromise}>
                    <CheckoutForm price={bookedPayment.price} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
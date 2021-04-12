import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import SimpleCardForm from './simpleCardForm';
import SplitCardForm from './SplitCardForm';
const stripePromise = loadStripe('pk_test_51IfIpCG6Y7toTHgW0AK7nhhSabiEud4MQmphajZwlSztDuyAHvRydVjhHKuiSTrP4kzPZfgtHPVuX0ezVrvZXMvS00sb9zyiIv');


const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment} />
            {/* <SplitCardForm /> */}
        </Elements>
    );
};

export default ProcessPayment;
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import {  useNavigate } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import FormContainer from '../components/FormContainer';
import { Form, Button,Col } from 'react-bootstrap';

const PaymentScreen = () => {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    if (!shippingAddress) {
        navigate('/login/shipping');
    }
    //we will integrate stripe payment method later
    const [paymentMethod, setPaymentMethod] = useState('PayPal');
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
  
        dispatch(savePaymentMethod(paymentMethod));
        //if the payment route is accessed without login change route to /login/payment
        navigate('/placeorder');
    };

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3 />
            <h3>Payment Method</h3>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as="legend">Select Method</Form.Label>
                 
                    <Col>
                    <br/>
                        <Form.Check
                            type="radio"
                            label="PayPal or Credit Card"
                            id="PayPal"
                            name="paymentMethod"
                            value="PayPal"
                            checked
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        ></Form.Check>
                        <br/>
                        <Form.Check

                            type="radio"
                            label="Stripe"
                            id="Stripe"
                            name="paymentMethod"
                            value="Stripe"
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        ></Form.Check>
                    </Col>
                </Form.Group>

                <br/>
                <Button type="submit" variant="primary">
                    Continue
                </Button>
            </Form>
        </FormContainer>
    );
};

export default PaymentScreen;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { register } from '../actions/userActions';
import FormContainer from '../components/FormContainer';

const RegisterScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userRegister = useSelector((state) => state.userRegister);
    const { loading, error, userInfo } = userRegister;

    //if register issue occurs is because redirect url should be split to =[1]
    const redirect = searchParams.get('redirect')
        ? searchParams.get('redirect')
        : '/';
    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [userInfo, navigate, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();
        //Dispatch register
        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
        } else {
            dispatch(register(name, email, password));
        }
    };
    return (
        <FormContainer>
            <h1>Sign Up</h1>
            <br />
            {message && <Message variant="danger">{message}</Message>}
            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="name"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <br />
                <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <br />
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <br />
                <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <br />
                <Button type="submit" variant="primary">
                    Sign Up
                </Button>
            </Form>
            <Row className="py-3">
                <Col>
                    Have an account?{' '}
                    <Link
                        to={redirect ? `/login?redirect=${redirect}` : '/login'}
                    >
                        Login
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    );
};

export default RegisterScreen;

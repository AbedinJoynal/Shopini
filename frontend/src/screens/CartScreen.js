import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    Link,
    useNavigate,
    useParams,
    useSearchParams,
} from 'react-router-dom';
import {
    Row,
    Col,
    ListGroup,
    Image,
    Form,
    Button,
    Card,
} from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart,removeFromCart } from '../actions/cartActions';
const CartScreen = () => {
    const [searchParams] = useSearchParams();
    const { id } = useParams();
    const navigate = useNavigate();
    const qty = searchParams.get('qty') ? Number(searchParams.get('qty')) : 1;
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();
    useEffect(() => {
        if (id) {
            dispatch(addToCart(id, qty));
        }
    }, [dispatch, id, qty]);
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <Row>
            <Col md={8}>
                <h3>Shopping Cart</h3>
                {cartItems.length === 0 ? (
                    <Message>
                        Your cart is empty <Link to="/">Go Back</Link>
                    </Message>
                ) : (
                    <ListGroup variant="flush">
                        {cartItems.map((item) => (
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fluid
                                            rounded
                                        />
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${item.product}`}>
                                            {item.name}
                                        </Link>
                                    </Col>
                                    <Col md={2}>Tk {item.price}</Col>
                                    <Col md={2}>
                                        <Form.Control
                                            as="select"
                                            value={item.qty}
                                            onChange={(e) =>
                                                dispatch(
                                                    addToCart(
                                                        item.product,
                                                        Number(e.target.value)
                                                    )
                                                )
                                            }
                                        >
                                            {[
                                                ...Array(
                                                    item.countInStock
                                                ).keys(),
                                            ].map((x) => (
                                                <option
                                                    key={x + 1}
                                                    value={x + 1}
                                                >
                                                    {x + 1}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                    <Col md={2}>
                                        <Button
                                            type="button"
                                            variant="light"
                                            onClick={() =>
                                                removeFromCartHandler(
                                                    item.product
                                                )
                                            }
                                        >
                                            <i className="fas fa-trash"></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3 style={{fontSize:'1.2rem'}}>
                                Subtotal (
                                {cartItems.reduce(
                                    (acc, item) => acc + item.qty,
                                    0
                                )}
                                ) items
                            </h3>
                            Tk{'  '}
                            {cartItems
                                .reduce(
                                    (acc, item) => acc + item.qty * item.price,
                                    0
                                )
                                .toFixed(2)}
                        </ListGroup.Item>

                        <Button
                            type="button"
                            className="btn-block"
                            disabled={cartItems.length === 0}
                            onClick={() => navigate('/login?redirect=shipping')}
                        >
                            Proceed To Checkout
                        </Button>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    );
};

export default CartScreen;

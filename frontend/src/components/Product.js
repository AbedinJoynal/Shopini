import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import Rating from './Rating';
const Product = ({ product }) => {
    return (
        <Card
            style={{ backgroundColor: '#eceeef' }}
            className="my-2 p-3 rounded"
        >
            <Link to={`/product/${product._id}`}>
                <Card.Img
                    src={product.image}
                    alt={product.name}
                    variant="top"
                />
            </Link>
            <Card.Body style={{ backgroundColor: '#eceeef' }}>
                <Link
                    style={{ textDecoration: 'none', textAlign: 'center' }}
                    to={`/product/${product._id}`}
                >
                    <Card.Title as="div" style={{ paddingBottom: '1px' }}>
                        <h5>{product.name}</h5>
                    </Card.Title>
                </Link>
                <Card.Text
                    as="div"
                    style={{ textAlign: 'center', paddingBottom: '5px' }}
                >
                    <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                    />
                </Card.Text>

                <Card.Text
                    style={{ textAlign: 'center', paddingTop: '5px' }}
                    as="h4"
                >
                    Tk {product.price}
                </Card.Text>
                <Button
                    style={{
                        textAlign: 'center',
                        backgroundColor: ' rgb(52, 58, 64)',
                        display: 'block',
                        margin: 'auto',
                        borderRadius: '5px',
                    }}
                >
                    <Link
                        style={{ textDecoration: 'none', color: 'white' }}
                        to={`/product/${product._id}`}
                    >
                        View Details
                    </Link>
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Product;

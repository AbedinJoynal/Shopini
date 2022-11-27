import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Link, useParams } from 'react-router-dom';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';

const HomeScreen = () => {
    const dispatch = useDispatch();

    const { keyword } = useParams();
    const { pageNumber } = useParams();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products, pages, page } = productList;

    const Ref = useRef(null);

    const [timer, setTimer] = useState('00:00:00');

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total,
            hours,
            minutes,
            seconds,
        };
    };

    const startTimer = (e) => {
        let { total, hours, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (hours > 0 ? hours : '2' + hours) +
                    ':' +
                    (minutes > 0 ? minutes : '5' + minutes) +
                    ':' +
                    (seconds > 0 ? seconds : '0' + seconds)
            );
        }
    };

    const clearTimer = (e) => {
        setTimer('00:00:00');

        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    };

    const getDeadTime = () => {
        let deadline = new Date();

        deadline.setSeconds(deadline.getSeconds() + 60);
        return deadline;
    };

    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber));
        clearTimer(getDeadTime());
    }, [dispatch, keyword, pageNumber]);

    return (
        <>
            {!keyword ? (
                <ProductCarousel />
            ) : (
                <Link to="/" className="btn btn-light">
                    Go Back
                </Link>
            )}
            <br />
            <br />
            <section className="features__area pt-20">
                <div
                    style={{ marginTop: '20px', marginBottom: '20px' }}
                    className="container"
                >
                    <div className="row row-cols-xxl-4 row-cols-xl-4 row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 gx-0">
                        <div className="col">
                            <div
                                style={{ borderRight: '1px solid #343a40' }}
                                className="features__item d-flex white-bg"
                            >
                                <div className="features__icon mr-20">
                                    <i
                                        style={{
                                            padding: '10px',
                                            fontSize: '35px',
                                        }}
                                        className="fa-solid fa-truck"
                                    ></i>
                                </div>
                                <div className="features__content">
                                    <h6>FAST DELIVERY</h6>
                                    <p>For all orders over Tk.100</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div
                                style={{ borderRight: '1px solid #343a40' }}
                                className="features__item d-flex white-bg"
                            >
                                <div className="features__icon mr-20">
                                    <i
                                        style={{
                                            padding: '10px',
                                            fontSize: '35px',
                                        }}
                                        className="fa-solid fa-money-check"
                                    ></i>
                                </div>
                                <div className="features__content">
                                    <h6>SAFE PAYMENT</h6>
                                    <p>100% secure payment</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div
                                style={{ borderRight: '1px solid #343a40' }}
                                className="features__item d-flex white-bg"
                            >
                                <div className="features__icon mr-20">
                                    <i
                                        style={{
                                            padding: '10px',
                                            fontSize: '35px',
                                        }}
                                        className="fa-solid fa-comments"
                                    ></i>
                                </div>
                                <div className="features__content">
                                    <h6>FREINDLY SUPPORT</h6>
                                    <p>Reliable Services</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="features__item features__item-last d-flex white-bg">
                                <div className="features__icon mr-20">
                                    <i
                                        style={{
                                            padding: '10px',
                                            fontSize: '35px',
                                        }}
                                        className="fa-sharp fa-solid fa-headset"
                                    ></i>
                                </div>
                                <div className="features__content">
                                    <h6>TRUSTED PRODUCT </h6>
                                    <p>30 day satisfaction guarantee</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            {/* adding banner here */}
            <section className="banner__area pt-20 pb-10">
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div
                                style={{
                                    backgroundImage:
                                        'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url("https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhlYWRwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")',

                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '10px',
                                }}
                                className="banner__item p-relative w-img mb-30"
                            >
                                <div className="banner__img">
                                    <a href="product-details.html">
                                        <img
                                            src="/frontend/public/images/alexa.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="banner__content">
                                    <h6>
                                        <a
                                            style={{
                                                color: 'white',
                                                textDecoration: 'none',
                                            }}
                                            href="/"
                                        >
                                            Intelligent <br /> New Touch Control
                                        </a>
                                    </h6>
                                    <p>Discount 20% On Products</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div
                                style={{
                                    backgroundImage:
                                        'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url("https://images.unsplash.com/photo-1549482199-bc1ca6f58502?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")',

                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '10px',
                                }}
                                className="banner__item p-relative mb-30 w-img"
                            >
                                <div className="banner__img">
                                    <a href="product-details.html">
                                        <img
                                            src="assets/img/banner/banner-2.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="banner__content">
                                    <h6>
                                        <a
                                            style={{
                                                color: 'white',
                                                textDecoration: 'none',
                                            }}
                                            href="/"
                                        >
                                            On-sale <br /> Best Prices
                                        </a>
                                    </h6>
                                    <p>Limited Time: Online Only!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div
                                style={{
                                    backgroundImage:
                                        'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url("https://images.unsplash.com/photo-1527698266440-12104e498b76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFibGV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")',

                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '10px',
                                }}
                                className="banner__item p-relative mb-30 w-img"
                            >
                                <div className="banner__img">
                                    <a href="product-details.html">
                                        <img
                                            src="assets/img/banner/banner-3.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="banner__content">
                                    <h6>
                                        <a
                                            style={{
                                                color: 'white',
                                                textDecoration: 'none',
                                            }}
                                            href="/"
                                        >
                                            Limited Offer
                                            <br /> On Products
                                            <br />
                                        </a>
                                    </h6>
                                    <p>Free Shipping All Order</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* adding banner here */}
            <br />
            <section
                style={{
                    marginRight: 'auto',
                    backgroundColor: 'rgb(52, 58, 64) ',
                    borderRadius: '10px 0px 10px 0px',
                    width: '50%',
                    paddingTop: '3px',
                    paddingRight: '2px',
                    color: 'white',
                }}
            >
                <h2
                    style={{
                        marginRight: 'auto',
                        textAlign: 'center',
                        color: 'white',
                    }}
                >
                    {' '}
                    Hurry Up The Offer Ends In <span>{timer} </span>{' '}
                </h2>
            </section>
            <br />
            <br />
            <h3>Latest Products</h3>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <>
                    <Row>
                        {products?.map((product) => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product} />
                            </Col>
                        ))}
                    </Row>
                    <Paginate
                        pages={pages}
                        page={page}
                        keyword={keyword ? keyword : ''}
                    />
                </>
            )}
        </>
    );
};

export default HomeScreen;

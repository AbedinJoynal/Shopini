import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
    return (
        <footer style={{ marginTop: '4rem', paddingTop: '0.2rem' }}>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        SHOPINI &copy; 2022 ALL RIGHTS RESERVED
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

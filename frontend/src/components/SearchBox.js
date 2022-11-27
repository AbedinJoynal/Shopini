import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';


const SearchBox = () => {
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/search/${keyword}`);
        } else {
            navigate('/');
        }
    };

    return (
        <Form onSubmit={submitHandler} className="d-flex">
            <Form.Control
             style={{'boxShadow':'1px 0px 1px 1px #1e1e1e',
             'borderRadius':'5px',}}
                type="text"
                name="q"
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search Products..."
                className="me-2"
            ></Form.Control>
            <Button
            style={{'boxShadow':'1px 0px 1px 1px #1e1e1e',
            'borderRadius':'5px'}}
            type="submit" variant="outline-success" className="p-2">
                Search
            </Button>
        </Form>
    );
};

export default SearchBox;

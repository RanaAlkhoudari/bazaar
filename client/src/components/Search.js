import React, { useState, useEffect } from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (keyword.trim().toLowerCase()) {
      history.push(`/products/${keyword}`);
    } else {
      history.push('/');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (keyword) => {
    try {
      // setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/products/searchedProduct/${keyword}`,
      );
      const { data } = response;
      console.log('data from keyword', data);

      if (data[0] !== undefined) {
        // setNoResult(true);
        console.log('no data');
        // setTest(false);
      }

      // setProducts(data);
      // setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit} style={{ margin: '5px auto' }}>
      <InputGroup className="mb-3" style={{ width: '50%', margin: '0 auto' }}>
        <FormControl
          aria-describedby="basic-addon2"
          placeholder="search products"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          type="submit"
          style={{ background: 'var(--color-main)', color: 'white' }}
        >
          Search
        </Button>
      </InputGroup>
    </Form>
  );
};

export default Search;

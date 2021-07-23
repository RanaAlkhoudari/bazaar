import axios from 'axios';
import Uploader from './uploader';
import { AuthContext } from '../context/AuthContext';
import { Container, Form, Card } from 'react-bootstrap';
import { Multiselect } from 'multiselect-react-dropdown';
import React, { useState, useEffect, useContext } from 'react';

const AddProduct = () => {
  const { user } = useContext(AuthContext);

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState({
    city: '',
    price: '',
    title: '',
    condition: '',
    user: user._id,
    categories: [],
    description: '',
  });

  useEffect(() => {
    fetchCategories();
    document.getElementById('add-product-link').style.display = 'none';
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/categories`);
      const categoryList = response.data.map((category) => category.name);
      setCategories(categoryList);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCityChange = (e) => setValues({ ...values, city: e.target.value });
  const handleTitleChange = (e) => setValues({ ...values, title: e.target.value });
  const handlePriceChange = (e) => setValues({ ...values, price: Number(e.target.value) });
  const handleConditionChange = (e) => setValues({ ...values, condition: e.target.value });
  const handleDescriptionChange = (e) => setValues({ ...values, description: e.target.value });

  return (
    <Container
      className="d-flex align-items-center justify-content-center "
      style={{ minHeight: '75vh' }}
    >
      <div>
        <Card style={{ width: '22rem' }}>
          <Card.Body>
            <h2 className="text-center mb-4">Add Product</h2>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Form.Group>
                <Form.Control
                  required
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={values.title}
                  onChange={handleTitleChange}
                />
              </Form.Group>
              <br />

              <Form.Group>
                <Form.Control
                  min="0"
                  required
                  step="any"
                  name="price"
                  type="number"
                  placeholder="Price"
                  value={values.price}
                  onChange={handlePriceChange}
                />
              </Form.Group>
              <br />

              <Form.Group>
                <Form.Control
                  required
                  as="select"
                  defaultValue="Condition"
                  onChange={handleConditionChange}
                >
                  <option hidden disabled>
                    Condition
                  </option>
                  <option value="new">New</option>
                  <option value="like new">Like new</option>
                  <option value="fairly used">Fairly used</option>
                </Form.Control>
              </Form.Group>
              <br />

              <Form.Group>
                <Form.Control
                  required
                  type="text"
                  name="city"
                  placeholder="City"
                  value={values.city}
                  onChange={handleCityChange}
                />
              </Form.Group>
              <br />

              <Form.Group>
                <Form.Control
                  required
                  type="text"
                  as="textarea"
                  name="description"
                  placeholder="Description"
                  value={values.description}
                  style={{ height: '100px' }}
                  onChange={handleDescriptionChange}
                />
              </Form.Group>
              <br />

              <Multiselect
                isObject={false}
                options={categories}
                placeholder="Categories"
                avoidHighlightFirstOption={true}
                onSelect={(selected) => (values.categories = selected)}
                style={{
                  chips: { background: 'var(--color-main)' },
                  optionContainer: {
                    borderRadius: '.5rem',
                  },
                }}
              />

              <Uploader data={values} />
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default AddProduct;

import styles from './addProduct.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Multiselect } from 'multiselect-react-dropdown';
import Uploader from '../uploader/uploader';

const AddProduct = () => {
  const categoryList = async () => await axios.get('http://localhost:3001/categories');

  const [options] = useState(categoryList);
  const [isFilled, setIsFilled] = useState(false);
  const [values, setValues] = useState({
    title: '',
    price: '',
    description: '',
    city: '',
    condition: '',
    categories: [],
  });

  const handleTitleChange = (e) => setValues({ ...values, title: e.target.value });
  const handlePriceChange = (e) => setValues({ ...values, price: e.target.value });
  const handleDescriptionChange = (e) => setValues({ ...values, description: e.target.value });
  const handleCityChange = (e) => setValues({ ...values, city: e.target.value });
  const handleConditionChange = (e) => setValues({ ...values, condition: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const value of Object.values(values)) {
      if (value) {
        setIsFilled(true);
      } else {
        setIsFilled(false);
      }
    }
    console.log(values);
  };

  return (
    <div className={styles.add_product_container}>
      <form onSubmit={handleSubmit}>
        <label>Add product</label>

        <label htmlFor="title">
          Title
          <input
            placeholder="Laptop / Bike / Table "
            type="text"
            name="title"
            value={values.title}
            onChange={handleTitleChange}
            // required
          />
        </label>

        <label htmlFor="price">
          Price
          <input
            placeholder="1.5"
            min="0"
            step="any"
            type="number"
            name="price"
            value={values.price}
            onChange={handlePriceChange}
            // required
          />
          €
        </label>

        <label htmlFor="description">
          Description
          <input
            placeholder="Lorem ipsum dolor sit amet."
            type="text"
            name="description"
            value={values.description}
            onChange={handleDescriptionChange}
            // required
          />
        </label>

        <label htmlFor="city">
          City
          <input
            placeholder="Amsterdam"
            type="text"
            name="city"
            value={values.city}
            onChange={handleCityChange}
            // required
          />
        </label>

        <label htmlFor="condition">
          Condition
          <select
            name="condition"
            value={values.condition}
            onChange={handleConditionChange}
            required
          >
            <option value="" disabled>
              Select
            </option>
            <option value="new">New</option>
            <option value="like new">Like new</option>
            <option value="fairly used">Fairly used</option>
          </select>
        </label>

        <Multiselect
          isObject={false}
          options={categoryList}
          onSelect={(selected) => (values.categories = selected)}
        />

        <Uploader isFilled={isFilled} />
      </form>
    </div>
  );
};

export default AddProduct;

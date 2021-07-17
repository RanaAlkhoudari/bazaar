import axios from 'axios';
import styles from './addProduct.css';
import Uploader from '../uploader/uploader';
import React, { useState, useEffect } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

const AddProduct = () => {
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState({
    city: '',
    title: '',
    price: 0,
    condition: '',
    categories: [],
    description: '',
  });

  useEffect(() => {
    fetchCategories();
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
    <div className={styles.addProductContainer}>
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>Add product</h2>

        <input
          required
          type="text"
          name="title"
          placeholder="Title"
          value={values.title}
          onChange={handleTitleChange}
          className={`${styles.customInput} searchWrapper`}
        />

        <input
          min="0"
          required
          step="any"
          name="price"
          type="number"
          placeholder="Price"
          value={values.price}
          onChange={handlePriceChange}
          className={`${styles.customInput} searchWrapper`}
        />

        <div
          className={`${styles.customSelect} ${styles.customInput} ${styles.conditionSelectWrapper} searchWrapper`}
        >
          <select required onChange={handleConditionChange}>
            <option className={styles.defaultOption} hidden selected disabled>
              Condition
            </option>
            <option value="new">New</option>
            <option value="like new">Like new</option>
            <option value="fairly used">Fairly used</option>
          </select>
        </div>

        <input
          required
          type="text"
          name="city"
          placeholder="City"
          value={values.city}
          onChange={handleCityChange}
          className={`${styles.customInput} searchWrapper`}
        />

        <textarea
          required
          type="text"
          name="description"
          placeholder="Description"
          value={values.description}
          onChange={handleDescriptionChange}
          className={`${styles.descriptionInput} ${styles.customInput} searchWrapper `}
        />

        <Multiselect
          isObject={false}
          options={categories}
          placeholder="Categories"
          avoidHighlightFirstOption={true}
          onSelect={(selected) => (values.categories = selected)}
          style={{
            multiselectContainer: {
              width: '18rem',
            },
            chips: { background: 'var(--color-main)' },
            optionContainer: { background: '#666', color: 'white' },
          }}
        />

        <Uploader data={values} />
      </form>
    </div>
  );
};

export default AddProduct;

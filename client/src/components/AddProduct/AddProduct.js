import axios from 'axios';
import styles from './addProduct.css';
import React, { useState } from 'react';
import Uploader from '../uploader/uploader';
import { Multiselect } from 'multiselect-react-dropdown';

const AddProduct = () => {
  // const categoryList = async () => await axios.get(`${process.env.REACT_APP_API_URL}/categories`);
  // const conditionList = async () => await axios.get(`${process.env.REACT_APP_API_URL}/conditions`); //?? should be fetched or hard coded
  const categoryList = ['Electronic', 'Health', 'Home'];
  const conditionList = ['new', 'like new', 'fairly used'];

  const [values, setValues] = useState({
    city: '',
    title: '',
    price: '',
    condition: '',
    categories: [],
    description: '',
  });

  const handleCityChange = (e) => setValues({ ...values, city: e.target.value });
  const handleTitleChange = (e) => setValues({ ...values, title: e.target.value });
  const handlePriceChange = (e) => setValues({ ...values, price: e.target.value });
  const handleDescriptionChange = (e) => setValues({ ...values, description: e.target.value });

  return (
    <div className={styles.addProductContainer}>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Add product</label>

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
          required
          min="0"
          step="any"
          name="price"
          type="number"
          placeholder="Price"
          value={values.price}
          onChange={handlePriceChange}
          className={`${styles.customInput} searchWrapper`}
        />

        <Multiselect
          singleSelect
          isObject={false}
          placeholder="Condition"
          avoidHighlightFirstOption={true}
          options={conditionList}
          onSelect={(selected) => (values.condition = selected.toString())}
          style={{
            multiselectContainer: {
              width: '18rem',
            },
            option: { textTransform: 'capitalize' },
            chips: { fontSize: '1rem', textTransform: 'capitalize' },
          }}
        />

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
          options={categoryList}
          placeholder="Categories"
          avoidHighlightFirstOption={true}
          onSelect={(selected) => (values.categories = selected)}
          style={{
            multiselectContainer: {
              width: '18rem',
            },
          }}
        />

        <Uploader data={values} />
      </form>
    </div>
  );
};

export default AddProduct;

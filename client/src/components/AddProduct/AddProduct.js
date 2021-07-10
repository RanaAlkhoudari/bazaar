import styles from './AddProduct.css';
import React from 'react';
import Uploader from '../Uploader/Uploader';

const AddProduct = () => {
  const newProduct = {};

  const handleSubmit = (e) => {
    e.preventDefault();

    const productForm = e.target;
    const formData = new FormData(productForm);
    for (const key of formData.keys()) {
      newProduct[key] = formData.get(key);
    }
  };

  return (
    <div className={styles.add_product_container}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Add product</label>

        <label htmlFor="title">
          Title
          <input
            placeholder="Laptop / Bike / Table "
            type="text"
            name="title"
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
            // required
          />
        </label>

        <label htmlFor="city">
          City
          <input
            placeholder="Amsterdam"
            type="text"
            name="city"
            // required
          />
        </label>

        <label htmlFor="condition">
          Condition
          <input
            placeholder="Like new"
            list="conditions"
            name="condition"
            // required
          />
          <datalist id="conditions">
            <option value="New"></option>
            <option value="Like New"></option>
            <option value="Fairly Used"></option>
          </datalist>
        </label>

        <label htmlFor="category">
          Category
          <input
            placeholder="Books"
            list="categories"
            name="category"
            // required
          />
          <datalist id="categories">
            <option value="Health"></option>
            <option value="Electronics"></option>
            <option value="Home & Kitchen"></option>
          </datalist>
        </label>

        <Uploader data={newProduct} />
      </form>
    </div>
  );
};

export default AddProduct;

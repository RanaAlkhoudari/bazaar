import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    try {
      const res = await axios.get(`http://localhost:3000/api/v1/categories`);
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleCategory = (category) => {
    setCategoryName(category);
  };

  return (
    <div>
      {categories.length !== 0 &&
        categories.map((category) => {
          return (
            <div key={category._id}>
              <Link to={`${category.name}`}>
                <button onClick={() => handleCategory(category)}>{category.name}</button>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Category;

import React, { useContext } from 'react';
import { GlobalContext } from '../context/context';

const Category = () => {
  const { categories, setCategoryName } = useContext(GlobalContext);
  const handleCategory = (category) => {
    setCategoryName(category);
  };

  return (
    <div>
      {categories.map((category) => {
        return (
          <div key={category}>
            <button onClick={() => handleCategory(category)}>{category}</button>
          </div>
        );
      })}
    </div>
  );
};

export default Category;

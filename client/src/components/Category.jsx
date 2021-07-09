import React, { useContext } from 'react';
import { GlobalContext } from '../context/context';

const Category = () => {
  const { categories, setCategoryName } = useContext(GlobalContext);
  const handleCategory = (e) => {
    setCategoryName(e.target.innerText);
  };

  return (
    <div>
      {categories.map((category) => {
        return (
          <button
            onClick={() => handleCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
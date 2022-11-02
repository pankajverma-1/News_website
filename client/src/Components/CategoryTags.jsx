import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryTags = () => {
  const category = [
    'Business',
    'Health',
    'Politics',
    'Education',
    'Foods',
    'Science',
    'Corporate',
    'Entertainment',
    'Travel',
    'LifeStyle',
    'BitCoin',
  ];
  const navigate = useNavigate();
  return (
    // navigate(path, { replace: true })
    <>
      <div className="d-flex flex-wrap justify-content-around">
        {category.map((value, key) => (
          <span
            key={key}
            onClick={() => navigate(`/category/${value}`)}
            className="py-1 px-2 my-2 border categoryTagValue"
          >
            {value}
          </span>
        ))}
      </div>
    </>
  );
};

export default CategoryTags;

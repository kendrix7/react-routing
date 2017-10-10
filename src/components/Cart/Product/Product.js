import React from 'react';

import './Product.css';

import { Link } from 'react-router-dom';

export default function Product({ title, img, id }) {
  return (
    <Link to={`/details/${id}`}>
      <div id="CartProduct__container">
        <img alt="Product" src={img} width="70px" height="70px" />
        <span id="CartProduct__title"> {title} </span>
      </div>
    </Link>
  )
}
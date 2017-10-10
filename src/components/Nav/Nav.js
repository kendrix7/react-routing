import React from "react";
import { connect } from "react-redux";

import './Nav.css';

import ShoppingCart from 'react-icons/lib/fa/shopping-cart';

import { Link } from 'react-router-dom';

function Nav({ items }) {
  return (
    <div id="Nav__container">
      <div id="Nav__linksContainer">
        <Link to='/' className='navLink'>
          <span className="Nav__label">Store</span>
        </Link>

        <div id="Nav__checkoutContainer">
          <Link to='/checkout' className='navLink'>
            <div id="Nav__itemsInCart"> {items} </div>
          </Link>
          <ShoppingCart id="Nav__shoppingCart" />
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    items: state.cart.length
  };
}

export default connect(mapStateToProps)(Nav);
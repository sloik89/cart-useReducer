import React from "react";
import { GrClose } from "react-icons/gr";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
const Cart = ({ id, img, title, price, amount }) => {
  return (
    <article className="cart-item">
      <div className="img-cart">
        <img src={img} alt={title} />
      </div>
      <div className="cart-item-info">
        <h4>{title}</h4>

        <div className="amount-container">
          <div className="amount-btns-wrapper">
            <button className="amount-btn">
              <FiChevronUp />
            </button>
            <p className="amount">{amount}</p>

            <button className="amount-btn">
              <FiChevronDown />
            </button>
          </div>
          <button className="remove-btn">
            <GrClose />
          </button>
        </div>
      </div>
      <div className="item-price">
        <h4 className="price">{price}$</h4>
      </div>
    </article>
  );
};

export default Cart;

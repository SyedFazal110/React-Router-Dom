import React from "react";
import { useNavigate } from "react-router-dom";
import './Card.css';

const Card = ({ image, title, category, price, count, rate }) => {
  const navigate = useNavigate();


  const SingleProduct = (item) =>{
    navigate(`singleproduct/${item.id}`)
  }

  return (
    <div className="card">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-details">Category: {category}</p>
        <p className="card-details">Rate: {rate}</p>
        <p className="card-details">Count: {count}</p>
        <p className="card-details">Price: ${price}</p>
        <div>
          <button className="card-button"  onClick={()=> SingleProduct(item)}>Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

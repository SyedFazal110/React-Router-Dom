import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setData(res);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="student-container">
      <h1>Product Details</h1>
      <h1>{data ? 
      <Card
      key={item.id}
      image={item.image}
      title={item.title}
      category={item.category}
      price={item.price}
      rate={item.rating.rate}
      count={item.rating.count}
    /> : "loading..."}</h1>
    </div>
  );
};

export default SingleProduct;

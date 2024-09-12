import React, { useEffect, useState } from 'react';
import './home.css';
import Card from '../components/card';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setData(res);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  const Single = (id) => {
    
    // console.log("yes" , id)
    navigate(`/singleproduct/${id}`)
  }

  return (
    <div className="home-container">
       <h1>Products</h1>
      <div className="card-container">
        {data ? data.map((item) => (
              <Card
              key={item.id}
              image={item.image}
              title={item.title}
              category={item.category}
              price={item.price}
              rate={item.rating.rate}
              count={item.rating.count}
              SingleProduct={() => {Single(item.id)}}
            />  
          )
        ) : <h1 className="loading">Loading...</h1>}
      </div>
    </div>
  );
};

export default Home;

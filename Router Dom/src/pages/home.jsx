import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setData(res);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const singleUser = (item) => {
    navigate(`singlestudent/${item.id}`);
  };

  return (
    <div className="home-container">
      <h1>Hello Students</h1>
      <div className="card-container">
        {data ? data.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.username}</p>
            <button onClick={() => singleUser(item)}>Check Details</button>
          </div>
        )) : <h1>Loading...</h1>}
      </div>
    </div>
  );
};

export default Home;


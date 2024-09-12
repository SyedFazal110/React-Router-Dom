// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Card from '../components/card';

// const SingleProduct = () => {
//   const [data, setData] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     fetch(`https://fakestoreapi.com/products/${id}`)
//       .then(res => res.json())
//       .then(res => {
//         console.log(res);
//         setData(res);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div className="student-container">
//       <h1>Product Details</h1>
//       <h1>{data ? 
//       <Card
      
//       key={data.id}
//       image={data.image}
//       title={data.title}
//       category={data.category}
//       price={data.price}
//       rate={data.rating.rate}
//       count={data.rating.count}
//     /> : "loading..."}</h1>
//     </div>
//   );
// };

// export default SingleProduct;



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/card';
import './SingleProduct.css'; // Import the CSS file

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
  }, [id]); // Added id to the dependency array

  return (
    <div className="student-container">
      <h1>Product Details</h1>
      {data ? (
        <Card
          key={data.id}
          image={data.image}
          title={data.title}
          category={data.category}
          price={data.price}
          rate={data.rating.rate}
          count={data.rating.count}
        />
      ) : (
        <h1 className="loading-message">Loading...</h1>
      )}
    </div>
  );
};

export default SingleProduct;

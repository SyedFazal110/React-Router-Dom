import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Singlestudent.css';

const Singlestudent = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
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
      <h1>Student Details</h1>
      <h2>{data ? data.name : "Loading..."}</h2>
      {data && (
        <div className="student-info">
          <p><strong>Username:</strong> {data.username}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phone}</p>
          <p><strong>Website:</strong> {data.website}</p>
        </div>
      )}
    </div>
  );
};

export default Singlestudent;

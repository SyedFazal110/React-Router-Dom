import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [data , setData] = useState(null);

  const navigate = useNavigate()

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( res => res.json())
    .then( (res) => {
      console.log(res)
      setData(res)
    })
    .catch( (error) => {
      console.log(error);
      
    })
  } , [])


  const singleUser = (item) =>{
    navigate(`singlestudent/${item.id}`)
  }


  return (
    <>
    <h1>Hello Students</h1>
    {
      data ? data.map((item) => {
        return <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.username}</p>
          <button onClick={ () => {singleUser(item)}}>Show More</button>
        </div>
      }) : <h1>Loading...</h1>
    }
    </>
  )
}

export default Home
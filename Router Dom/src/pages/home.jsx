import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [data , setData] = useState(null);

  const navigate = useNavigate()

  useEffect( () => {
    axios('https://jsonplaceholder.typicode.com/users')
    .then( res => res.json())
    .then( (res) => {
      console.log(res)
      setData(res)
    })
    .catch( (error) => {
      console.log(error);
      
    })
  } , [])


  return (
    <div>Home</div>
  )
}

export default Home
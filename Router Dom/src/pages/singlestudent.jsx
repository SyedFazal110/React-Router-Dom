import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Singlestudent = () => {
  const [data , setData] = useState(null)

  const { id } = useParams();
  return (
    
  )
}

export default Singlestudent
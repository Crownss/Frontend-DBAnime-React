import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardHome from '../../components/cards/card_home'
import Navbar from '../../components/navbar'


function Home() {
  const [result, setResult] = useState([])
  useEffect(()=>{
    axios.get(process.env.REACT_APP_API_HOME)
    .then((res)=>setResult(res.data))
    .catch((err)=>console.log(err.message))
  }, [])
  return (
    <>
    <Navbar />
    <CardHome props={result}/>
    </>
  )
}

export default Home
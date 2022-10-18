import axios from 'axios'
import React, { useCallback, useRef, useState } from 'react'
import Navbar from '../components/navbar'

export default function Search(){
  const searchRef = useRef(null)
  const [query,setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [result, setResult] = useState([])
  const searchEndPoint = process.env.REACT_APP_API_SEARCH+query;
  const onChange = useCallback((event)=>{
      const query = event.target.value
      setQuery(query)
      if (query.length){
          axios.get(searchEndPoint)
          .then((res)=>setResult(res.data.data))
          .catch((err)=>console.log(err.message))
      }else{
          setResult([])
      }
  }, [searchEndPoint])
  const onFocus = useCallback(() => {
      setActive(true)
      window.removeEventListener('click', onClick)
  }, [onClick])
  const onClick = useCallback((event)=>{
      if(searchRef.current && !searchRef.current.contains(event.target)){
          setActive(false)
          window.removeEventListener('click', onClick)
      }
  }, [])
  return (
      <>
        <Navbar />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1 className="text-center text-xl">As you wish</h1>
          <h1 className="text-center text-sm">*(pencet silang biar result search nya ilang)</h1>
          <center>
              <div className="w-full h-full static">
                  <div className="mb-6">
                      <div className="">
                          <input className="bg-gray-200 text-center appearance-none border-2 border-gray-200 rounded w-full py-2 px-20 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="" type="search" placeholder="search anime" onChange={onChange} onFocus={onFocus} value={query} />
                          {active && result ? result.length>0 && (
                          <ul className="mt-5">
                              {result.map(({mal_id, title, url})=> (
                                  <li id={mal_id}>
                                      <a href={url}>
                                        <p>{title}</p>
                                      </a>
                                  </li>
                              ))}
                          </ul>
                      ):""}
                      </div>
                  </div>
              </div>
          </center>
      </>
  )
}
import { useState ,useEffect} from 'react'

import './App.css'
import { fetchDataFromApi } from './utils/api'
import { useSelector,useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homeslice'


function App() {
  const  dispatch = useDispatch()
   const {url } = useSelector
    useEffect (() => {
    apiTesting();
  },[])

       const apiTesting = () => {
        fetchDataFromApi('/movie/popular')
        .then((res) => {
          console.log(res);
          dispatch(getApiConfiguration (res))
        })
       }
  
  return 
      <div className='App'> App</div>
  
}

export default App

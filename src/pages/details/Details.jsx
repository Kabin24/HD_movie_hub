import React from 'react'
import { useParams } from 'react-router-dom'
import "./style.scss"
import DetailsBanner from './detailsBanner/DetailsBanner'
import useFetch from '../../hooks/useFetch'
const Details = () => {
  const {mediaType,id} = useParams();
  const {data,loading} = useFetch(`/${mediaType}/${id}/videos`)
   const {data: credits,loading} = useFetch(`/${mediaType}/${id}/videos`)
  return (
    <div>
      <DetailsBanner/>
    </div>
  )
}

export default Details
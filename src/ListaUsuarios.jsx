import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UsuarioIndividual from './UsuarioIndividual'

const ListaUsuarios = () => {

  const[listUser,setListUser]=useState([])


useEffect(()=>{
const getData=async()=>{
  try {
   let res= await axios.get("http://localhost:9000/api/obtenerusuarios");

 setListUser(res.data)
} catch (error) {
    console.log(error.response)
  }
}
getData()
},[])

const usuarios=listUser.map((el)=>{
  
  return(
  <div>
    <UsuarioIndividual  el={el}/>
  </div>
  )
})

  return (
    <div className='container'>
      <h2>Lista de Usuarios</h2>
{usuarios}
    

    </div>
  )
}

export default ListaUsuarios
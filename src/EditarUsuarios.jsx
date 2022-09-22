import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import uniqid from 'uniqid'
const dataName={
  nombre:"",
  email:"",
  telefono:"",
  idusuario:uniqid()
}



const EditarUsuarios = () => {

  const[form,setForm]=useState(dataName)
  const params=useParams();




useEffect(()=>{
const getDataId=async()=>{
  try {
let res=  await axios.post("http://localhost:9000/api/obtenerdatousuario/"+params._id)
console.log("trumessage",res)
   setForm(res.data )
  } catch (error) {
    console.log(error)
  }
}
getDataId()
},[])
const handleChange=(e)=>{

  setForm({...form,[e.target.name]:e.target.value})
}

console.log(form,"soy el formulario")
const editarUsuario=async()=>{

  try {
   
   axios.put(`http://localhost:9000/api/editarusuario/${params._id}`,form)
window.location.reload()
    setForm(dataName)
   } catch (error) {
    console.log(error.response)
   }


}

  return (
    <div className='container'>
    <div className='row'>
      <h2  className='mt-4'>Editar usuario</h2>
      
    </div>

    <div className='row'>
        <div className='col-sm-6 offset-3' >
     <div className='mb-3'>
        <label htmlFor="nombre"  className='form-label'>Nombre</label>
        <input type="text" className='form-control' name='nombre' onChange={handleChange} value={form.nombre} />
     </div>

     <div className='mb-3'>
        <label htmlFor="email"  className='form-label'>Email</label>
        <input type="text" className='form-control' name="email" onChange={handleChange} value={form.email} />
     </div>

     <div className='mb-3'>
        <label htmlFor="telefono" className='form-label'>Telefono</label>
        <input type="text" className='form-control' name='telefono' onChange={handleChange} value={form.telefono} />
     </div>

      <button  type='submit' className='btn btn-success' onClick={editarUsuario}>Guardar Usuario</button>
        </div>
    </div>

    

    </div>
 
  )
}

export default EditarUsuarios
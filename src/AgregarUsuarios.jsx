import axios from 'axios'
import React, { useState } from 'react'
import uniqid from 'uniqid'

const dataName={
  nombre:"",
  email:"",
  telefono:"",
  idusuario:uniqid()
}
const AgregarUsuarios = () => {
const[form,setForm]=useState(dataName)


const handleChange=(e)=>{
  setForm({...form,[e.target.name]:e.target.value})
}

const agregarUsuario=async()=>{
         try {
          axios.post("http://localhost:9000/api/agregarusuario",form)
          window.location.reload()
          setForm(dataName)
         } catch (error) {
          console.log(error.response)
         }


}





  return (
    <div className='container'>
    <div className='row'>
      <h2  className='mt-4'>Crear un nuevo usuario</h2>
      
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

      <button  type='submit' className='btn btn-success' onClick={agregarUsuario}>Agregar Usuario</button>
        </div>
    </div>

    

    </div>
  )
}


export default AgregarUsuarios
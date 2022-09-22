import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'

const UsuarioIndividual = ({el}) => {
const {nombre,email,telefono,_id}=el;

  const borrarUsuario=async(_id)=>{
try {
 await axios.delete(`http://localhost:9000/api/eliminar/${_id}`)
alert(`Se elimino el id ${_id} correctamente` )
window.location.reload();
  
} catch (error) {
  console.log(error)
}
  }

  return (
    <div className='container'>
 <div className='row'>

  <div className='col-sm-6 offset-3'>
  <ul className='list-group'>
    <li className='list-group-items'>{_id} </li>
    <li className='list-group-items'>{nombre} </li>
    <li className='list-group-items'>{email} </li>
    <li className='list-group-items'>{telefono} </li>
  </ul>
<Link to={`/editarusuario/${el._id}`}> <li className='btn btn-success'>Editar</li></Link>

&nbsp;
<button className='btn btn-danger' onClick={()=>{borrarUsuario(_id)}} >Borrar</button>
<hr className='mt-4'></hr>
  </div>
 
 </div>
    </div>
  )
}

export default UsuarioIndividual
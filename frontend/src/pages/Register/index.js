import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'



import api from '../../services/api';
import './styles.css';

function Register() {
  const [name,setName] = useState('');
  const [lastname,setLastName] = useState('');
  const [age,setAge] = useState('');
  const [contact,setContact] = useState('');

  const history = useHistory();

  async function cadastro (e) {
      e.preventDefault();
      const data = {
        name,
        lastname,
        age,
        contact
      };

      try {
        const response = await api.post('users',data);
        console.log(response);
        alert(`Seu id será ${response.data.id}`)
        
        history.push('/');
      } catch (error) {
        alert('Erro no cadastro, tente novamente')
      }

  }


  return (
    
     <div className="data">
       
       <h2>Preencha os campos necessários</h2>
       <Link to="/" className="voltar">Voltar</Link>
       <form className="form" onSubmit={cadastro}>

         <input 
         type="text" 
         name="name"
         placeholder="Nome"
         value={name}
         onChange={e => setName(e.target.value)}
         autoFocus
         />

         <input 
         type="text" 
         name="lastname"
         placeholder="Sobrenome"
         value={lastname}
         onChange={e => setLastName(e.target.value)}
         />

         <input 
         type="number" 
         name="age"
         placeholder="Idade"
         value={age}
         onChange={e => setAge(e.target.value)}
         />

         <input 
         type="text" 
         name="contact"
         placeholder="Numero"
         maxLength="11"
         value={contact}
         onChange={e => setContact(e.target.value)}
         />

         <button type="submit">Cadastrar</button>
       </form>
     </div>
  );
}

export default Register;
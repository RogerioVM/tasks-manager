import React, { useState, useCallback } from 'react';
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

  const UserName = useCallback((event) => {
    setName(event.target.value);
  },[]);

  const UserLastName = useCallback((event) => {
      setLastName(event.target.value);
  },[]);

  const UserAge = useCallback((event) => {
      setAge(event.target.value);
  }, []);

  const UserContact = useCallback((event) => {
      setContact(event.target.value);
  }, []);

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
         onChange={UserName}
         autoFocus
         />

         <input 
         type="text" 
         name="lastname"
         placeholder="Sobrenome"
         value={lastname}
         onChange={UserLastName}
         />

         <input 
         type="number" 
         name="age"
         placeholder="Idade"
         value={age}
         onChange={UserAge}
         />

         <input 
         type="text" 
         name="contact"
         placeholder="Tel:"
         maxLength="11"
         value={contact}
         onChange={UserContact}
         />

         <button type="submit">Cadastrar</button>
       </form>
     </div>
  );
}

export default Register;
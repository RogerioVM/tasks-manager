import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';
import { Button, Container } from '@material-ui/core';
import Home from '@material-ui/icons/Home';


import api from '../../services/api';
import './styles.css';

function Login() {

  const [id,setId] = useState('');
  const history = useHistory();

  async function login (e) {

      e.preventDefault();
      const data = { id }
      try {
        const response = await api.post('sessions',data);

        localStorage.setItem('user_id', id)
        localStorage.setItem('name',response.data.name)

        history.push('/profile')
      } catch (error) {
        alert('Algo deu errado');
      }
  }
  
  

  return (
    <Container>
        <fieldset >
            <h2>Faça seu login</h2>
            <form onSubmit={login}>
                <input type="text" placeholder="Seu Id" value={id} onChange={e => setId(e.target.value)}/>
                
                  <Button
                      variant='contained' 
                      color='primary' 
                      size='small'
                      startIcon={<Home />}
                      onClick={login}
                  >
                        Entrar
                  </Button>
                  
            </form>
            <Link to="/register">
              <FiLogIn />Não tenho cadastro
            </Link>
        </fieldset>
    </Container>

  );
}

export default Login;
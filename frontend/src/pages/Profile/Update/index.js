import React, { useState } from 'react';
import { Container,Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import api from '../../../services/api'

import './styles.css';

function Update() {

    const [id, setId] = useState('');
    const [novo_id, setNovoid] = useState('');
    const [newName, setNewName] = useState('');
    const [lastName, setLastName] = useState('');

    async function updater(e){
        e.preventDefault()
        const updatedDatas =  { novo_id, newName };

        const response = await api.put('/update', updatedDatas)

        alert(`Contatos atualizados ${response}`)
    }


  return (
      <Container>
          <Link to='/profile'>Voltar</Link>
            <h1 className="updateTitle">Atualize seus dados</h1>
            <Grid container direction='column'>
                <Link to='/update'>Id</Link>
                <Link to='/update'>Nome</Link>
                <Link to='/update'>Sobrenome</Link>
                <Link to='/update'>Idade</Link>
                <Link to='/update'>Numero</Link>
            </Grid>

            <form className='form' onSubmit={updater} >
                <input placeholder="Seu id" value={id} onChange={e => setId(e.target.value)} />
                <input placeholder="Novo id" value={novo_id} onChange={e => setNovoid(e.target.value)} />
                <input placeholder="Nome" value={newName} onChange={e => setNewName(e.target.value)} />
                <input placeholder="Sobrenome" value={lastName} onChange={e => setLastName(e.target.value)} />
                <button type="submit">Atualizar</button>
            </form>

      </Container>
  );
}

export default Update;
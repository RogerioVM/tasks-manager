import React, { useState } from 'react';
import { Container } from '@material-ui/core'
import api from '../../../services/api'

import './styles.css';

function Update() {

    const [novo_id, setNovoid] = useState('');
    const [newName, setNewName] = useState('');
    const [lastName, setLastName] = useState('');

    async function updater(e){
        e.preventDefault()
        const ndatas =  { novo_id, newName };

        const response = await api.put('/update', ndatas)

        alert(`Contatos atualizados ${response}`)
    }


  return (
      <Container>
            <h1 className="updateTitle">Atualize seus dados</h1>
            <form className='form' onSubmit={updater} >
                <input placeholder="Novo id" value={novo_id} onChange={e => setNovoid(e.target.value)} />
                <input placeholder="Nome" value={newName} onChange={e => setNewName(e.target.value)} />
                <input placeholder="Sobrenome" value={lastName} onChange={e => setLastName(e.target.value)} />
                <button type="submit">Atualizar</button>
            </form>
      </Container>
  );
}

export default Update;
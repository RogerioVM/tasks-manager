import React, { useState } from 'react';
import { Container } from '@material-ui/core'
import api from '../../../services/api'

function Update() {

    const [novo_id, setNovoid] = useState('');
    const [contact, setContact] = useState('');

    async function updater(e){
        e.preventDefault()
        const ndatas =  { novo_id, contact };

        const response = await api.put('/update', ndatas)

        alert(`Contatos atualizados ${response}`)
    }


  return (
      <Container>
            <h1>Página para atualizar cadastro</h1>
            <form onSubmit={updater} >
                <input value={novo_id} onChange={e => setNovoid(e.target.value)} />
                <input value={contact} onChange={e => setContact(e.target.value)} />
                <button type="submit">Atualizar</button>
            </form>
      </Container>
  );
}

export default Update;
import React, { useState } from 'react';
import { Container } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom';
import api from '../../../services/api';
// import { Container } from './styles';
import './styles.css';

function Tasks() {
  const [title,setTitle] = useState('');
  const [difficulty,setDifficulty] = useState('');
  const [description,setDescription] = useState('');
  const [times_per_week,setTimesPerWeek] = useState('');
  const [date,setDate] = useState('');

  const userId = localStorage.getItem('user_id')
  const userName = localStorage.getItem('name')

  const history = useHistory();

  async function createTask(e) {
    e.preventDefault();
    const datas = {
      title,
      difficulty,
      description,
      times_per_week,
      date
    };
    
    try {
        await api.post('/tarefas',datas, {
          headers: {
            Authorization: userId
          }
        });

        
        alert('Tarefas criadas com sucesso, '+userName);
        history.push('/profile')
        

    } catch (err) {
      alert('Erro inesperado');
    }
  }

  return (
    <>
    <Link to="/profile" className="voltar">Voltar</Link>
    <Container>
        <h2>Crie sua nova tarefa aqui</h2>
          <form onSubmit={createTask}>
            <div className="inputs">

            <input 
            type="text" 
            name="title"
            placeholder="Título"
            value={title}
            onChange={e => setTitle(e.target.value)}
            />

            <input 
            type="text" 
            name="difficulty"
            placeholder="Dificuldade"
            value={difficulty}
            onChange={e => setDifficulty(e.target.value)}

            />


            </div>
          

            <textarea 
            type="text" 
            name="description"
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
            />

            <input 
            type="text" 
            name="times_per_week"
            placeholder="Frequência"
            value={times_per_week}
            onChange={e => setTimesPerWeek(e.target.value)}
            />

            <input 
            type="date"
            name="date"
            placeholder="Data"
            value={date}
            onChange={e => setDate(e.target.value)}
            />

          <button type="submit">Criar</button>
          </form>
      </Container>
      </>
  );
}

export default Tasks;
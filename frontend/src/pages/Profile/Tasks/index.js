import React, { useState } from 'react';
import { Container } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom';
import api from '../../../services/api';
import './styles.css';

function Tasks() {
  const [title,setTitle] = useState('');
  const [difficulty,setDifficulty] = useState('');
  const [description,setDescription] = useState('');
  const [times_per_week,setTimesPerWeek] = useState('');
  const [firstDate,setPrimaryDate] = useState('');
  const [date,setFinalDate] = useState('');

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
      firstDate,
      date
    };

    try {
        await api.post('/tarefas',datas, {
          headers: {
            Authorization: userId
          }
        });

        
        alert(`Tarefas criadas com sucesso, ${userName}`);
        history.push('/profile')
        

    } catch (err) {
      alert('Erro inesperado, por favor tente mais tarde');
    }
  }

  // const taskTitle = useCallback((event) => {
  //       setTitle(event.target.value);
  // }, []);

  // const taskDifficulty = useCallback((event) => {
  //       setDifficulty(event.target.value);
  // }, []);

  // const taskDescription = useCallback((event) => {
  //     setDescription(event.target.value);
  // }, []);

  // const taskTimesPerWeek = useCallback((event) => {
  //     setTimesPerWeek(event.target.value);
  // }, []);

  // const taskInit = useCallback((event) => {
  //     setPrimaryDate(event.target.value);
  // },[]);

  // const taskFinal = useCallback((event) => {
  //     setFinalDate(event.target.value);
  // },[]);
  
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
            onChange={(e) => setTitle(e.target.value)}
            />

            <input 
            type="text" 
            name="difficulty"
            placeholder="Dificuldade"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}

            />
            </div>

            <textarea 
            type="text" 
            name="description"
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            
            <p>Frequência semanal: </p>
            <input 
            type="text" 
            name="times_per_week"
            value={times_per_week}
            onChange={(e) => setTimesPerWeek(e.target.value)}
            />
            <p>De: </p>

            <input 
            type="date"
            min='2021-01-01'
            max='2050-01-01'
            name="date"
            placeholder="Data"
            value={firstDate}
            onChange={(e) => setPrimaryDate(e.target.value)}
            />
            <p>Até: </p>
            
            <input 
            type="date"
            min='2021-01-01'
            max='2050-01-01'
            name="date"
            placeholder="Data"
            value={date}
            onChange={(e) => setFinalDate(e.target.value)}
            />

          <button type="submit">Criar</button>
          </form>
      </Container>
      </>
  );
}

export default Tasks;
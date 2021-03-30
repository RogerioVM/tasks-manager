import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container,Grid, Button} from '@material-ui/core';
import  { ExitToApp, PostAdd, Update }  from '@material-ui/icons'

import api from '../../services/api';

import './styles.css';


function Profile() {
  const [tarefas, setTarefas] = useState([]);

  const id = localStorage.getItem('user_id');
  const name = localStorage.getItem('name');

  useEffect(() => {
    api.get('/profile', {
      headers : {
        Authorization: id,
      }
    }).then(response => {
      setTarefas(response.data)
    })
  }, [id])

  const history = useHistory();
  
  
  return (
    <Container style={{padding: 20}}>
      <h2> Olá,{name}! </h2>
      <p>Organize suas tarefas para sua melhor produtividade.</p>
        <div className="tarefas">

          <Grid  container direction='row' justify='space-between' style={{margin: '0px 7px'}}>
              <Button 
                startIcon={<PostAdd/>}
                variant='contained' 
                color='primary' 
                onClick={() => history.push('/tarefas')}>Adicionar nova tarefa
              </Button>
              
                <Button 
                style={{marginRight:13}}
                variant='outlined'
                startIcon={<Update/>}
                color='secondary'
                onClick={() => history.push('/update')}>Atualizar cadastro
                </Button>

              <Button 
                style={{marginRight:13}}
                variant='contained'
                startIcon={<ExitToApp/>}
                color='secondary'
                onClick={() => {
                  const logOut = window.confirm("Tem certeza que deseja sair?") 
                  if(logOut === true) {
                    history.push('/');
                  }
                }}>Logout
                </Button>


          </Grid>
                {/* Carrega os dados do banco de dados */}
                <ul>
                    {tarefas.map(tarefa => (
                      <li key={tarefa.id}> 
                          <strong>Titulo</strong>
                          <p> {tarefa.title} </p>
                          
                          <strong>Descrição</strong>
                          <p> {tarefa.description} </p>

                          <strong>Dificuldade</strong>
                          <p> {tarefa.difficulty} </p>

                          <strong>Frequência</strong>
                          <p> {tarefa.times_per_week} </p>

                          <strong>Inicio:</strong>
                          <p> {tarefa.firstDate} </p>
                          
                          <strong>Término</strong>
                          <p> {tarefa.date} </p>
                      </li>
                      ))}
                </ul>
              </div>
          </Container>
  );
}

export default Profile;
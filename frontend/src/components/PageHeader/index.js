import React from 'react';
import {FaStickyNote} from 'react-icons/fa'
import './styles.css';
// import { Container } from './styles';

function PageHeader({title}) {
  return (
      <div className="header-container">
          <div className="logo">
              <h1> {title} </h1>
              <cite>For everyone, For everyplace</cite>
          </div>

          <div className="picture">
              <FaStickyNote size={150} color='blue'/>
          </div>

      </div>
  );
}

export default PageHeader;
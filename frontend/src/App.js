import React from 'react';
import Routes from './routes';
import './global.css';
import PageHeader from './components/PageHeader';

function App() {
  return (
    <div className="container">
      <PageHeader title="Tasks Manager" />
      <Routes />
    </div>
  );
}

export default App;

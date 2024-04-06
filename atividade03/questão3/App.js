import React from 'react';
import ToDoList from './ToDoList';

const App = () => {
  const tasks = ['Fazer compras', 'Estudar React', 'Terminar de ler'];

  return (
    <div>
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;
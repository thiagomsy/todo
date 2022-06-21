import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Fazer o Almoço', done: true },
    { id: 2, name: 'Fazer um Bolo', done: false },
    { id: 3, name: 'Fazer o Jantar', done: false },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  const handleSetDoneTask = (taskId: number, taskDone: boolean) => {
    let updateList = [...list];
    let listItem = updateList.findIndex((item => item.id == taskId));
    
    updateList[listItem].done = taskDone;

    setList(updateList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} onChange={handleSetDoneTask} />
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;
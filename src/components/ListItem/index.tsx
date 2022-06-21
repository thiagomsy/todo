import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';

type Props = {
  item: Item
  onChange: (taskId: number, taskDone: boolean) => void
}

export const ListItem = ({ item, onChange }: Props) => {
  return (
    <C.Container done={item.done}>
      <input
        type="checkbox"
        checked={item.done}
        onChange={e => onChange(item.id, e.target.checked)}
        id={'inputCheckbox' + item.id}
      />

      <label htmlFor={'inputCheckbox' + item.id}>{item.name} - {item.done.toString()}</label>
    </C.Container>
  );
}